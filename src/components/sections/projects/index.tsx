// i18next-extract-mark-ns-start projects
import classNames from "classnames/dedupe";
import { Link } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { BaseButton, Container } from "../../base";

interface IProps {
  projects: Queries.PrismicProjectConnection["edges"];
}
function Projects({ projects }: IProps) {
  return (
    <Container elementType="section" className="w-full min-h-screen flex flex-col py-44 gap-y-20">
      <div className="max-w-md space-y-9">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold capitalize text-onLight dark:text-onDark">
            <Trans>Projects</Trans>
          </h1>
          <p className="text-sm text-onLight dark:text-onDark text-start">
            <Trans>
              A Diverse Collection of Outstanding Frontend Development Projects That Demonstrate My Skills and
              Expertise.
            </Trans>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-rows-3 lg:grid-cols-none gap-9">
        {projects.map(({ node: project }) => (
          <BaseButton
            elementType={Link}
            key={project.uid}
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
        ))}
      </div>
    </Container>
  );
}

export default Projects;
