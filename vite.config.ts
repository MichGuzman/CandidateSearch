import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['candidate-search-project.onrender.com'], // tu dominio en Render
  },
});
