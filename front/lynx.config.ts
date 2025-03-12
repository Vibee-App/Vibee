import { defineConfig } from '@lynx-js/rspeedy';
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';

import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
  ],
  environments: {
    lynx: {},
    web: {
      source: {
        entry: {
          web: '/src/index.jsx',
        },
      },
      output: {
        assetPrefix: '/',
      },
    },
  },
  source: {
    entry: '/src/index.jsx',
  },
});
