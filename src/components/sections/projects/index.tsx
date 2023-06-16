// i18next-extract-mark-ns-start projects
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { Container } from "../../base";
import ProjectCard from "./ProjectCard";

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
        {projects.map((project) => (
          <ProjectCard key={project.node.uid} project={project.node} />
        ))}
      </div>
    </Container>
  );
}

export default Projects;
