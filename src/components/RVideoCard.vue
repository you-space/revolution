<template>
  <div class="shadow-md bg-white flex flex-wrap">
    <router-link :to="to" class="w-full">
      <r-img :src="imgSrc" width="w-full" height="h-48" />
    </router-link>

    <router-link :to="to" class="px-4 pt-2 w-full">
      <h2 class="text-base font-bold text-gray-500 hover:text-blue-500">
        {{ title }}
      </h2>
    </router-link>

    <div class="flex flex-wrap p-4 self-end w-full">
      <p v-if="description" class="w-full mb-4 text-sm">
        {{ description.slice(0, 50) }}
      </p>

      <div v-if="type" class="w-6/12">
        <router-link
          :to="type.to"
          :class="['text-sm text-white rounded-sm px-2 py-1', type.color || 'bg-red-500']"
        >
          {{ type.name }}
        </router-link>
      </div>

      <span class="flex-1 text-sm text-right">
        {{ $moment(date).fromNow() }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    type: {
      type: Object,
      default: undefined,
    },
    imgSrc: {
      type: String,
      default: undefined,
    },
    date: {
      type: String,
      default: undefined,
    },
  },
  //   setup() {},
})
</script>
