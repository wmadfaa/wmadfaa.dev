import { Link } from "gatsby";
import * as React from "react";

import { Container } from "../../../base";
import LangToggle from "../LangToggle";
import Logo from "../logo";
import ThemeToggle from "../themeToggle";

interface IProps {
  githubUrl: string;
  cvUrl: string;
}

function Footer({ githubUrl, cvUrl }: IProps) {
  return (
    <div className="absolute bottom-0 inset-x-0 border-t border-onLight dark:border-onDark">
      <Container elementType="footer" className="w-full h-24 flex flex-row items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Link to={cvUrl} target="_blank" className="text-sm font-medium hover:underline align-middle">
            Resume / CV
          </Link>
          <Link to={githubUrl} target="_blank" className="text-sm font-medium hover:underline align-middle">
            Github
          </Link>
        </div>
        <Logo />
        <div className="flex items-center gap-x-4">
          <LangToggle />
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
}

Footer.Placeholder = () => <div className="block pointer-events-none flex-shrink-0 flex-grow-0 w-full h-24" />;

export default Footer;
