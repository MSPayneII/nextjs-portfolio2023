import Collaborate from "../../components/homepage/collaborate";
import ProjectList from "../../components/lists/project-list";
import { devProjects } from "../../data/dev-projects";
import SEO from "../../components/seo/seo";

const DevProjectCollectionPage = (props) => {
  const { title, projectsPreview } = props;

  return (
    <section>
      <SEO
        title="Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="A collection of my web development projects"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <h1 className="primary-secondary-header projects-page-header">{title}</h1>

      <ProjectList projectsPreview={projectsPreview} category={"dev"} />
      <Collaborate />
    </section>
  );
};

export default DevProjectCollectionPage;

export const getStaticProps = () => {
  const devProjectsPreview = devProjects.map((project) => {
    const { id, slug, img, title, desc } = project;

    let { client, tech } = project;

    if (!client) {
      client = null;
    }

    if (!tech) {
      tech = null;
    }
    return {
      id,
      slug,
      img,
      title,
      client,
      tech,
      desc,
    };
  });

  return {
    props: {
      title: "Web development projects",
      projectsPreview: devProjectsPreview,
    },
  };
};
