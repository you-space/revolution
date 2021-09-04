<template>
  <video
    v-if="src && !src.includes('youtube.com')"
    :src="src"
    class="r-video"
    frameborder="0"
    controls
  />
  <iframe v-else :src="src" frameborder="0" class="r-video" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: undefined,
    },
  },
})
</script>

<style lang="scss">
.r-video {
  width: 100%;
  height: 180px;
  background-color: theme('colors.black');

  @media (min-width: theme('screens.sm')) {
    height: 400px;
  }

  @media (min-width: theme('screens.xl')) {
    height: 600px;
  }
}
</style>
