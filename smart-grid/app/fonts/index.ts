import localFont from "next/font/local";

export const lato = localFont({
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  src: [
    {
      path: "./Lato-Hairline.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Lato-HairlineItalic.woff",
      weight: "100",
      style: "italic",
    },

    {
      path: "./Lato-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Lato-ThinItalic.woff",
      weight: "200",
      style: "italic",
    },

    {
      path: "./Lato-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Lato-LightItalic.woff",
      weight: "300",
      style: "italic",
    },

    {
      path: "./Lato-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Lato-Italic.woff",
      weight: "400",
      style: "italic",
    },

    {
      path: "./Lato-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Lato-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },

    {
      path: "./Lato-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Lato-SemiboldItalic.woff",
      weight: "600",
      style: "italic",
    },

    {
      path: "./Lato-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Lato-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },

    {
      path: "./Lato-Heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Lato-HeavyItalic.woff",
      weight: "800",
      style: "italic",
    },

    {
      path: "./Lato-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Lato-BlackItalic.woff",
      weight: "900",
      style: "italic",
    },
  ],
});
