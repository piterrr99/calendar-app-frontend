import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command})=>{

  const config = {
    define: {
      'process.env': process.env
    },
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };

  if (command !== 'serve'){
    config.base = '/calendar-app-frontend/'
  }

})
