const findProject = (projectList, slug) => {
  let project = projectList.find((project) => project.slug === slug);

  return project;
};

const scrollBackToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const clickToDownloadResume = () => {
  // using Java Script method to get PDF file
  fetch("MichaelPayneResume.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "MichaelPayneResume.pdf";
      alink.click();
    });
  });
};

export { findProject, scrollBackToTop, clickToDownloadResume };
