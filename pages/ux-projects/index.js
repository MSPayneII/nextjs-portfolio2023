import Collaborate from "../../components/homepage/collaborate";
import ProjectList from "../../components/lists/project-list";
import { uxProjects } from "../../data/ux-projects";
import SEO from "../../components/seo/seo";

const UxProjectCollectionPage = (props) => {
  const { title, projectsPreview } = props;

  return (
    <section>
      <SEO
        title="UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="A collection of my user experience projects"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <h1 className="primary-secondary-header projects-page-header">{title}</h1>

      <ProjectList projectsPreview={projectsPreview} category={"ux"} />
      <Collaborate />
    </section>
  );
};

export default UxProjectCollectionPage;

export const getStaticProps = () => {
  const uxProjectsPreview = uxProjects.map((project) => {
    const { id, slug, img, title, client, desc } = project;

    return {
      id,
      slug,
      img,
      title,
      client,
      desc,
    };
  });

  return {
    props: {
      title: "UXR & design projects",
      projectsPreview: uxProjectsPreview,
    },
  };
};
