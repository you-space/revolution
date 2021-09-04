<template>
  <div class="h-screen flex flex-wrap">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, provide } from 'vue'

export default defineComponent({
  setup() {
    const headerHeight = ref(49)

    provide('layout:header:height', headerHeight)

    return {}
  },
})
</script>
