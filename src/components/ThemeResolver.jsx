import dynamic from "next/dynamic";

const THEME_MAP = {
  "theme-coffee": {
    HOME: dynamic(() => import("./themes/theme-coffee")),
  },
  "theme-vibe-store": {
    HOME: dynamic(() => import("./themes/theme-vibe-store")),
  },
  nexatech: {
    HOME: dynamic(() => import("./themes/nexatech")),
  },
  "daraz-mart": {
    HOME: dynamic(() => import("./themes/daraz-mart")),
  },
  // "theme-luxury": {
  //   // Easily add new themes here
  //   HOME: dynamic(() => import("./theme-three/pages/HomePage")),
  //   CHECKOUT: dynamic(() => import("./theme-three/pages/CheckoutPage")),
  //   PRODUCT: dynamic(() => import("./theme-three/pages/ProductPage")),
  // },
};

export default function ThemeResolver({ themeId, pageType }) {
  const SelectedThemePages = THEME_MAP[themeId] || THEME_MAP["theme-coffee"];
  const PageComponent =
    SelectedThemePages[pageType] || SelectedThemePages["HOME"];

  return <PageComponent />;
}
