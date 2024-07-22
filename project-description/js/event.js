document.addEventListener("DOMContentLoaded", function () {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const projectId = getQueryParam("project");

  const projects = {
    project1: {
      title: "Angular DataTable Implementation",
      technologies: "Angular ,Angular Material ,Type Script , HTML , CSS ,Bootstrap ,RxJS",
      description:
        "In this technical test project, I implemented a dynamic and responsive data table using Angular, designed to manage employee data retrieved from an external API. The project showcases advanced table functionalities, including pagination, sorting, filtering, and CRUD (Create, Read, Update, Delete) operations, all handled on the frontend.",
      videoSrc: "video/AngularMod.webm",
      githubLink: "https://github.com/mednour2019/AngularModuleTest.git",
      keyFeatures: [
        {
          title: "Responsive Design",
          description: "Optimized for all devices.",
        },
        {
          title: "pagination",
          description:
            "Implemented pagination to display 10 items per page by default, with the option to change the number of items displayed.",
        },
        {
          title: "sorting",
          description: "Enabled sorting on all columns, allowing users to sort data in ascending or descending order",
        },
        {
          title: "Filtering",
          description: "Provided a comprehensive filtering feature to search across all columns, making it easy to find specific records.",
        },
        { title: "CRUD Operations", description: "Added functionality to add and remove employees directly from the table on the frontend, providing a seamless user experience." },
      ],
    },
    project2: {
      title: "Project 2 Title",
      technologies: "HTML, CSS, React, Node.js",
      description: "This is a detailed description of Project 2.",
      videoSrc: "video/pschoterapie.webm",
      githubLink: "https://github.com/your-username/project2",
    },
    // Add more projects as needed
  };

  if (projects[projectId]) {
    document.getElementById("project-title").textContent =
      projects[projectId].title;
    document.getElementById("project-technologies").textContent =
      "Technologies: " + projects[projectId].technologies;
    document
      .getElementById("project-description")
      .querySelector("p").textContent = projects[projectId].description;
    document.getElementById("project-video").querySelector("source").src =
      projects[projectId].videoSrc;
    document.getElementById("project-video").querySelector("video").load();
    document.getElementById("github-link").querySelector("a").href =
      projects[projectId].githubLink;
    // Add key features to the list
    const keyFeaturesList = document.getElementById("key-features-list");
    projects[projectId].keyFeatures.forEach((feature, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${index + 1}. ${feature.title}:</strong> ${
        feature.description
      }`;
      keyFeaturesList.appendChild(listItem);
    });
  } else {
    // Handle the case where the projectId is not found
    document.getElementById("project-title").textContent = "Project Not Found";
    document.getElementById("project-technologies").textContent = "";
    document
      .getElementById("project-description")
      .querySelector("p").textContent =
      "The project you are looking for does not exist.";
    document.getElementById("project-video").style.display = "none";
    document.getElementById("github-link").style.display = "none";
  }
});
