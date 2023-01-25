import { useRef } from "react";
import Link from "next/link";
import Collaborate from "../components/homepage/collaborate";
import Hero from "../components/homepage/hero";
import About from "../components/homepage/about";
import { projectCategories } from "../data/project-categories";
import SEO from "../components/seo/seo";

const HomePage = () => {
  let workSection = useRef(null);

  return (
    <>
      <SEO
        title="Homepage | Michael S. Payne II Portfolio"
        description="Homepage of my portfolio that gives information about myself and directs visitors to my work collections"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <Hero workSection={workSection} />
      <About />

      <section className="my-work-section" ref={workSection}>
        <h2 className="primary-secondary-header">My work</h2>
        <div className="list-container">
          {projectCategories.map((item) => {
            const { id, img, alt, slug, title, body } = item;
            return (
              <Link href={slug} key={id} className="link-article">
                <article className="list-item">
                  <img src={img} alt={alt} className="list-item-img" />

                  <div className="list-item-text">
                    <div className="divider-line"></div>
                    <div className="list-details">
                      <h2 className="tertiary-header">{title}</h2>

                      <p className="list-item-body">{body}</p>
                    </div>
                    <div className="divider-line"></div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
      <Collaborate />
    </>
  );
};

export default HomePage;
