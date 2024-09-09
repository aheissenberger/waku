export default {
  optimizeDeps: {
    exclude: ["@mantine/core", "@mantine/hooks", "@mantine/dates", "@mantine/charts", 
      "@mantine/code-highlight", "@mantine/notifications", "@mantine/spotlight",
      "@mantine/carousel",
      "@mantine/dropzone", "@mantine/nprogress", "@mantine/modals", "@mantine/tiptap"],
    include: [
      "dayjs", "dayjs/plugin/*",
      "@mantine/code-highlight > highlight.js",
      "@mantine/notifications > prop-types",
      "@mantine/charts", "@mantine/charts/**/*.*",
      "@mantine/carousel", "@mantine/carousel/**/*.*",
      // "@mantine/charts > lodash/get", "@mantine/charts > lodash/isNaN", "@mantine/charts > lodash/isString", "@mantine/charts > lodash/isNumber", "@mantine/charts > lodash/isObject",
      // "@mantine/charts > lodash/isFunction", "@mantine/charts > lodash/upperFirst", "@mantine/charts > lodash/uniqBy", "@mantine/charts > lodash/isNil", "@mantine/charts > lodash/sortBy",
      // "@mantine/charts > lodash/throttle", "@mantine/charts > lodash/flatMap", "@mantine/charts > lodash/isEqual", "@mantine/charts > lodash/max", "@mantine/charts > lodash/min",
      // "@mantine/charts > lodash/last", "@mantine/charts > lodash/maxBy", "@mantine/charts > lodash/minBy", "@mantine/charts > lodash/isBoolean", "@mantine/charts > lodash/isPlainObject",
      // "@mantine/charts > lodash/first", "@mantine/charts > lodash/range", "@mantine/charts > lodash/every", "@mantine/charts > lodash/mapValues", "@mantine/charts > lodash/memoize",
      // "@mantine/charts > lodash/find", "@mantine/charts > lodash/some",      "@mantine/charts > lodash/omit", "@mantine/charts > lodash/sumBy", "@mantine/charts > lodash/memoize",
      // "@mantine/charts > react-is", "@mantine/charts > eventemitter3", 
    ]
  },
  // ssr: {
  //   noExternal: ["@mantine/core", "@mantine/hooks", "@mantine/dates", "@mantine/charts",
  //     "@mantine/code-highlight", "@mantine/notifications", "@mantine/spotlight",
  //     "@mantine/carousel",
  //     "@mantine/dropzone", "@mantine/nprogress", "@mantine/modals", "@mantine/tiptap"],
  // }
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@mantine/core")) {
            return "@mantine/core";
          }
        },
      },
    },
  },
};