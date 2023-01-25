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
        <p className="about-me-description">
          I view life as a giant puzzle with individual pieces representing
          different aspects of our lives. One puzzle piece alone may be hard to
          decipher, but an image emerges when many are connected. This mindset
          carries over to my work. I enjoy combining research and development
          processes, piecing together information in hopes of telling
          captivating stories to bring forward positive change.
          <br />
          <br />
          In the last couple of years, I obtained a master's in Information
          Science from the University of Michigan and completed Perficient's
          Bright Paths Program, a coding boot camp for Full Stack JavaScript and
          React Development. I'm based in Detroit, Michigan, and am currently
          seeking full-time employment in user experience and web development.
        </p>
      </section>
    </div>
  );
};

export default About;
