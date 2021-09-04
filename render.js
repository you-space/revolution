const serialize = require('serialize-javascript')

const { join } = require('path')
const fs = require('fs')
const { renderToString } = require('@vue/server-renderer')

const serverManifest = require('./dist/server-app/server-manifest.json')

module.exports = async function render({ query, path, fullPath, item, type, params }) {
  const appPath = join(__dirname, 'dist', 'server-app', serverManifest['app.js'])

  const createApp = require(appPath).default

  const { app, router, store } = await createApp()

  let route = fullPath

  if (path === '/') {
    const { data, meta } = await item.fetchItems(query, true)

    store.commit('item/setData', data)
    store.commit('item/setMeta', meta)
  } else if (path === '/youtube') {
    const content = await type.fetchItems('youtube-videos')

    store.commit('youtube/setData', content.data)
    store.commit('youtube/setMeta', content.meta)
  } else if (path === '/local') {
    const content = await type.fetchItems('local-videos')

    store.commit('local/setData', content.data)
    store.commit('local/setMeta', content.meta)
  } else if (/\/youtube\/*/.test(path)) {
    const item = await type.find('youtube-videos', {
      search: query.search,
      id: params[1],
    })

    if (item) {
      store.commit('youtube/setCurrent', item)
      const content = await type.fetchItems('youtube-videos', {
        limit: 8,
      })

      store.commit('youtube/setData', content.data)
      store.commit('youtube/setMeta', content.meta)
    }

    if (!item) {
      route = '/404'
    }
  } else if (/\/local\/*/.test(path)) {
    const item = await type.find('local-videos', {
      search: query.search,
      id: params[1],
    })

    if (item) {
      store.commit('local/setCurrent', item)
      const content = await type.fetchItems('local-videos', {
        limit: 8,
      })

      store.commit('local/setData', content.data)
      store.commit('local/setMeta', content.meta)
    }

    if (!item) {
      route = '/404'
    }
  } else {
    route = '/404'
  }

  router.push(route)

  await router.isReady()

  const appContent = await renderToString(app)

  const appHtml = fs.readFileSync(join(__dirname, 'dist', 'client-app', 'index.html'), 'utf-8')

  return appHtml.replace(
    '<div id="app"></div>',
    `
    <script>
      window.INITIAL_STATE = ${serialize(store.state)}
    </script>
    <div id="app">${appContent}</div>
  `
  )
}
