import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
