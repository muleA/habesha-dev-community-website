import { createTheme, MantineColorsTuple } from "@mantine/core";

const ethiopianGreen: MantineColorsTuple = [
  "#ebf7ef",
  "#d7efe0",
  "#b0e0c3",
  "#86d1a3",
  "#63c489",
  "#4cbb77",
  "#3eb76d", // Primary shade
  "#31a05c",
  "#278a4e",
  "#19733f",
];

const ethiopianYellow: MantineColorsTuple = [
  "#fff9e6",
  "#fff3cc",
  "#ffe799",
  "#ffdb66",
  "#ffd03d",
  "#ffc826",
  "#ffc41a", // Primary shade
  "#e5aa00",
  "#cc9700",
  "#b28300",
];

const ethiopianRed: MantineColorsTuple = [
  "#ffe8e8",
  "#ffd1d1",
  "#ffa3a3",
  "#ff7575",
  "#ff5252",
  "#ff3e3e",
  "#ff3535", // Primary shade
  "#e62121",
  "#cc1818",
  "#b30e0e",
];

export const theme = createTheme({
  primaryColor: "ethiopianGreen",
  colors: {
    ethiopianGreen,
    ethiopianYellow,
    ethiopianRed,
  },
  fontFamily: 'Nyala, "Segoe UI", system-ui, -apple-system, sans-serif',
  headings: {
    fontFamily: 'Nyala, "Segoe UI", system-ui, -apple-system, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        color: "ethiopianGreen",
      },
      styles: {
        root: {
          fontWeight: 600,
        },
      },
    },
    Card: {
      defaultProps: {
        radius: "md",
      },
    },
  },
  other: {
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "24px",
    },
    boxShadow: {
      sm: "0 1px 3px rgba(0,0,0,0.1)",
      md: "0 4px 6px rgba(0,0,0,0.1)",
      lg: "0 10px 15px rgba(0,0,0,0.1)",
    },
  },
});
