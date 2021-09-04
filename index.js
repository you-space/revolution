const { join } = require('path')
const fs = require("fs");
const { renderToString } = require("@vue/server-renderer");

const serverManifest = require("./dist/server-app/server-manifest.json");
const clientManifest = require("./dist/client-app/client-manifest.json");

const assets = new Map()

Object.values(clientManifest)
    .map(file => file.replace('/assets/', ''))
    .forEach(
    (file) => {
        assets.set(file, join(__dirname, 'dist', 'client-app', file))
    }
);
class Revolution {
    assets = assets
    async render({ fullPath }){
        const appPath = join(
            __dirname,
            'dist',
            "server-app",
            serverManifest["app.js"]
        );

        const createApp = require(appPath).default;

        const { app, router } = await createApp();

        router.push(fullPath);

        await router.isReady();

        const appContent = await renderToString(app);
        
        const appHtml = fs.readFileSync(
            join(__dirname, 'dist', "client-app", 'index.html'),
            "utf-8"
        );

        return appHtml.replace(
            '<div id="app"></div>',
            `<div id="app">${appContent}</div>`
        )
    }
}

module.exports = Revolution