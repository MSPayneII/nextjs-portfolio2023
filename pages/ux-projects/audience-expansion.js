import React from "react";
import Link from "next/link";
import SEO from "../../components/seo/seo";

const AudienceExpansion = () => {
  return (
    <>
      <SEO
        title="Audience Expansion | UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A customer assessment of current and potential customers to provide recommendations for attracting a new audience for Journeys International"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <section className="page-not-found-text">
        <img
          src="/assets/undraw-svgs/undraw_under_construction_-46-pa.svg"
          alt="page under construction illustration"
          className="page-not-found-img"
        />
        <h1 className="primary-secondary-header">
          This page is temporarily unavailable
        </h1>

        <Link href="/ux-projects" className="site-nav-link">
          Return to the UX projects page
        </Link>
      </section>
    </>
  );
};

export default AudienceExpansion;
