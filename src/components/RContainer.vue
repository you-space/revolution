<template>
  <div class="overflow-auto flex-1" :style="style">
    <slot />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  setup() {
    const headerHeight = inject<Ref<number>>('layout:header:height')

    const style = computed(() => {
      return {
        height: `calc(100% - ${headerHeight ? headerHeight.value : 0}px)`,
      }
    })

    return {
      style,
    }
  },
})
</script>
