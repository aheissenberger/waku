export default {
  optimizeDeps: {
    exclude: ["@mantine/core", "@mantine/hooks","@mantine/dates"]
  },
  ssr: {
    noExternal: ["@mantine/core", "@mantine/hooks","@mantine/dates"],
  }
};