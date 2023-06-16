import classNames from "classnames/dedupe";
import { Link } from "gatsby";
import * as React from "react";

import { BaseButton } from "../../base";

interface IProps {
  project: Queries.PrismicProject;
}

function ProjectCard({ project }: IProps) {
  return (
    <BaseButton
      elementType={Link}
      to={project.data.url!.url!}
      target="_blank"
      className="w-full lg:w-auto lg:max-w-screen-sm bg-light dark:bg-dark border border-onLight dark:border-onDark rounded-sm py-4 px-3 flex flex-col justify-between gap-y-9"
    >
      <div className="space-y-4 text-onLight dark:text-onDark">
        <h3 className="text-xl font-bold capitalize">{project.data.name}</h3>
        <p className="text-sm font-normal">{project.data.short_description}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-1">
        {project.data.techstack?.map((tech, i, techstack) => (
          <span
            key={tech!.tech}
            className={classNames("inline-block text-onLight dark:text-onDark text-xs font-semibold capitalize", {
              "after:content-[','] last:after:content-none": techstack.length > 1,
            })}
          >
            {tech!.tech}
          </span>
        ))}
      </div>
    </BaseButton>
  );
}

export default ProjectCard;
