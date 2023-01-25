import React from "react";
import Collaborate from "../../components/homepage/collaborate";
import DevProjDetails from "../../components/single-project/dev-project-details";
import MVPFeatures from "../../components/single-project/mvp-features";
import { devProjects } from "../../data/dev-projects";
import { findProject } from "../../helpers/helpers";
import SEO from "../../components/seo/seo";

const ConnectFour = (props) => {
  const {
    title,
    client,
    tech,
    classification,
    site,
    github,
    tldr,
    behavior,
    features,
    highlight1,
    highlight2,
  } = props.project;

  const mobilePreviewList = [
    "/assets/connect-four/mobile-preview1.png",
    "/assets/connect-four/mobile-preview2.png",
    "/assets/connect-four/mobile-preview3.png",
    "/assets/connect-four/mobile-preview4.png",
    "/assets/connect-four/mobile-preview5.png",
    "/assets/connect-four/mobile-preview6.png",
    "/assets/connect-four/mobile-preview7.png",
  ];

  return (
    <>
      <SEO
        title="Connect Four | Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A connect four game that allows human player vs. human player gameplay (alternating turns on the same computer)"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/connect-four/connect-four-main.png"
          alt="Application Gameboard Screenshot"
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
        <section className="neg-margin-top-6">
          <h2 className="tertiary-header">{behavior.header}</h2>
          <p className="pos-margin-bottom-2">{behavior.body1}</p>
          <p className="pos-margin-bottom-2">{behavior.body2}</p>
          <p>{behavior.body3}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{highlight1.header}</h2>
          <p>{highlight1.body}</p>
        </section>
        <figure className="project-img-container full-screen">
          <img
            src="/assets/connect-four/game-board-design.png"
            alt="Game board split into three layers"
            className="project-img"
          />
          <figcaption className="project-figure__caption">
            Figma design provided by Frontend Mentor
          </figcaption>
        </figure>
        <section className="content-section-two-cols  reduced-width">
          <div>
            <h2 className="tertiary-header">{highlight2.header}</h2>
            <p>{highlight2.body}</p>
          </div>
          <figure className="project-img-container gif-alignment col-2">
            <img
              src="/assets/connect-four/game-piece-animation.gif"
              alt="Gif showing drop animation when a piece is placed in the board"
              className="project-img gif-size-adjust"
            />
            <figcaption className="project-figure__caption">
              Drop animation when a piece is placed in the board
            </figcaption>
          </figure>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">Mobile preview</h2>
          <div className="content-section-preview">
            {mobilePreviewList.map((image, index) => {
              return (
                <img
                  src={image}
                  alt=""
                  className="mobile-preview-img"
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

export default ConnectFour;

export const getStaticProps = () => {
  let project = findProject(devProjects, "/connect-four");

  return {
    props: {
      project,
    },
  };
};
