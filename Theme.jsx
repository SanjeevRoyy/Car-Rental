import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    primary: [
      "red",
      "green",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#2196F3",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
    ],
    secondary: [
      "#FFF3E0",
      "#FFE0B2",
      "#FFCC80",
      "#FFB74D",
      "#FFA726",
      "#FF9800",
      "#FB8C00",
      "#F57C00",
      "#EF6C00",
      "#E65100",
    ],
    tertiary: [
      "#F3E5F5",
      "#E1BEE7",
      "#CE93D8",
      "#BA68C8",
      "#AB47BC",
      "#9C27B0",
      "#8E24AA",
      "#7B1FA2",
      "#6A1B9A",
      "#4A148C",
    ],
  },

  headings: {
    fontFamily: "Arial, sans-serif",
    sizes: {
      h1: { fontSize: rem(40) },
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
