import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',           // Expose the server on all network interfaces
    port: process.env.PORT || 4173,  // Use Railway's dynamic port or fallback to
  }
});