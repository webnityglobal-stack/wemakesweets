import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],

  server: {
    host: true,
    allowedHosts: [
      "nappy-scraggly-startup.ngrok-free.dev",
      "unlikened-leonarda-noninflectional.ngrok-free.dev",
      "coalition-nicole-sound-recordings.trycloudflare.com"
    ],
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});