<template>
  <r-page padding>
    <h4 class="mb-4 font-bold text-2xl">Youtube videos: {{ meta.total }}</h4>
    <r-infinite-scroll :disable="disableScroll" :offset="250">
      <div class="grid grid-cols-5 gap-5">
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
    </r-infinite-scroll>
  </r-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { machine } from '@/plugins/you-space'
import { ServerPaginationMeta } from '@/plugins/you-space/machine'

const page = ref(1)
const meta = ref<Partial<ServerPaginationMeta>>({
  current_page: 1,
})

const items = ref<any[]>([])
const disableScroll = ref(false)

async function addNextPage() {
  const content = await machine.fetchTypeItems('youtube-videos', {
    page: page.value,
  })

  items.value = content.data
  meta.value = content.meta
  page.value = content.meta.current_page

  if (page.value === content.meta.last_page) {
    disableScroll.value = true
    return
  }
}

export default defineComponent({
  name: 'Home',
  setup() {
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
