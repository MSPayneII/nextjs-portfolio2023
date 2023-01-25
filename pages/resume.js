import { education, skills, experience } from "../data/resume-data";
import Collaborate from "../components/homepage/collaborate";
import { clickToDownloadResume } from "../helpers/helpers";
import SEO from "../components/seo/seo";

const ResumePage = () => {
  return (
    <>
      <SEO
        title="Resume | Michael S. Payne II Portfolio"
        description="A digital version of my professional resume"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <section className="resume-section">
        <h1 className="primary-secondary-header">Resume</h1>
        <div className="resume-download">
          <p className="resume-download-text">
            Feel free to browse my digital resume below, or you can download a
            pdf version here:
          </p>
          <button className="site-nav-link" onClick={clickToDownloadResume}>
            Download Resume (PDF)
          </button>
        </div>
        <div className="divider-line"></div>
      </section>

      <section className="resume-section">
        <h2 className="primary-secondary-header">Education</h2>
        <div className="resume-lists-grouping">
          {education.map((degree) => {
            const { id, header, school, year, gpa } = degree;
            return (
              <div key={id}>
                <h3 className="quaternary-header">{header}</h3>
                <ul className="resume-list">
                  <li className="resume-list-item">{school}</li>
                  <li className="resume-list-item">{year}</li>
                  {gpa ? <li className="resume-list-item">{gpa}</li> : null}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="divider-line"></div>
      </section>

      <section className="resume-section">
        <h2 className="primary-secondary-header">Skills</h2>
        <div className="resume-lists-grouping">
          {skills.map((skill) => {
            const { id, header, talent } = skill;
            return (
              <div key={id}>
                <h3 className="quaternary-header">{header}</h3>
                <ul className="resume-list">
                  {talent.map((skillSet, index) => {
                    return (
                      <li className="resume-list-item" key={index}>
                        - {skillSet}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="divider-line"></div>
      </section>

      <section className="resume-section">
        <h2 className="primary-secondary-header">Experience</h2>
        <div className="resume-experience-grouping">
          {experience.map((job) => {
            const { id, role, company, timeFrame, type, description } = job;
            return (
              <div key={id}>
                <h3 className="quaternary-header">
                  {role} / {company}
                </h3>
                <p className="job-details">
                  <em>
                    {timeFrame} / {type}
                  </em>
                </p>
                <p className="job-description">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Collaborate />
    </>
  );
};

export default ResumePage;
