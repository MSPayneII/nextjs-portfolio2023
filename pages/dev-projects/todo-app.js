import React from "react";
import Collaborate from "../../components/homepage/collaborate";
import DevProjDetails from "../../components/single-project/dev-project-details";
import MVPFeatures from "../../components/single-project/mvp-features";
import { devProjects } from "../../data/dev-projects";
import { findProject } from "../../helpers/helpers";
import SEO from "../../components/seo/seo";

const TodoApp = (props) => {
  const { title, client, tech, classification, site, github, tldr, features } =
    props.project;

  return (
    <>
      <SEO
        title="Todo App | Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A todo app built with ReactJS that supports drag and drop functionality and list filtering"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/todo-app/todo-app-main.png"
          alt="Todo application landing page"
          className="project-img"
        />
      </div>

      <div className="project-content-container">
        <DevProjDetails
          title={title}
          client={client}
          tech={tech}
          classification={classification}
          site={site}
          github={github}
        />
        <section>
          <h2 className="tertiary-header">{tldr.header}</h2>
          <p>{tldr.body}</p>
        </section>
        <MVPFeatures features={features} />

        <section className="neg-margin-top-9">
          <h2 className="tertiary-header">Static Preview</h2>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src="/assets/todo-app/todo-app-preview1.png"
              alt="Desktop display in dark and light modes"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Mobile display in both light and dark modes
            </figcaption>
          </figure>
          <figure className="project-img-container ">
            <img
              src="/assets/todo-app/todo-app-preview2.png"
              alt="Mobile display in dark and light modes"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Mobile display in dark and light modes
            </figcaption>
          </figure>
        </section>
      </div>

      <Collaborate />
    </>
  );
};

export default TodoApp;

export const getStaticProps = () => {
  let project = findProject(devProjects, "/todo-app");

  return {
    props: {
      project,
    },
  };
};
