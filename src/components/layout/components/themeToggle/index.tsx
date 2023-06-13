import * as React from "react";

import dark_mode_icon from "../../../../assets/icons/dark_mode.svg";
import light_mode_icon from "../../../../assets/icons/light_mode.svg";
import { THEME_MODE_STORAGE_KEY } from "../../../../helpers/constants";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { IconButton } from "../../../base";

function ThemeToggle() {
  const [value, setValue] = useLocalStorage(THEME_MODE_STORAGE_KEY);

  const isDark = value === "dark";

  const handleToggleTheme = () => {
    document.documentElement.classList[isDark ? "remove" : "add"]("dark");
    setValue(isDark ? "light" : "dark");
  };

  return <IconButton icon={isDark ? light_mode_icon : dark_mode_icon} onClick={handleToggleTheme} />;
}

export default ThemeToggle;
