const { join } = require('path')
const fs = require('fs')
const { renderToString } = require('@vue/server-renderer')

const serverManifest = require('./dist/server-app/server-manifest.json')

module.exports = async function render({ fullPath }) {
  const appPath = join(__dirname, 'dist', 'server-app', serverManifest['app.js'])

  const createApp = require(appPath).default

  const { app, router } = await createApp()

  router.push(fullPath)

  await router.isReady()

  const appContent = await renderToString(app)

  const appHtml = fs.readFileSync(join(__dirname, 'dist', 'client-app', 'index.html'), 'utf-8')

  return appHtml.replace('<div id="app"></div>', `<div id="app">${appContent}</div>`)
}
