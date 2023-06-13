import * as React from "react";

import Footer from "./components/footer";
import Header from "./components/header";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <div className="relative w-full h-full">
      <Header />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
