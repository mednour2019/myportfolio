document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const projectId = getQueryParam("project");

    const projects = {
        project16: {
            title: "PDF Project",
            technologies: "PDF, JavaScript",
            description: "This project showcases a PDF document with dynamic content loading.",
            pdfSrc: "https://drive.google.com/file/d/1sQsu7RSjE9-s_iZ3QGZ9xqoFhgozenWg/preview", // Replace with your actual PDF file path
            githubLink: "https://github.com/your-username/pdf-project",
            keyFeatures: [
                { title: "Dynamic Loading", description: "Loads project details based on URL parameters." },
                { title: "PDF Integration", description: "Seamlessly embeds PDF documents into the webpage." },
                { title: "Responsive Design", description: "Adapts to various screen sizes for optimal viewing." }
            ]
        },
        project20: {
            title: "PDF Project",
            technologies: "PDF, JavaScript",
            description: "This project showcases a PDF document with dynamic content loading.",
            pdfSrc: "https://drive.google.com/file/d/132fIlK4UPp2DjSucoqCeY37EwkhtCDE8/preview", // Replace with your actual PDF file path
            githubLink: "https://github.com/your-username/pdf-project",
            keyFeatures: [
                { title: "Dynamic Loading", description: "Loads project details based on URL parameters." },
                { title: "PDF Integration", description: "Seamlessly embeds PDF documents into the webpage." },
                { title: "Responsive Design", description: "Adapts to various screen sizes for optimal viewing." }
            ]
        },
        project22: {
            title: "PDF Project",
            technologies: "PDF, JavaScript",
            description: "This project showcases a PDF document with dynamic content loading.",
            pdfSrc: "https://drive.google.com/file/d/1qZ4QE_hDYsGFXRwbA0jlGGG6DOADUreU/preview", // Replace with your actual PDF file path
            githubLink: "https://github.com/your-username/pdf-project",
            keyFeatures: [
                { title: "Dynamic Loading", description: "Loads project details based on URL parameters." },
                { title: "PDF Integration", description: "Seamlessly embeds PDF documents into the webpage." },
                { title: "Responsive Design", description: "Adapts to various screen sizes for optimal viewing." }
            ]
        }
        // Add more PDF projects here as needed
    };

    function loadProjectDetails(project) {
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-technologies").textContent = "Technologies: " + project.technologies;
        document.getElementById("project-description").querySelector("p").textContent = project.description;
        document.getElementById("github-link").querySelector("a").href = project.githubLink;
        document.getElementById("pdf-viewer").src = project.pdfSrc;

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
