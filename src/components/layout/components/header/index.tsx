// i18next-extract-mark-ns-start common
import { Link, Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Container } from "../../../base";
import LangToggle from "../LangToggle";
import Logo from "../logo";
import ThemeToggle from "../themeToggle";

function Header() {
  return (
    <Container
      elementType="header"
      className="absolute top-0 inset-x-0 flex flex-row items-center justify-between h-24"
    >
      <Logo />
      <nav className="flex flex-row items-center gap-4">
        <Link
          to="/about"
          className="text-sm font-medium align-middle text-onLight dark:text-onDark capitalize hover:underline"
        >
          <Trans>about</Trans>
        </Link>
        <Link
          to="/projects"
          className="text-sm font-medium align-middle text-onLight dark:text-onDark capitalize hover:underline"
        >
          <Trans>projects</Trans>
        </Link>
        <Link
          to="/testimonials"
          className="text-sm font-medium align-middle text-onLight dark:text-onDark capitalize hover:underline"
        >
          <Trans>testimonials</Trans>
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium align-middle text-onLight dark:text-onDark capitalize hover:underline"
        >
          <Trans>contact</Trans>
        </Link>
      </nav>
      <div className="flex items-center gap-x-4">
        <LangToggle />
        <ThemeToggle />
      </div>
    </Container>
  );
}

Header.Placeholder = () => <div className="block pointer-events-none flex-shrink-0 flex-grow-0 w-full h-24" />;

export default Header;
