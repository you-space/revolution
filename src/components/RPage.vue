<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    padding: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = ['r-page']

    if (props.padding) {
      classes.push('p-6')
    }

    return {
      classes,
    }
  },
})
</script>
