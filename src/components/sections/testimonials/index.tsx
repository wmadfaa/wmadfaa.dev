// i18next-extract-mark-ns-start testimonials
import { Trans } from "gatsby-plugin-react-i18next";
import { sortBy } from "lodash";
import * as React from "react";

import { Container } from "../../base";
import TestimonialCard from "./TestimonialCard";

interface IProps {
  testimonials: Queries.PrismicTestimonialConnection["edges"];
}
function Testimonials({ testimonials }: IProps) {
  return (
    <Container
      id="testimonials"
      elementType="section"
      className="w-full min-h-screen flex flex-col py-44 gap-y-12 md:gap-y-20"
    >
      <div className="max-w-md space-y-9">
        <div className="space-y-4 md:space-y-5">
          <h1 className="text-2xl md:text-5xl font-bold capitalize">
            <Trans>Testimonials</Trans>
          </h1>
          <p className="text-sm text-start">
            <Trans>Inspiring Words from Satisfied Clients and Employers that Showcase My Machine Learning and Software Development Expertise.</Trans>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-dense gap-9">
        {sortBy(testimonials, (d) => d.node.data.content?.length).map((testimonial) => (
          <TestimonialCard key={testimonial.node.uid} testimonial={testimonial.node} />
        ))}
      </div>
    </Container>
  );
}

export default Testimonials;
