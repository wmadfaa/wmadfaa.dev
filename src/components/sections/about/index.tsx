import * as React from "react";

import { Button, Container } from "../../base";
import Header from "../../layout/components/header";

function About() {
  return (
    <Container elementType="section" className="w-full h-screen flex flex-col">
      <Header.Placeholder />
      <div className="grow flex flex-col justify-center">
        <div className="max-w-screen-md space-y-9 -mt-24">
          <div className="space-y-5">
            <h1 className="text-5xl font-bold capitalize text-onLight dark:text-onDark">Wasim Al-Madfaa</h1>
            <p className="text-sm text-onLight dark:text-onDark text-start">
              Frontend Developer with six years of experience in web and mobile app development. I can deliver
              high-quality results, specializing in React and following a TDD approach.
            </p>
          </div>
          <Button label="Contact Me" />
        </div>
      </div>
    </Container>
  );
}

export default About;
