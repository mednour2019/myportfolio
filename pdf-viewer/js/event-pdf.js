document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const projectId = getQueryParam("project");

    const projects = {
        project16: {
            title: "Insurance Data Processing and Analysis",
            technologies: "Excel, SSIS , Sql server , Power bi, DAX",
            description: "A scholarship project that involves obtaining insurance data in CSV format from professors, processing it, and centralizing it in SQL Server. The project utilizes SSIS for data processing and flow management, and the final step is to visualize the data using Power BI for insightful analysis.",
            pdfSrc: "https://drive.google.com/file/d/1sQsu7RSjE9-s_iZ3QGZ9xqoFhgozenWg/preview", // Replace with your actual PDF file path
            githubLink: "https://github.com/mednour2019/BiInsurance.git",
            keyFeatures: [
                {
                    "title": "Describe Data Source",
                    "description": "Detail the insurance data obtained in CSV format from professors."
                  },
                  {
                    "title": "ETL Process with SSIS",
                    "description": "Use SSIS to perform ETL (Extract, Transform, Load) and load the data into SQL Server, managing constraints and data flow."
                  },
                  {
                    "title": "Identify Data Issues",
                    "description": "Precisely identify and address data issues and inconsistencies during the ETL process."
                  },
                  {
                    "title": "Connect Power BI and Write DAX Queries",
                    "description": "Connect to Power BI and write DAX queries to correct and refine the data."
                  },
                  {
                    "title": "Visualize Data in Power BI",
                    "description": "Create insightful visualizations in Power BI to support decision-making processes, complete with detailed interpretations."
                  }
            ]
        },
        project20: {
            title: "Machine Learning Scraping and Sentiment Analysis of Breaking Bad Reviews",
            technologies: "python , Django , ML , scrapping data, html ,css",
            description: "For my exam project, I chose to scrape reviews and apply machine learning techniques. Specifically, I focused on Breaking Bad reviews. I scraped the data and processed it using Python to handle null values and duplicates. I then generated a machine learning model to achieve high accuracy. The project includes a detailed sentiment analysis based on this model to ensure precision. Additionally, I developed a Django application that allows users to enter reviews and predicts whether the sentiment is neutral, positive, or negative.",
            pdfSrc: "https://drive.google.com/file/d/132fIlK4UPp2DjSucoqCeY37EwkhtCDE8/preview", // Replace with your actual PDF file path
            githubLink: "https://github.com/mednour2019/IA-scrap-bb-dja.git",
            keyFeatures: [
                {
                    "title": "Scraping Data with BeautifulSoup and Selenium",
                    "description": "Collect reviews from multiple sites using BeautifulSoup and Selenium."
                  },
                  {
                    "title": "Unify Data in One Data Source via Python",
                    "description": "Merge and clean the scraped data into a single, unified data source using Python."
                  },
                  {
                    "title": "Machine Learning Process and Treatment",
                    "description": "Process the data for machine learning, handling null values and duplicates."
                  },
                  {
                    "title": "Apply Machine Learning Algorithms",
                    "description": "Implement and train machine learning models to analyze sentiment with high accuracy."
                  },
                  {
                    "title": "Download Blob Model for Prediction",
                    "description": "Save the trained machine learning model as a blob for prediction purposes."
                  },
                  {
                    "title": "Inject Model into Django Interface",
                    "description": "Integrate the machine learning model into a Django application for real-time predictions."
                  },
                  {
                    "title": "User Review Input and Prediction Display",
                    "description": "Allow users to input reviews in the Django interface and display the predicted sentiment (neutral, positive, or negative)."
                  }
            ]
        },
        project22: {
            title: "Machine Learning Analysis of Netflix Data",
            technologies: "python, ML, TKINTER",
            description: "The project aims to analyze Netflix data to gain insights into different types of content, specifically focusing on distinguishing between films and TV shows. By applying machine learning techniques, the analysis will classify and provide knowledge about the nature of each entry, whether it is a film or a TV show. This will help in understanding patterns and trends within Netflix's content library.",
            pdfSrc: "https://drive.google.com/file/d/1qZ4QE_hDYsGFXRwbA0jlGGG6DOADUreU/preview", // Replace with your actual PDF file path
            githubLink: "https://github.com/mednour2019/netflix-machine-learning.git",
            keyFeatures: [
                {
                    "title": "Visualize Initial Data",
                    "description": "Provide an initial visualization of the Netflix data to understand its structure and distribution."
                  },
                  {
                    "title": "Identify Problems and Deficiencies",
                    "description": "Detect and address any issues or deficiencies in the data, such as missing values or inconsistencies."
                  },
                  {
                    "title": "Clean and Treat Data",
                    "description": "Perform data cleaning and preprocessing to prepare it for analysis."
                  },
                  {
                    "title": "Visualize and Analyze Data",
                    "description": "Create visualizations to analyze the data and extract meaningful insights."
                  },
                  {
                    "title": "Transform Categorical Columns",
                    "description": "Convert categorical columns into a suitable format for machine learning algorithms."
                  },
                  {
                    "title": "Apply Various Algorithms",
                    "description": "Implement multiple machine learning algorithms to classify the data."
                  },
                  {
                    "title": "Choose the Best Accuracy Model",
                    "description": "Evaluate the performance of each algorithm and select the one with the highest accuracy."
                  },
                  {
                    "title": "Visualize Results in Tkinter Desktop Application",
                    "description": "Develop a Tkinter desktop application to visualize the entire process and results."
                  }
            ]
        }
        // Add more PDF projects here as needed
    };

    function loadProjectDetails(project) {
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-technologies").textContent = "Technologies: " + project.technologies;
        document.getElementById("project-description").querySelector("p").textContent = project.description;
        document.getElementById("pdf-viewer").src = project.pdfSrc;
        document.getElementById("github-link").href = project.githubLink;

        const keyFeaturesList = document.getElementById("key-features-list");
        keyFeaturesList.innerHTML = ""; // Clear existing features
        project.keyFeatures.forEach((feature, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${feature.title}:</strong> ${feature.description}`;
            keyFeaturesList.appendChild(listItem);
        });
    }

    if (projects[projectId]) {
        loadProjectDetails(projects[projectId]);
    } else {
        document.getElementById("project-title").textContent = "Project Not Found";
        document.getElementById("project-technologies").textContent = "";
        document.getElementById("project-description").querySelector("p").textContent = "The project you are looking for does not exist.";
        document.getElementById("pdf-viewer").style.display = "none";
        document.getElementById("github-link").style.display = "none";
    }
});
