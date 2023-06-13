import { Link } from "gatsby";
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
        {sections.map(({ label, url }) => (
          <Link
            to={url}
            className="text-sm font-medium align-middle text-onLight dark:text-onDark capitalize hover:underline"
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-x-4">
        <LangToggle />
        <ThemeToggle />
      </div>
    </Container>
  );
}

const sections = [
  { label: "about", url: "#about" },
  { label: "projects", url: "#projects" },
  { label: "testimonials", url: "#testimonials" },
  { label: "contact", url: "#contact" },
];

Header.Placeholder = () => <div className="block pointer-events-none flex-shrink-0 flex-grow-0 w-full h-24" />;

export default Header;
