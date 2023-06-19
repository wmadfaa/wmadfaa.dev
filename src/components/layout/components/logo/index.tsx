import { Link } from "gatsby";
import * as React from "react";

function Logo() {
  return (
    <Link to="/" className="text-xl md:text-2xl font-semibold">
      wmadfaa<span className="hidden md:inline">.dev</span>
    </Link>
  );
}

export default Logo;
