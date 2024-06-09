import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    primary: ["#211455"],
    secondary: ["#C00000"],
    tertiary: ["white"],
  },

  headings: {
    fontFamily: "Arial, sans-serif",
    sizes: {
      h1: { fontSize: rem(50) },
      h2: { fontSize: rem(20) },
      h3: { fontSize: rem(10) },
    },
  },
  spacing: {
    xs: rem(80),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
  },
});
