<template>
  <r-page class="flex flex-wrap justify-between" padding>
    <div class="w-full xl:w-8/12 mb-4 xl:mb-0 bg-white shadow-sm">
      <r-inner-loading v-model="loading" />

      <template v-if="!loading">
        <r-video :src="item.src" />

        <div class="p-6">
          <h2 class="text-2xl font-bold mb-6">{{ item.title }}</h2>

          <p class="break-words whitespace-pre-line">
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

    <div class="flex-1">
      <r-inner-loading v-model="loading" />

      <div v-if="!loading" class="flex flex-wrap justify-end">
        <template v-for="relatedItem in relatedItems" :key="relatedItem.id">
          <r-video-card
            class="max-w-sm mx-0 md:mx-4 mb-4"
            :to="`/youtube/${relatedItem.id}`"
            :title="relatedItem.title"
            :description="relatedItem.description"
            :img-src="relatedItem.thumbnailSrc"
            :date="relatedItem.publishedAt"
          />
        </template>
      </div>
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

      item.value = await machine.findTypeItem('youtube-videos', props.id)
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
