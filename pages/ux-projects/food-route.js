import React from "react";
import SEO from "../../components/seo/seo";
import UxProjDetails from "../../components/single-project/ux-project-details";
import { uxProjects } from "../../data/ux-projects";
import { findProject } from "../../helpers/helpers";

const FoodRoutePage = (props) => {
  const {
    title,
    classification,
    client,
    role,
    time,
    team,
    skills,
    tldr,
    problem,
    tool,
    features,
    moodBoard,
    persona1,
    persona2,
    persona3,
    styleGuide,
    diagram,
    mobilePreview,
  } = props.project;
  return (
    <>
      <SEO
        title="Food Route | UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A prototype community-based platform for individuals to receive and give assistance to one another"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/food-route/food-route-main.png"
          alt="Three food route application screens"
          className="project-img"
        />
      </div>

      <div className="project-content-container ux-page-col-gap">
        <UxProjDetails
          title={title}
          classification={classification}
          client={client}
          role={role}
          time={time}
          team={team}
          skills={skills}
        />
        <section>
          <h2 className="tertiary-header">{tldr.header}</h2>
          <p>{tldr.body}</p>
        </section>
        <section className="neg-margin-top-15 full-screen col-2">
          <h2 className="tertiary-header">{problem.header}</h2>
          <p>{problem.body}</p>
        </section>

        <section className="full-screen ">
          <h2 className="tertiary-header">{tool.header}</h2>
          <p className="pos-margin-bottom-1">{tool.body}</p>
          <ol className="numbered-list">
            {tool.list.map((item, index) => {
              return (
                <li key={index} className="numbered-list-item">
                  {item}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{features.header}</h2>
          <ol className="numbered-list">
            {features.list.map((item, index) => {
              return (
                <li key={index} className="numbered-list-item">
                  {item}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{moodBoard.header}</h2>

          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={moodBoard.image}
              alt={moodBoard.alt}
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              {moodBoard.alt}
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{persona1.header}</h2>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={persona1.image}
              alt={persona1.alt}
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              {persona1.body}
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{persona2.header}</h2>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={persona2.image}
              alt={persona2.alt}
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              {persona2.body}
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{persona3.header}</h2>
          <figure className="project-img-container">
            <img
              src={persona3.image}
              alt={persona3.alt}
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              {persona3.body}
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{diagram.header}</h2>
          <figure className="project-img-container ">
            <img
              src={diagram.image}
              alt={diagram.alt}
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              {diagram.alt}
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{styleGuide.header}</h2>
          <ul>
            {styleGuide.list.map((item, index) => {
              return (
                <figure
                  className="project-img-container pos-margin-bottom-4"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="project-img"
                  />
                  <figcaption className="project-figure__caption">
                    {item.alt}
                  </figcaption>
                </figure>
              );
            })}
          </ul>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{mobilePreview.header}</h2>
          <ul className="content-section-preview">
            {mobilePreview.list.map((item, index) => {
              return (
                <figure
                  className="project-img-container pos-margin-bottom-4"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="project-img"
                  />
                  <figcaption className="project-figure__caption">
                    {item.alt}
                  </figcaption>
                </figure>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default FoodRoutePage;

export const getStaticProps = () => {
  let project = findProject(uxProjects, "/food-route");
  return {
    props: {
      project,
    },
  };
};
