<template>
  <r-page padding>
    <r-infinite-scroll :disable="disableScroll" :offset="250">
      <div class="grid grid-cols-5 gap-5">
        <template v-for="item in items" :key="item.id">
          <r-video-card
            :to="`/youtube/${item.id}`"
            :title="item.title"
            :description="item.description"
            :img-src="item.thumbnailSrc"
            :type-name="item.typeName"
            :date="item.publishedAt"
            :type="{ name: item.typeName, to: '/youtube/' }"
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
        store.commit('SET_DATA', value)
      },
    })

    const meta = computed<Partial<ServerPaginationMeta>>({
      get() {
        return store.state.item.meta
      },
      set(value) {
        store.commit('SET_META', value)
      },
    })

    async function addNextPage() {
      const { data, meta } = await machine.fetchTypeItems('youtube-videos', {
        page: page.value,
      })

      items.value = data

      if (page.value === meta.last_page) {
        disableScroll.value = true
        return
      }

      page.value = meta.current_page
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
