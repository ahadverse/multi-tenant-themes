import dynamic from "next/dynamic";

const ThemeOne = dynamic(() => import("./themes/theme-one/Hero"));
const ThemeTwo = dynamic(() => import("./themes/theme-two/Hero"));

const THEMES = {
  "theme-01": ThemeOne,
  "theme-02": ThemeTwo,
};

export default function ThemeResolver({ themeId, data }) {
  const SelectedTheme = THEMES[themeId] || ThemeOne;
  return <SelectedTheme data={data} />;
}
