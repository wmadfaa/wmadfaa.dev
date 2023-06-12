import type { PageProps } from "gatsby";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";
import * as React from "react";

const PrismicPreviewPage: React.FC<PageProps> = () => {
  return <main></main>;
};

export default withPrismicPreviewResolver(PrismicPreviewPage);
