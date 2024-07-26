document.addEventListener('DOMContentLoaded', function() {
  function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
  }

  const projectId = getQueryParam("project");

  const projects = {
      project17: {
          title: "Gallery Project",
          technologies: "HTML, CSS, JavaScript, Bootstrap",
          description: "This project showcases a dynamic image gallery with modal view functionality.",
          githubLink: "https://github.com/your-username/gallery-project",
          keyFeatures: [
              { title: "Dynamic Loading", description: "Loads project details and images based on URL parameters." },
              { title: "Modal Gallery", description: "Click on the main image to open a full-screen modal gallery." },
              { title: "Responsive Design", description: "Adapts to various screen sizes for optimal viewing." }
          ],
          images: [
              { src: '../gallery-viewer/images/project17/TransformationClient.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/TransformationProduit.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/TransformationTemps.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/TransformationVentes.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/Ventes.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/Temps.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/Produit.png', description: 'Description for image 1' },
              { src: '../gallery-viewer/images/project17/Client.png', description: 'Description for image 1' },
              // Add more image objects as needed
          ]
      },
      project21: {
        title: "Gallery Project",
        technologies: "HTML, CSS, JavaScript, Bootstrap",
        description: "This project showcases a dynamic image gallery with modal view functionality.",
        githubLink: "https://github.com/your-username/gallery-project",
        keyFeatures: [
            { title: "Dynamic Loading", description: "Loads project details and images based on URL parameters." },
            { title: "Modal Gallery", description: "Click on the main image to open a full-screen modal gallery." },
            { title: "Responsive Design", description: "Adapts to various screen sizes for optimal viewing." }
        ],
        images: [
            { src: '../gallery-viewer/images/project21/1.origintext.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/2.cleaniing.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/3.TransfSentBySpacy.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/4.SplitSentce.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/5.wordsspacy.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/6.lemma.PNG', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/7.frequencisWord.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/8.scoreeachword.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/10.heightsenteces.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/11.top5frequencies.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project21/12FinalResult.png', description: 'Description for image 1' },

            // Add more image objects as needed
        ]
    },
    project23: {
        title: "Gallery Project",
        technologies: "HTML, CSS, JavaScript, Bootstrap",
        description: "This project showcases a dynamic image gallery with modal view functionality.",
        githubLink: "https://github.com/your-username/gallery-project",
        keyFeatures: [
            { title: "Dynamic Loading", description: "Loads project details and images based on URL parameters." },
            { title: "Modal Gallery", description: "Click on the main image to open a full-screen modal gallery." },
            { title: "Responsive Design", description: "Adapts to various screen sizes for optimal viewing." }
        ],
        images: [
            { src: '../gallery-viewer/images/project23/1.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/2.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/3.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/4.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/5.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/6.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/7.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/8.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/9.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/10.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/11.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/12.png', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/44.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/111.jpg', description: 'Description for image 1' },
            { src: '../gallery-viewer/images/project23/5555.jpg', description: 'Description for image 1' },

            // Add more image objects as needed
        ]
    }
      // Add more gallery projects here as needed
  };

  function loadProjectDetails(project) {
      document.getElementById("project-title").textContent = project.title;
      document.getElementById("project-technologies").textContent = "Technologies: " + project.technologies;
      document.getElementById("project-description").querySelector("p").textContent = project.description;
      document.getElementById("github-link").querySelector("a").href = project.githubLink;

      const keyFeaturesList = document.getElementById("key-features-list");
      keyFeaturesList.innerHTML = ""; // Clear existing features
      project.keyFeatures.forEach((feature) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${feature.title}:</strong> ${feature.description}`;
          keyFeaturesList.appendChild(listItem);
      });

      // Set up the main displayed photo
      const displayedPhoto = document.getElementById('displayedPhoto');
      displayedPhoto.src = project.images[0].src;
      displayedPhoto.alt = project.images[0].description;

      setupGallery(project.images);
  }

  function setupGallery(images) {
      const displayedPhoto = document.getElementById('displayedPhoto');
      const modal = document.getElementById('gallery-modal');
      const modalImg = document.getElementById('modal-img');
      const captionText = document.getElementById('caption');
      const closeBtn = document.getElementsByClassName('close')[0];
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');

      let currentIndex = 0;

      displayedPhoto.addEventListener('click', function() {
          openModal(0);
      });

      function openModal(index) {
          modal.style.display = 'flex';
          showImage(index);
      }

      function showImage(index) {
          if (index >= images.length) {
              currentIndex = 0;
          } else if (index < 0) {
              currentIndex = images.length - 1;
          } else {
              currentIndex = index;
          }
          modalImg.src = images[currentIndex].src;
          captionText.innerHTML = images[currentIndex].description;
      }

      closeBtn.onclick = function() {
          modal.style.display = 'none';
      }

      prevBtn.onclick = function() {
          showImage(currentIndex - 1);
      }

      nextBtn.onclick = function() {
          showImage(currentIndex + 1);
      }

      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = 'none';
          }
      }
  }

  if (projects[projectId]) {
      loadProjectDetails(projects[projectId]);
  } else {
      document.getElementById("project-title").textContent = "Project Not Found";
      document.getElementById("project-technologies").textContent = "";
      document.getElementById("project-description").querySelector("p").textContent = "The project you are looking for does not exist.";
      document.getElementById("github-link").style.display = "none";
      document.querySelector(".gallery-container").style.display = "none";
  }
});