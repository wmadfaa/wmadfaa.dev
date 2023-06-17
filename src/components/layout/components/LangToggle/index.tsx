import classNames from "classnames/dedupe";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { BaseButton } from "../../../base";

function LangToggle() {
  const { originalPath, language, languages } = useI18next();

  return (
    <>
      {languages.map((lng) => (
        <BaseButton
          key={lng}
          elementType={Link}
          to={originalPath}
          language={lng}
          className={classNames(
            "w-8 h-8 bg-light dark:bg-dark border rounded-sm border-onLight dark:border-onDark grid place-items-center text-sm font-semibold leading-tight align-middle underline uppercase",
            { hidden: lng === language }
          )}
        >
          {new Intl.Locale(lng).language}
        </BaseButton>
      ))}
    </>
  );
}

export default LangToggle;
