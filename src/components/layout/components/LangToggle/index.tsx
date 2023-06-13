import * as React from "react";

import { BaseButton } from "../../../base";

function LangToggle() {
  return (
    <BaseButton className="w-8 h-8 bg-light dark:bg-dark border rounded-sm border-onLight dark:border-onDark grid place-items-center text-onLight dark:text-onDark text-sm font-semibold leading-tight align-middle underline uppercase">
      en
    </BaseButton>
  );
}

export default LangToggle;
