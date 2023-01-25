import Link from "next/link";

const Collaborate = () => {
  return (
    <article className="collaborate-container">
      <h2 className="primary-secondary-header">Want to collaborate?</h2>
      <div className="divider-line"></div>
      <div>
        <Link href="/contact-me" className="site-nav-link">
          Contact me
        </Link>
      </div>
    </article>
  );
};

export default Collaborate;
