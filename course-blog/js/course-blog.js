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
      courseblog2: {
        title: " Learn MSBI step by step ",
        technologies: " Sql server , Excel , SSIS , SSAS , Mdx , Olap cube , SSRS ,Pivot table",
        description: "This course will teach you MSBI step by step, helping you integrate with BI family tools, enhance your knowledge in data warehousing, star schema, design data modeling, SSIS, OLAP cubes, SSRS, T-SQL, and more.",
        pdfSrc: "", // Replace with your actual PDF file path
        githubLink: "https://github.com/mednour2019/MSBI.git",
        tableOfContents: [
            { id: 1, name: "MSBI Fundamentals, Data Flow, Control Flow, ETL, Data Warehouse (SSIS)", evaluation: 5 },
            { id: 1.1, name: "MSBI Installation (Upgrade)", evaluation: 4 },
            { id: 2, name: "Conditional Split, Data Conversion and Error Handling (SSIS)", evaluation: 3 },
            { id: 3, name: "For Loop, Variables, Parameters and Debugging (SSIS)", evaluation: 4 },
            { id: 4, name: "Packaging and Deployment, File Component and Running SSIS Package", evaluation: 5 },
            { id: 5, name: "Dimensions, Measures, Star Schema, Snowflake, Shared Connection Management", evaluation: 2 },
            { id: 6, name: "SCD, Type 0, Type 1, OLEDB Command and Unicode Conversions (SSIS)", evaluation: 4 },
            { id: 7, name: "Lookup, Data Conversion Optimization and Updating SSIS Package (SSIS)", evaluation: 3 },
            { id: 8, name: "Sort, Merge and Merge Joins (SSIS)", evaluation: 2 },
            { id: 9, name: "Creating SSAS Cube (SSAS)", evaluation: 5 },
            { id: 10, name: "SSAS Time Series and Excel Display (SSAS)", evaluation: 3 },
            { id: 11, name: "Transactions and CheckPoints in SSIS (SSIS)", evaluation: 4 },
            { id: 12, name: "Simple SSRS Report & Implementing Matrix, Tabular, Parameters, Sorting", evaluation: 2 },
            { id: 13, name: "Using Data Profiling Task to Check Data Quality (SSIS)", evaluation: 3 },
            { id: 14, name: "Hierarchical Dimensions (SSAS)", evaluation: 4 },
            { id: 15, name: "Web Services and XML Task (SSIS)", evaluation: 2 },
            { id: 16, name: "DrillDown and Subreports (SSRS)", evaluation: 3 },
            { id: 17, name: "SSAS KPI (Key Performance Indicators) (SSAS)", evaluation: 4 },
            { id: 18, name: "Pivot, UnPivot and Aggregation (SSIS)", evaluation: 5 },
            { id: 19, name: "SSAS Calculation (SSAS)", evaluation: 3 },
            { id: 20, name: "SQL Execute Task (SSIS)", evaluation: 2 },
            { id: 21, name: "Reference and Many-to-Many Relationship (SSAS)", evaluation: 4 },
            { id: 22, name: "Script Task and Send Mail Task (SSIS)", evaluation: 3 },
            { id: 23, name: "Script Component (SSIS)", evaluation: 2 },
            { id: 24, name: "Bar Chart, Gauge and Indicators (SSRS)", evaluation: 5 },
            { id: 25, name: "Partitions in SSAS (SSAS)", evaluation: 3 },
            { id: 26, name: "CDC (Changed Data Capture) in SSIS (SSIS)", evaluation: 4 },
            { id: 27, name: "Additive, Semiadditive and Non-additive Measures in SSAS (SSAS)", evaluation: 2 },
            { id: 28, name: "Buffer Size Tuning (SSIS)", evaluation: 3 },
            { id: 29, name: "How to Implement Multithreading in SSIS? (SSIS)", evaluation: 4 },
            { id: 30, name: "Processing SSAS Cube in Background (SSAS)", evaluation: 5 },
            { id: 31, name: "Explain Asynchronous, Synchronous, Full, Semi & Non-blocking Component", evaluation: 2 },
            { id: 32, name: "SSRS Architecture and Deployment (SSRS)", evaluation: 3 },
            { id: 33, name: "DQS (Data Quality Services) (SSIS)", evaluation: 4 },
            { id: 34, name: "Explain Tabular Model and Power Pivot (SSAS)", evaluation: 2 },
            { id: 35, name: "MDX (Multidimensional Expressions) Queries (SSAS)", evaluation: 5 },
            { id: 36, name: "Data Mining (Fundamentals and Time Series Algorithm) (SSAS)", evaluation: 3 },
            { id: 37, name: "Page Split and Performance Issues with SSIS (SSIS)", evaluation: 2 },
            { id: 38, name: "Aggregations in SSAS (SSAS)", evaluation: 4 },
            { id: 39, name: "ROLAP, MOLAP and HOLAP (SSAS)", evaluation: 3 },
            { id: 40, name: "Instrumentation using Data Taps (SSIS)", evaluation: 2 },
            { id: 41, name: "Lookup Caching Modes and Cache Transform (SSAS)", evaluation: 4 },
            { id: 42, name: "Perspectives & Translations (SSAS)", evaluation: 3 },
            { id: 43, name: "Tabular Training 1: Installation, Xvelocity, Vertipaq, DAX, Creating", evaluation: 5 }
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
  