<template>
  <r-infinite-scroll :disable="disableScroll" @end="addNextPage">
    <r-page padding>
      <h4 class="mb-4 font-bold text-2xl">Youtube videos: {{ meta.total }}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <template v-for="item in items" :key="item.id">
          <r-video-card
            :to="`/youtube/${item.id}`"
            :title="item.title"
            :description="item.description"
            :img-src="item.thumbnailSrc"
            :date="item.publishedAt"
          />
        </template>
      </div>

      <template #loading>
        <div class="row justify-center q-my-md">
          <f-icon icon="spinner" />
        </div>
      </template>
    </r-page>
  </r-infinite-scroll>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { machine } from '@/plugins/you-space'
import { ServerPaginationMeta } from '@/plugins/you-space/machine'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()

    const disableScroll = ref(false)

    const items = computed<any[]>({
      get() {
        return store.state.youtube.data
      },
      set(value) {
        store.commit('youtube/setData', value)
      },
    })

    const meta = computed<Partial<ServerPaginationMeta>>({
      get() {
        return store.state.youtube.meta
      },
      set(value) {
        store.commit('youtube/setMeta', value)
      },
    })

    async function addNextPage() {
      const content = await machine.fetchTypeItems('youtube-videos', {
        page: (meta.value.current_page || 0) + 1,
      })

      items.value = items.value.concat(content.data)
      meta.value = content.meta

      if (meta.value.current_page === content.meta.last_page) {
        disableScroll.value = true
        return
      }
    }

    onMounted(() => {
      if (items.value.length === 0) {
        addNextPage()
      }
    })

    return {
      items,
      meta,
      disableScroll,

      addNextPage,
    }
  },
})
</script>
