import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // Go to https://smart-swatch.netlify.com/ to easily generate a new color
    // palette.
    brand: {
      50: "#ffe2e7",
      100: "#ffb3bb",
      200: "#fc8393",
      300: "#f9526d",
      400: "#f6224b",
      500: "#dd0939",
      600: "#ad0320",
      700: "#7c000e",
      800: "#4d0002",
      900: "#200400"
    }
  }
};
