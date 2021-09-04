<template>
  <div
    class="hidden lg:block bg-white overflow-hidden border-r"
    :class="model ? 'md:w-3/12 xl:w-2/12' : 'w-0'"
    :style="sytle"
  >
    <slot />
  </div>

  <div
    v-show="model"
    class="w-screen flex h-screen lg:hidden bg-black opacity-50 fixed"
    @click="model = false"
  />

  <div
    class="fixed h-screen lg:hidden bg-white overflow-auto border-r"
    :class="model ? 'w-full md:w-5/12' : 'w-0'"
    :style="sytle"
  >
    <div class="w-full flex justify-end">
      <r-btn icon="times" class="my-2" @click="model = false" />
    </div>

    <slot />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit('update:modelValue', value)
      },
    })

    const headerHeight = inject<Ref<number>>('layout:header:height')

    const style = computed(() => {
      return {
        height: `calc(100% - ${headerHeight ? headerHeight.value : 0}px)`,
      }
    })

    return {
      model,
      style,
    }
  },
})
</script>
