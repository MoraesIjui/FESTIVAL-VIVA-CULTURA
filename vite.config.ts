import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/FESTIVAL-VIVA-CULTURA/',
  plugins: [react(), tailwindcss()],
});
