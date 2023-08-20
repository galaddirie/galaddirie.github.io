import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'


const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const componentsDir = resolve(root, "components");
const typesDir = resolve(root, "types");
const contextDir = resolve(root, "contexts");
const hooksDir = resolve(root, "hooks");
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
      "@components": componentsDir,
      "@types": typesDir,
      "@contexts": contextDir,
      "@hooks": hooksDir,
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000,
  },
})
