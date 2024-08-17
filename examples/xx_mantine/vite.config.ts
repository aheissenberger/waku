export default {
  optimizeDeps: {
    exclude: ["@mantine/core", "@mantine/hooks","@mantine/dates","dayjs"]
  },
  ssr: {
    noExternal: ["@mantine/core", "@mantine/hooks","@mantine/dates","dayjs"],
  }
};