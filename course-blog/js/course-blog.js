document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    const projectId = getQueryParam("project");

    const projects = {
        courseblog1: {
        title: "Git & GitHub For Beginners - Master Git and GitHub",
        technologies: "Git , Git hub , SVN , Git lab ",
        description: "This course helps me especially in mastering Git commands via Git Bash. While many tools today provide graphical interfaces, using commands keeps a developer's memory sharp and is beneficial for interview questions. Additionally, this course covers a variety of topics, including Git, GitHub, and TortoiseSVN.",
        pdfSrc: "https://drive.google.com/file/d/1VZW2q-8IQKtxAsHX5R22okjq3NivRpOw/preview", // Replace with your actual PDF file path
        githubLink: "https://github.com/mednour2019/TesProject01.git",
        tableOfContents: [
          { id: 1, name: "Introduction To Version Control Systems", evaluation: 4 },
          { id: 2, name: "Learning Git Essentials", evaluation: 3 },
          { id: 3, name: "GitHub First Steps & Basics", evaluation: 3 },
          { id: 4, name: "GitHub Commands & Functionalities", evaluation: 5 },
          { id: 5, name: "Version Control Premium Content Visualization, Flow, and Commands", evaluation: 3 },
          { id: 6, name: "Branching - Full Introduction To Merging [Branches in Version Control Systems]", evaluation: 2 },
          { id: 7, name: "Merging - Process, Steps, and Merge Techniques", evaluation: 2 },
          { id: 8, name: "Conflicts Resolution", evaluation: 2 },
          { id: 9, name: "Intermediate Level Going Further", evaluation: 4 },
          { id: 10, name: "GitLab Remote Version Control System - Introduction", evaluation: 4 },
          { id: 11, name: "GitLab Start Working", evaluation: 4 },
          { id: 12, name: "SVN (SubVersion) Remote Version Control System - Introduction", evaluation: 2 },
          { id: 13, name: "Tortoise SVN - Down to Business", evaluation: 2 },



        ]
      },
      
    };

    function generateStars(rating) {
      let stars = '';
      for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
      }
      return stars;
    }

    function loadProjectDetails(project) {
      document.getElementById("project-title").textContent = project.title;
      document.getElementById("project-technologies").textContent = "Technologies: " + project.technologies;
      document.getElementById("project-description").querySelector("p").textContent = project.description;
      document.getElementById("pdf-viewer").src = project.pdfSrc;
      document.getElementById("github-link").href = project.githubLink;

      const tocBody = document.getElementById("toc-body");
      tocBody.innerHTML = ""; // Clear existing table of contents
      let totalRating = 0;

      project.tableOfContents.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td class="stars">${generateStars(item.evaluation)}</td>`;
        tocBody.appendChild(row);
        totalRating += item.evaluation;
      });
      const averageRating = totalRating / project.tableOfContents.length;
      // Append total and average rating row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td colspan="2"><strong>Total Rating (points)</strong></td><td class="stars"><strong>${totalRating}</strong></td>`;
    tocBody.appendChild(totalRow);

    const averageRow = document.createElement("tr");
    averageRow.innerHTML = `<td colspan="2"><strong>Average Rating (stars)</strong></td><td class="stars"><strong>${averageRating.toFixed(2)}</strong></td>`;
    tocBody.appendChild(averageRow);

    }

    if (projects[projectId]) {
      loadProjectDetails(projects[projectId]);
    } else {
      document.getElementById("project-title").textContent = "Project Not Found";
      document.getElementById("project-technologies").textContent = "";
      document.getElementById("project-description").querySelector("p").textContent = "The project you are looking for does not exist.";
      document.getElementById("pdf-viewer").style.display = "none";
      document.getElementById("github-link").style.display = "none";
       // Clear the table of contents and display a message
       const tocBody = document.getElementById("toc-body");
       tocBody.innerHTML = ""; // Clear existing table of contents
       const row = document.createElement("tr");
       row.innerHTML = '<td colspan="3">No content available</td>';
       tocBody.appendChild(row);
    }
  });

  function openBlogCourse(projectId) {
    window.location.href = 'course-blog/course-blog.html?project=' + projectId;
  }
  