import { Link } from "gatsby";
import * as React from "react";

import { BaseButton } from "../../base";
import Rating from "../../rating";

interface IProps {
  testimonial: Queries.PrismicTestimonial;
}

function TestimonialCard({ testimonial }: IProps) {
  return (
    <BaseButton
      elementType={Link}
      to={testimonial.data.url!.url!}
      target="_blank"
      className="w-full lg:w-auto lg:max-w-screen-sm bg-light dark:bg-dark border border-onLight dark:border-onDark rounded-sm py-4 px-3 inline-flex flex-col gap-y-5"
    >
      <div className="space-y-3">
        <h3 className="text-xl font-bold capitalize">{testimonial.data.company}</h3>
        <Rating size="xs" value={testimonial.data.rate || 0} />
      </div>
      <p className="text-sm font-normal flex-grow">{testimonial.data.content}</p>
      <div className="space-y-1.5">
        <h6 className="text-base font-bold capitalize">{testimonial.data.client_name}</h6>
        <span className="text-xs font-semibold capitalize">{testimonial.data.client_job_title}</span>
      </div>
    </BaseButton>
  );
}

export default TestimonialCard;
