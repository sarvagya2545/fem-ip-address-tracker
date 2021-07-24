import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import reactRefresh from '@vitejs/plugin-react-refresh'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  define: {
    "process.env.MAPBOX_ACCESS_TOKEN": JSON.stringify(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
  }
})
