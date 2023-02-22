import Image from "next/image";
import AboutMeImg from "../../public/assets/homescreen/about-me.svg";

const About = () => {
  return (
    <div className="about-me">
      <div className="polaroid">
        <Image
          src={AboutMeImg}
          alt="Michael looking at affinity diagram"
          className="about-me-img"
        />
        <div className="polaroid-text">
          <p className="quaternary-header">Affinity Diagramming</p>
        </div>
      </div>
      <section className="about-me-text">
        <h2 className="primary-secondary-header about-me-title">About me</h2>
        <p className="pos-margin-bottom-1">
          I enjoy combining research and development processes, piecing together
          information in hopes of telling captivating stories to bring forward
          positive change.
        </p>
        <p className="pos-margin-bottom-1">
          I obtained a master's in Information Science from the University of
          Michigan and completed Perficient's Bright Paths Program, a coding
          boot camp for Full Stack JavaScript and React Development.
        </p>
        <p>
          I'm working on becoming an accessibility-focused developer, so I'm
          studying to obtain the IAAP CPACC certification. I plan to take the
          exam in April 2023. After that, I will prepare for the IAAP WAS
          certification.
        </p>
      </section>
    </div>
  );
};

export default About;
