import Form from "../components/contact-form/form";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import SEO from "../components/seo/seo";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact me | Michael S. Payne II Portfolio"
        description="Get in touch with me via my contact form as well as my social media"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <section className="contact-me">
        <h1 className="primary-secondary-header">Contact me</h1>
        <div>
          <p className="contact-body">
            Please feel free to contact me using the form below. I'd love to
            hear about what you're working on and how I could help.
          </p>
          <Form />
        </div>
        <div className="divider-line"></div>
      </section>
      <section className="social-media">
        <h2 className="primary-secondary-header">My socials</h2>

        <div className="socials socials-body">
          <a
            href="https://www.linkedin.com/in/michaelspayneii/"
            className="external-social-link"
          >
            <AiOutlineLinkedin className="social-icon" />
            My LinkedIn
          </a>
          <a
            href="https://github.com/MSPayneII"
            className="external-social-link"
          >
            <AiOutlineGithub className="social-icon" />
            My Github
          </a>
          <a
            href="https://www.frontendmentor.io/profile/MSPayneII"
            className="external-social-link"
          >
            <AiFillInstagram className="social-icon" />
            My Frontend Mentor
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
