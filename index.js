const { join } = require('path')
const fs = require('fs')

const scripts = new Map()

const nodeModulesPath = join(__dirname, 'node_modules')
const clientManifestPath = join(__dirname, 'dist', 'client-app', 'client-manifest.json')
const serverManifestPath = join(__dirname, 'dist', 'server-app', 'server-manifest.json')

scripts.set('install', ['npm', 'install'])
scripts.set('build', ['npm', 'run', 'build'])
module.exports = class Revolution {
  assets = new Map()
  scripts = scripts
  constructor() {
    if (!fs.existsSync(clientManifestPath)) {
      return
    }

    const clientManifest = require(clientManifestPath)

    Object.values(clientManifest)
      .map((file) => file.replace('/assets/', ''))
      .forEach((file) => {
        this.assets.set(file, join(__dirname, 'dist', 'client-app', file))
      })
  }
  async render(args) {
    if (!fs.existsSync(nodeModulesPath)) {
      return 'Please install the dependencies and build the theme before use'
    }

    if (!fs.existsSync(serverManifestPath)) {
      return 'Please build the theme before use'
    }

    const serverManifest = require(serverManifestPath)

    const appPath = join(__dirname, 'dist', 'server-app', serverManifest['app.js'])

    if (!fs.existsSync(appPath)) {
      return 'Error app not found'
    }

    return require('./render')({
      ...args,
      item: this.item,
      type: this.type,
    })
  }
}
