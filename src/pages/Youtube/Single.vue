<template>
  <r-page class="flex justify-between" padding>
    <div class="w-8/12 bg-white shadow-sm">
      <r-inner-loading v-model="loading" />

      <template v-if="!loading">
        <r-video :src="item.src" width="w-full" style="height: 600px; max-width: 100%" />

        <div class="px-4 mt-8">
          <h2 class="text-2xl font-bold mb-6">{{ item.title }}</h2>

          <p style="white-space: pre-line">
            {{ item.description }}
          </p>
        </div>

        <!-- <r-list class="my-4">
          <r-comment
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
            :replies="comment.replies"
          >
          </r-comment>
        </r-list> -->
      </template>
    </div>

    <div class="w-3/12 px-2">
      <r-inner-loading v-model="loading" />

      <template v-for="relatedItem in relatedItems" :key="relatedItem.id">
        <r-video-card
          class="mb-4"
          :to="`/youtube/${relatedItem.id}`"
          :title="relatedItem.title"
          :description="relatedItem.description"
          :img-src="relatedItem.thumbnailSrc"
          :date="relatedItem.publishedAt"
        />
      </template>
    </div>
  </r-page>
</template>
<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, ref, watch, computed, onBeforeUnmount } from 'vue'
import { useMachine } from '@/plugins/you-space'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const machine = useMachine()
    const store = useStore()

    const loading = ref(false)

    const relatedItems = computed<any[]>({
      get() {
        return store.state.youtube.data
      },
      set(value) {
        store.commit('youtube/setData', value)
      },
    })

    const item = computed<any>({
      get() {
        return store.state.youtube.current
      },
      set(value) {
        store.commit('youtube/setCurrent', value)
      },
    })

    async function setVideo() {
      loading.value = true

      item.value = await machine.findItem('youtube-videos', props.id)
      // video.value = await machine.findVideo(props.videoId)
      // comments.value = await machine.fetchVideoComments(props.videoId)

      setTimeout(async () => {
        loading.value = false
      }, 800)
    }

    async function setSidebarVideos() {
      const { data } = await machine.fetchTypeItems('youtube-videos', {
        limit: 4,
        random: true,
      })

      relatedItems.value = data
    }

    void setSidebarVideos()

    watch(() => props.id, setVideo, {
      immediate: true,
    })

    onBeforeUnmount(() => {
      relatedItems.value = []
      item.value = null
    })

    return {
      item,
      relatedItems,
      loading,
    }
  },
})
</script>
