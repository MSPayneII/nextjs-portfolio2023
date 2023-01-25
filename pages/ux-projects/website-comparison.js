import React from "react";
import Link from "next/link";
import SEO from "../../components/seo/seo";

const WebsiteComparison = () => {
  return (
    <>
      <SEO
        title="Website Comparison | UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A comparison of the navigability of multiple Behavioral Lab websites using eye-tracking technology"
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

export default WebsiteComparison;
