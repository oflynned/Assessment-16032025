import { defineConfig } from 'vitest/config';

async function setupConfig() {
  const tsconfigPaths = await import('vite-tsconfig-paths');

  return defineConfig({
    test: {
      globals: true,
      environment: 'node',
      include: [
        'test/vitest/**/*.{spec,test}.{js,ts}',
        'app/**/*.{spec,test}.{js,ts}',
      ],
    },
    plugins: [tsconfigPaths.default()], // Adjust based on the actual default export
  });
}

export default setupConfig();

// export default defineConfig({
//   plugins: [tsconfigPaths()],
//   test: {
//     globals: true,
//     include: [
//       'test/vitest/**/*.{spec,test}.{js,ts}',
//       'app/**/*.{spec,test}.{js,ts}',
//     ],
//     coverage: {
//       provider: 'istanbul',
//       reporter: ['text', 'html'],
//     },
//   },
//   resolve: {
//     alias: {
//       '@': './app',
//     },
//   },
// });
