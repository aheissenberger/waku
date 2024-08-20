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
    ]
  },
  // ssr: {
  //   noExternal: ["@mantine/core", "@mantine/hooks", "@mantine/dates", "@mantine/charts",
  //     "@mantine/code-highlight", "@mantine/notifications", "@mantine/spotlight",
  //     "@mantine/carousel",
  //     "@mantine/dropzone", "@mantine/nprogress", "@mantine/modals", "@mantine/tiptap"],
  // }
};