import React from "react";
import Collaborate from "../../components/homepage/collaborate";
import DevProjDetails from "../../components/single-project/dev-project-details";
import MVPFeatures from "../../components/single-project/mvp-features";
import { devProjects } from "../../data/dev-projects";
import { findProject } from "../../helpers/helpers";
import SEO from "../../components/seo/seo";

const EightBallFortune = (props) => {
  const { title, client, tech, classification, site, github, tldr, features } =
    props.project;

  const tabletPreviewList = [
    "/assets/eightball-fortune/tablet-preview1.png",
    "/assets/eightball-fortune/tablet-preview2.png",
    "/assets/eightBall-fortune/tablet-preview3.png",
    "/assets/eightBall-fortune/tablet-preview4.png",
    "/assets/eightBall-fortune/tablet-preview5.png",
    "/assets/eightBall-fortune/tablet-preview6.png",
  ];

  return (
    <>
      <SEO
        title="8-Ball Fortune Teller | Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="Project: My Bright Paths Foundation Capstone project. A digital version of the Magic Eightball produced by Mattel"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/eightball-fortune/eightball-fortune-main.png"
          alt="Eightball fortune landing page"
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
          <p className="pos-margin-bottom-2">{tldr.body1}</p>
          <p>{tldr.body2}</p>
        </section>
        <MVPFeatures features={features} />

        <section>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src="/assets/eightball-fortune/eightball-animation.gif"
              alt="Eightball animation before displaying an answer"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Eightball animation before displaying an answer
            </figcaption>
          </figure>
          <figure className="project-img-container ">
            <img
              src="/assets/eightball-fortune/eightball-responsive.gif"
              alt="Responsive layout design: mobile to desktop screens"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Responsive layout design: mobile to desktop screens
            </figcaption>
          </figure>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">Tablet preview</h2>
          <div className="content-section-preview">
            {tabletPreviewList.map((image, index) => {
              return (
                <img
                  src={image}
                  alt=""
                  className="tablet-preview-img"
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>

      <Collaborate />
    </>
  );
};

export default EightBallFortune;

export const getStaticProps = () => {
  let project = findProject(devProjects, "/eightball-fortune");

  return {
    props: {
      project,
    },
  };
};
