import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    sourcemap: false, // Disable source maps for production (optional)
    minify: 'esbuild', // Minify the output
  },
  preview: {
    host: '0.0.0.0',           // Expose the server on all network interfaces
    port: process.env.PORT,  // Use Railway's dynamic port or fallback to
  }
});