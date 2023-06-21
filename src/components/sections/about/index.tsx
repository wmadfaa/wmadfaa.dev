// i18next-extract-mark-ns-start about
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Button, Container } from "../../base";
import Header from "../../layout/components/header";

interface IProps {
  fullName: string;
  overview: string;
}

function About({ fullName, overview }: IProps) {
  const { t } = useTranslation();

  return (
    <Container id="about" elementType="section" className="w-full h-screen flex flex-col">
      <Header.Placeholder />
      <div className="grow flex flex-col justify-center">
        <div className="max-w-screen-md space-y-9 -mt-24">
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-2xl md:text-5xl font-bold capitalize">{fullName}</h1>
            <p className="text-sm text-start">{overview}</p>
          </div>
          <Button elementType={Link} to="#contact" label={t("contact me")} />
        </div>
      </div>
    </Container>
  );
}

export default About;
