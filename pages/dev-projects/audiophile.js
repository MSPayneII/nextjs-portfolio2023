import React from "react";
import Collaborate from "../../components/homepage/collaborate";
import DevProjDetails from "../../components/single-project/dev-project-details";
import MVPFeatures from "../../components/single-project/mvp-features";
import { devProjects } from "../../data/dev-projects";
import { findProject } from "../../helpers/helpers";
import SEO from "../../components/seo/seo";

const Audiophile = (props) => {
  const {
    title,
    client,
    tech,
    classification,
    site,
    github,
    tldr,
    features,
    cart,
  } = props.project;

  return (
    <>
      <SEO
        title="Audiophile E-commerce | Development Projects | Michael S. Payne II Portfolio"
        description=" Project: A multi-page e-commerce website built with a JavaScript-heavy approach"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img
          src="/assets/Audiophile/audiophile-main.png"
          alt="Project Landing Page"
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

        <section className="neg-margin-top-15">
          <h2 className="tertiary-header">{cart.header}</h2>
          <p className="pos-margin-bottom-4">{cart.body}</p>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src="/assets/Audiophile/audiophile-cart.gif"
              alt="Checkout functionality display"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Checkout functionality display
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">Previews</h2>

          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src="/assets/audiophile/product-purchase-flow.png"
              alt="Screens displaying the user flow for purchasing products"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Screens displaying the user flow for purchasing products
            </figcaption>
          </figure>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src="/assets/audiophile/tablet-preview.png"
              alt="Tablet view for a product page. (Desktop is similar)"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Tablet view for a product page. (Desktop is similar)
            </figcaption>
          </figure>

          <figure className="project-img-container">
            <img
              src="/assets/audiophile/checkout-flow.png"
              alt="Three screens displaying the cart, checkout form, and order confirmation"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Screens for the cart, checkout form, and order confirmation
            </figcaption>
          </figure>
        </section>
      </div>

      <Collaborate />
    </>
  );
};

export default Audiophile;

export const getStaticProps = () => {
  let project = findProject(devProjects, "/audiophile");

  return {
    props: {
      project,
    },
  };
};
