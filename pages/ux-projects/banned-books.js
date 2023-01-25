import Collaborate from "../../components/homepage/collaborate";
import UxProjDetails from "../../components/single-project/ux-project-details";
import ShowcasedItems from "../../components/single-project/showcased-items";
import { uxProjects } from "../../data/ux-projects";
import { findProject } from "../../helpers/helpers";
import SEO from "../../components/seo/seo";

const BannedBooks = (props) => {
  const {
    title,
    classification,
    client,
    role,
    time,
    team,
    skills,
    tldr,
    background,
    problem,
    process,
    findings,
    recommendations,
    takeaway,
  } = props.project;

  return (
    <>
      <SEO
        title="Banned Books | UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="Project: An updated needs and usability assessment analysis of the Banned & Challenged Books website for the American Library Association"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/banned-books/banned-books-main.png"
          alt="American Library 
          Association Logo"
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
        <section>
          <figure className="project-img-container ">
            <img
              src="/assets/banned-books/landing.png"
              alt="The Banned Books website landing page in 2019"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              The Banned Books website landing page in 2019
            </figcaption>
          </figure>
        </section>
        <section className="neg-margin-top-9 full-screen col-2">
          <h2 className="tertiary-header">{background.header}</h2>
          <p>{background.body1}</p>
          <p>{background.body2}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{problem.header}</h2>
          <p>{problem.body}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{process.header}</h2>
          <ShowcasedItems items={process.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{findings.header}</h2>
          <ol className="numbered-list">
            {findings.list.map((item, index) => {
              return (
                <li key={index} className="numbered-list-item">
                  {item}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{recommendations.header}</h2>
          <ol className="numbered-list">
            {recommendations.list.map((item, index) => {
              return (
                <li key={index} className="numbered-list-item">
                  {item}
                </li>
              );
            })}
          </ol>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{takeaway.header}</h2>
          <p>{takeaway.body}</p>
        </section>
      </div>
      <Collaborate />
    </>
  );
};

export default BannedBooks;

export const getStaticProps = () => {
  let project = findProject(uxProjects, "/banned-books");

  return {
    props: {
      project,
    },
  };
};
