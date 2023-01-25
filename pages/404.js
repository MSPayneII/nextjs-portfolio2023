import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found-text">
        <img
          src="/assets/undraw-svgs/undraw_page_not_found_re_e9o6.svg"
          alt="404 page not found"
          className="page-not-found-img"
        />
        <h1 className="primary-secondary-header">This page does not exist</h1>

        <Link href="/" className="site-nav-link">
          Go to the Homepage
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
