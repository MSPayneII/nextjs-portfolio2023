import React from "react";
import Link from "next/link";
import ListItem from "./list-item";

const ProjectList = ({ projectsPreview, category }) => {
  return (
    <div className="list-container">
      {projectsPreview.map((item) => {
        const { id, slug } = item;
        return (
          <Link
            href={`/${category}-projects${slug}`}
            className="link-article"
            key={id}
          >
            <ListItem {...item} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
