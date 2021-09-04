<template>
  <r-page padding>
    <r-infinite-scroll :disable="disableScroll" :offset="250">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <template v-for="item in items" :key="item.id">
          <r-video-card
            v-if="item.typeName === 'youtube-videos'"
            :to="`/youtube/${item.id}`"
            :title="item.title"
            :description="item.description"
            :img-src="item.thumbnailSrc"
            :date="item.publishedAt"
            :type="{ name: item.typeName, to: '/youtube/' }"
          />

          <r-video-card
            v-if="item.typeName === 'local-videos'"
            :to="`/local/${item.id}`"
            :title="item.title"
            :description="item.description"
            :img-src="item.thumbnail"
            :date="item.publishedAt"
            :type="{ name: item.typeName, to: '/local/', color: 'bg-blue-500' }"
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
import { defineComponent, ref, computed, onMounted } from 'vue'

import { useStore } from '@/store'
import { machine } from '@/plugins/you-space'
import { ServerPaginationMeta } from '@/plugins/you-space/machine'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()

    const page = ref(1)

    const disableScroll = ref(false)

    const items = computed<any[]>({
      get() {
        return store.state.item.data
      },
      set(value) {
        store.commit('item/setData', value)
      },
    })

    const meta = computed<Partial<ServerPaginationMeta>>({
      get() {
        return store.state.item.meta
      },
      set(value) {
        store.commit('item/setMeta', value)
      },
    })

    async function addNextPage() {
      const content = await machine.fetchItems({
        page: page.value,
        serialize: true,
      })

      items.value = content.data
      meta.value = content.meta
      page.value = content.meta.current_page

      if (page.value === content.meta.last_page) {
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
