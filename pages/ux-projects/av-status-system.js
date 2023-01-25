import Collaborate from "../../components/homepage/collaborate";
import UxProjDetails from "../../components/single-project/ux-project-details";
import ShowcasedItems from "../../components/single-project/showcased-items";
import { uxProjects } from "../../data/ux-projects";
import { findProject } from "../../helpers/helpers";
import SEO from "../../components/seo/seo";

const AvStatusSystemPage = (props) => {
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
    discovery,
    validation,
    pilot,
    implementation,
    assessment,
    findings,
    conclusion,
    challenges,
    takeaway,
  } = props.project;

  return (
    <>
      <SEO
        title="AV Status System | UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="Project: Established an automated email confirmation system for absentee ballot status updates in four Michigan cities & townships"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/av-status-system/av-status-main.png"
          alt="Michigan Department of State Logo"
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
              src="/assets/av-status-system/city-locations.png"
              alt="Map of Michigan showing the location and populations of the four Michigan cities and townships for the project"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Map of Michigan showing the location and populations of the four
              Michigan cities and townships for the project
            </figcaption>
          </figure>
        </section>
        <section className="neg-margin-top-4 full-screen col-2">
          <h2 className="tertiary-header">{problem.header}</h2>
          <p>{problem.body}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{discovery.header}</h2>

          {discovery.items.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="quaternary-header pos-margin-bottom-1">
                  {item.header}
                </h4>
                <p className="pos-margin-bottom-4">{item.body}</p>
              </div>
            );
          })}
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{validation.header}</h2>
          <ShowcasedItems items={validation.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{pilot.header}</h2>
          <ShowcasedItems items={pilot.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{implementation.header}</h2>
          <ShowcasedItems items={implementation.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{assessment.header}</h2>
          <ShowcasedItems items={assessment.items} />
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{findings.header}</h2>

          {findings.items.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="quaternary-header pos-margin-bottom-1">
                  {item.header}
                </h4>
                <p className="pos-margin-bottom-4">{item.body}</p>
              </div>
            );
          })}
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{conclusion.header}</h2>
          <ShowcasedItems items={conclusion.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{challenges.header}</h2>
          <ol className="numbered-list">
            {challenges.list.map((item, index) => {
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

export default AvStatusSystemPage;

export const getStaticProps = () => {
  let project = findProject(uxProjects, "/av-status-system");

  return {
    props: {
      project,
    },
  };
};
