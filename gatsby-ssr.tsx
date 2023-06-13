import type { GatsbySSR } from "gatsby";
import * as React from "react";

import { THEME_MODE_STORAGE_KEY } from "./src/helpers/constants";

// language=JS
const TailwindThemePrefersColorSchemeScript = `
  if (localStorage["${THEME_MODE_STORAGE_KEY}"] === 'dark' || (!('${THEME_MODE_STORAGE_KEY}' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.setItem("${THEME_MODE_STORAGE_KEY}","dark")
  } else {
    document.documentElement.classList.remove('dark')
  }
`;

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      type="text/javascript"
      key="tailwind-theme-prefers-color-scheme"
      id="tailwind-theme-prefers-color-scheme"
      dangerouslySetInnerHTML={{ __html: TailwindThemePrefersColorSchemeScript }}
    />,
  ]);
};
