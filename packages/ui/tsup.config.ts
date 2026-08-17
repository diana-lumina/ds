import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/lib/*.ts', 'src/icons/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  // Top-level loader is required: tsup's postcss plugin only reads this
  // option (not esbuildOptions). Without local-css, .module.css imports
  // lose their class-name default export.
  loader: {
    '.css': 'local-css',
  },
  injectStyle: false,
})
