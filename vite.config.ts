import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@src": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src', 'components'),
      "@pages": path.resolve(__dirname, 'src', 'pages'),
      "@styles": path.resolve(__dirname, 'src', 'styles')
    }
  },
  define: {
    __API_ENDPOINT__: JSON.stringify(process.env.API_ENDPOINT),
    __MY_ID_INSTANCE__: JSON.stringify(process.env.MY_ID_INSTANCE),
    __MY_API_TOKEN_INSTANCE__: JSON.stringify(process.env.MY_API_TOKEN_INSTANCE)
  },
  plugins: [react()],
})
