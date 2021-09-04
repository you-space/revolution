<template>
  <div
    class="transition-all bg-white overflow-hidden border-r"
    :class="model ? 'w-2/12' : 'w-0'"
    :style="sytle"
  >
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
