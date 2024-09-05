// vite.config.ts
import { defineConfig } from "file:///D:/DEV/cert-guard-vue/node_modules/.pnpm/vite@5.4.2_@types+node@20.16.2/node_modules/vite/dist/node/index.js";
import { getDirname } from "file:///D:/DEV/cert-guard-vue/node_modules/.pnpm/@adonisjs+core@6.12.1_@adonisjs+assembler@7.7.0_typescript@5.5.4__@vinejs+vine@2.1.0_edge.js@6.0.2/node_modules/@adonisjs/core/build/src/helpers/main.js";
import inertia from "file:///D:/DEV/cert-guard-vue/node_modules/.pnpm/@adonisjs+inertia@1.1.0_@adonisjs+core@6.12.1_@adonisjs+assembler@7.7.0_typescript@5.5.4__@vi_6kc5u2ts65f4qsvlzmhh6f5e5y/node_modules/@adonisjs/inertia/build/src/plugins/vite.js";
import vue from "file:///D:/DEV/cert-guard-vue/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.2_@types+node@20.16.2__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import adonisjs from "file:///D:/DEV/cert-guard-vue/node_modules/.pnpm/@adonisjs+vite@3.0.0_@adonisjs+core@6.12.1_@adonisjs+assembler@7.7.0_typescript@5.5.4__@vinej_wbleacuiyjjiqsjuu4y26ohfo4/node_modules/@adonisjs/vite/build/src/client/main.js";
import vuetify from "file:///D:/DEV/cert-guard-vue/node_modules/.pnpm/vite-plugin-vuetify@2.0.4_vite@5.4.2_@types+node@20.16.2__vue@3.4.38_typescript@5.5.4__vuetify@3.7.1/node_modules/vite-plugin-vuetify/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/DEV/cert-guard-vue/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    vue(),
    vuetify(),
    adonisjs({ entrypoints: ["inertia/app/app.ts"], reload: ["resources/views/**/*.edge"] })
  ],
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      "~/": `${getDirname(__vite_injected_original_import_meta_url)}/inertia/`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxERVZcXFxcY2VydC1ndWFyZC12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERFVlxcXFxjZXJ0LWd1YXJkLXZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovREVWL2NlcnQtZ3VhcmQtdnVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGdldERpcm5hbWUgfSBmcm9tICdAYWRvbmlzanMvY29yZS9oZWxwZXJzJ1xuaW1wb3J0IGluZXJ0aWEgZnJvbSAnQGFkb25pc2pzL2luZXJ0aWEvY2xpZW50J1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgYWRvbmlzanMgZnJvbSAnQGFkb25pc2pzL3ZpdGUvY2xpZW50J1xuaW1wb3J0IHZ1ZXRpZnkgZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGluZXJ0aWEoeyBzc3I6IHsgZW5hYmxlZDogZmFsc2UgfSB9KSxcbiAgICB2dWUoKSxcbiAgICB2dWV0aWZ5KCksXG4gICAgYWRvbmlzanMoeyBlbnRyeXBvaW50czogWydpbmVydGlhL2FwcC9hcHAudHMnXSwgcmVsb2FkOiBbJ3Jlc291cmNlcy92aWV3cy8qKi8qLmVkZ2UnXSB9KSxcbiAgXSxcblxuICAvKipcbiAgICogRGVmaW5lIGFsaWFzZXMgZm9yIGltcG9ydGluZyBtb2R1bGVzIGZyb21cbiAgICogeW91ciBmcm9udGVuZCBjb2RlXG4gICAqL1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke2dldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKX0vaW5lcnRpYS9gLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UCxTQUFTLG9CQUFvQjtBQUNwUixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sY0FBYztBQUNyQixPQUFPLGFBQWE7QUFMbUksSUFBTSwyQ0FBMkM7QUFPeE0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLE1BQU0sRUFBRSxDQUFDO0FBQUEsSUFDbkMsSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLElBQ1IsU0FBUyxFQUFFLGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUFBLEVBQ3pGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxXQUFXLHdDQUFlLENBQUM7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
