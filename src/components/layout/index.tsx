import * as React from "react";

import Footer from "./components/footer";
import Header from "./components/header";

interface IProps {
  githubUrl: string;
  cvUrl: string;
  children: React.ReactNode;
}

function Layout({ children, cvUrl, githubUrl }: IProps) {
  return (
    <div className="relative w-full h-full">
      <Header />
      <main className="w-full h-full">{children}</main>
      <Footer cvUrl={cvUrl} githubUrl={githubUrl} />
    </div>
  );
}

export default Layout;
