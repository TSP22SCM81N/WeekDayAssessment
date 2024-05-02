import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/WeekDayAssessment/",
  plugins: [react()],
  resolve:{
  alias:{
    axios:'axios/dist/axios.min.js'
  }
  }
})
