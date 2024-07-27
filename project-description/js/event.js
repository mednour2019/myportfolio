
document.addEventListener("DOMContentLoaded", function () {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const projectId = getQueryParam("project");

  const projects = {
    project1: {
      title: "Angular DataTable Implementation",
      technologies:
        "Angular ,Angular Material ,Type Script , HTML , CSS ,Bootstrap ,RxJS",
      description:
        "In this technical test project, I implemented a dynamic and responsive data table using Angular, designed to manage employee data retrieved from an external API. The project showcases advanced table functionalities, including pagination, sorting, filtering, and CRUD (Create, Read, Update, Delete) operations, all handled on the frontend.",
      videoSrc:
        "https://drive.google.com/file/d/1SVLCW8LEn6g3AzBg9pFenYHlbkttpMty/preview",
      githubLink: "https://github.com/mednour2019/AngularModuleTest.git",
      keyFeatures: [
        {
          title: "Responsive Design",
          description: "Optimized for all devices.",
        },
        {
          title: "Pagination",
          description:
            "Implemented pagination to display 10 items per page by default, with the option to change the number of items displayed.",
        },
        {
          title: "Sorting",
          description:
            "Enabled sorting on all columns, allowing users to sort data in ascending or descending order",
        },
        {
          title: "Filtering",
          description:
            "Provided a comprehensive filtering feature to search across all columns, making it easy to find specific records.",
        },
        {
          title: "CRUD Operations",
          description:
            "Added functionality to add and remove employees directly from the table on the frontend, providing a seamless user experience.",
        },
      ],
    },
    project2: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/13MBAs9ZqScgba9Km3ZlpzFgKOcD-injP/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project3: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1bfgjA4MROwlx81mD5bBFyaJb6TTOa81p/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project4: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1MI2mnB9wiuAdBZFWW9OrggwQUJ2XAw1v/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project5: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1T0w5kwAc12YWU1IaOkdl4FAMsrnfpuOh/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project6: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/15L7GpwoOsXmea4n49E4TOZVVV1smR5CS/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project7: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1CvrL_ZkW2eHticMD9S1U-H3EqZckq9-R/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project8: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1cm9uGlYPSqD5W1OKuESgLhZq5PN1laVV/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project9: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1zf7uXrtPFrbFr2jJjmS3gzc6--dOtXIS/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project10: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1Dr8GtRqQIjtbFhchMKxCB67q_VYz1PEs/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project11: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1kvsUQj3V6d-x7XztU-rO1BsfQeoOkbvO/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project12: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1vP7gcX3KLhS7XIoTql2c86n25SjRy82j/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project13: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1VoeJAijYPUBYbU_54PO9nweTrmEcfGN_/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project14: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1HQccNXkQFeh6P6iXuehiwk_haR4U4IDS/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project15: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1EQ_56p41HTnX9U1LQWx8_FTDJ1Y799hG/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project18: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1ZC4WDS97Db8-tqDj2z4CqKd_oW2lnazb/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    project19: {
      title: "Psychotherapy Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This is a detailed description of Project 2.",
      videoSrc: "https://drive.google.com/file/d/1G7w0cDEu1P8qVCxj0WGar2lGBKJJv6l0/preview",
      githubLink: "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [] // Ensure keyFeatures exists, even if empty
    },
    // Add more projects as needed
  };

  if (projects[projectId]) {
    const project = projects[projectId];
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-technologies").textContent =
      "Technologies: " + project.technologies;
    document
      .getElementById("project-description")
      .querySelector("p").textContent = project.description;

    var iframe = document.getElementById("video-iframe");
    iframe.src = project.videoSrc;

    document.getElementById("github-link").href = project.githubLink;

    // Add key features to the list if they exist
    var keyFeaturesList = document.getElementById("key-features-list");
    keyFeaturesList.innerHTML = ""; // Clear any existing content
    if (project.keyFeatures && project.keyFeatures.length > 0) {
      project.keyFeatures.forEach((feature, index) => {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${index + 1}. ${feature.title}:</strong> ${feature.description}`;
        keyFeaturesList.appendChild(listItem);
      });
    } else {
      // If no key features, display a message or hide the list
      keyFeaturesList.innerHTML = "<li>No key features available.</li>";
    }
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
