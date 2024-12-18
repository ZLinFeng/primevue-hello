import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/assets/icons/")],
            symbolId: "icon-[name]",
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        }
    },
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:12312",
                changeOrigin: true,
                secure: false
            }
        }
    }
})
