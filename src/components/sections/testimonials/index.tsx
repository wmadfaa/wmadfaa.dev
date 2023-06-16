// i18next-extract-mark-ns-start testimonials
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Container } from "../../base";
import TestimonialCard from "./TestimonialCard";

interface IProps {
  testimonials: Queries.PrismicTestimonialConnection["edges"];
}
function Testimonials({ testimonials }: IProps) {
  return (
    <Container elementType="section" className="w-full min-h-screen flex flex-col py-44 gap-y-20">
      <div className="max-w-md space-y-9">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold capitalize text-onLight dark:text-onDark">
            <Trans>Testimonials</Trans>
          </h1>
          <p className="text-sm text-onLight dark:text-onDark text-start">
            <Trans>Inspiring Words from Satisfied Clients That Showcase My Frontend Development Expertise.</Trans>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-none gap-9 items-start">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.node.uid} testimonial={testimonial.node} />
        ))}
      </div>
    </Container>
  );
}

export default Testimonials;
