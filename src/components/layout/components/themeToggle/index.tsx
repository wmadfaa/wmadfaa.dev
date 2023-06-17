import * as React from "react";
import { useEffect, useState } from "react";
import { useEvent } from "react-use";

import dark_mode_icon from "../../../../assets/icons/dark_mode.svg";
import light_mode_icon from "../../../../assets/icons/light_mode.svg";
import { THEME_MODE_STORAGE_KEY } from "../../../../helpers/constants";
import { IconButton } from "../../../base";

function ThemeToggle() {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(localStorage.getItem(THEME_MODE_STORAGE_KEY) as string);
  }, []);

  const isDark = value === "dark";

  const handleToggleTheme = () => {
    document.documentElement.classList[isDark ? "remove" : "add"]("dark");
    const nextValue = isDark ? "light" : "dark";
    localStorage.setItem(THEME_MODE_STORAGE_KEY, nextValue);
    setValue(nextValue);
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event("storage"));
      clearTimeout(timeout);
    });
  };

  useEvent("storage", () => {
    const currTheme = localStorage.getItem(THEME_MODE_STORAGE_KEY);
    if (currTheme !== value) setValue(currTheme);
  });

  return <IconButton icon={isDark ? light_mode_icon : dark_mode_icon} onClick={handleToggleTheme} />;
}

export default ThemeToggle;
