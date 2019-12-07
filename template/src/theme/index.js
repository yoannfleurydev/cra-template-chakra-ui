import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // Go to https://smart-swatch.netlify.com/ to easily generate a new color
    // palette.
    brand: {
      100: "#ffe2e7",
      200: "#ffb3bb",
      300: "#fc8393",
      400: "#f9526d",
      500: "#f6224b",
      600: "#dd0939",
      700: "#ad0320",
      800: "#7c000e",
      900: "#4d0002",
      1000: "#200400"
    }
  }
};
