document.addEventListener('DOMContentLoaded', function() {
  function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
  }

  const projectId = getQueryParam("project");

  const projects = {
      project17: {
          title: "SSIS Project: ETL and  Data Sources",
          technologies: "ssis, sql server",
          description: "A scholarship project, as demanded by professors, involves working with multiple external data sources such as MySQL and Excel. The project aims to merge these heterogeneous data sources and perform joins using SSIS, finally centralizing the unified data in SQL Server.",
          githubLink: "https://github.com/mednour2019/ssisHetero.git",
          keyFeatures: [
            {
                "title": "Transform Customer Data",
                "description": "Extract, clean customer data from various sources."
              },
              {
                "title": "Transform Product Data",
                "description": "Process and standardize product data, ensuring it is accurate and ready for analysis."
              },
              {
                "title": "Conversion and Sort Data",
                "description": "Convert data types as needed and sort the data to prepare"
              },
              {
                "title": "Transformation of Sales Data",
                "description": "Transform sales data to integrate it with other datasets."
              }
          ],
          images: [
              { src: '../gallery-viewer/images/project17/TransformationClient.PNG', description: 'Transformation customer data' },
              { src: '../gallery-viewer/images/project17/TransformationProduit.PNG', description: 'join product from various data source' },
              { src: '../gallery-viewer/images/project17/TransformationTemps.PNG', description: 'conversion and sort data' },
              { src: '../gallery-viewer/images/project17/TransformationVentes.PNG', description: 'transformation of sales data' },
              { src: '../gallery-viewer/images/project17/Ventes.PNG', description: 'Result of data' },
              { src: '../gallery-viewer/images/project17/Temps.PNG', description: 'divide date to month year via SSIS' },
              { src: '../gallery-viewer/images/project17/Produit.PNG', description: 'Result of  product data' },
              { src: '../gallery-viewer/images/project17/Client.PNG', description: 'Result of customer data' },
              // Add more image objects as needed
          ]
      },
      project21: {
        title: "Text Summarization Using Natural Language Processing (NLP)",
        technologies: "NLP,python,pandas",
        description: "For a scholarship project, the goal is to develop a system that takes an input text and processes it using various Natural Language Processing (NLP) techniques such as stemming, lemmatization, and others. The system will then analyze the text to identify key phrases and assign weights to these phrases. Finally, it will generate a concise summary (resume) of the original text.",
        githubLink: "https://github.com/mednour2019/taln-resume.git",
        keyFeatures: [
            {
                "title": "Reading File in Python",
                "description": "Load and read the input text file using Python."
              },
              {
                "title": "Regular Text Substitution",
                "description": "Replace special characters in the text with spaces to standardize the input."
              },
              {
                "title": "Split Sentences",
                "description": "Divide the text into individual sentences for easier processing."
              },
              {
                "title": "Tokenization of Words",
                "description": "Break down sentences into individual words (tokens)."
              },
              {
                "title": "Lemmatization of Words",
                "description": "Convert words to their base or root form using lemmatization."
              },
              {
                "title": "Frequency Calculation of Words",
                "description": "Calculate the frequency of each word in the text."
              },
              {
                "title": "Scoring of Each Word",
                "description": "Assign a score to each word based on its frequency and importance."
              },
              {
                "title": "Weight of Sentences",
                "description": "Calculate the weight of each sentence based on the scores of the words it contains."
              },
              {
                "title": "Identify Most Frequent Sentences",
                "description": "Select the most important sentences based on their weights."
              },
              {
                "title": "Final Result: Summary Text",
                "description": "Generate the final summary (resume) of the text using the most important sentences."
              }
        ],
        images: [
            { src: '../gallery-viewer/images/project21/1.origintext.PNG', description: 'Read text' },
            { src: '../gallery-viewer/images/project21/2.cleaniing.PNG', description: 'regular expression' },
            { src: '../gallery-viewer/images/project21/3.TransfSentBySpacy.PNG', description: 'Divide text in sentences' },
            { src: '../gallery-viewer/images/project21/4.SplitSentce.PNG', description: 'split sentences' },
            { src: '../gallery-viewer/images/project21/5.wordsspacy.PNG', description: 'split to words' },
            { src: '../gallery-viewer/images/project21/6.lemma.PNG', description: 'lemmatization' },
            { src: '../gallery-viewer/images/project21/7.frequencisWord.PNG', description: 'frequencies words' },
            { src: '../gallery-viewer/images/project21/8.scoreeachword.PNG', description: 'score of each words' },
            { src: '../gallery-viewer/images/project21/10.heightsenteces.PNG', description: 'weight of each sentence ' },
            { src: '../gallery-viewer/images/project21/11.top5frequencies.PNG', description: 'most frequent sentences' },
            { src: '../gallery-viewer/images/project21/12FinalResult.PNG', description: 'final result' },

            // Add more image objects as needed
        ]
    },
    project23: {
        title: "Within-Pain: A Short Film",
        technologies: "Imagination and Mental Visualization , Scripting , Search for Emotions",
        description: "Within-Pain is a short film that revolves around the life of a person named Hedi, who is deeply affected by the mysterious loss of his father. The story is told through flashbacks, showcasing Hedi's time studying at the university and the subsequent impact on his life. The father, though never visualized in the film, is a constant presence through the narrative of absence and loss. The film delves into Hedi's suffering and the social challenges he faces, painting a poignant picture of grief and resilience",
        githubLink: "https://github.com/mednour2019/within-pain-script-art.git",
        keyFeatures: [
            {
                "title": "Avoiding Social Interaction Period (2018)",
                "description": "During 2018, I avoid talking to people during period  and prefer to be alone, focusing on scripting with deep emotional engagement."
              },
              {
                "title": "Emotional and Affective Target Objectives",
                "description": "Craft the film with a strong emotional and affective target, aiming to deeply resonate with the audience."
              },
              {
                "title": "Design in Excel",
                "description": "Plan and organize the film's structure and scenes using Excel for better clarity and management."
              },
              {
                "title": "Presentation to Centers for Collaboration",
                "description": "Present the project to various centers to seek collaboration and share the workload due to cost constraints."
              },
              {
                "title": "Conception of a Numeric Application",
                "description": "Develop a digital application to enhance the experience of managing and visualizing scenes and events."
              },
              {
                "title": "Organizing a Cinema Club",
                "description": "As the president of the ultra cinema club at the university, organize events and DJ sessions to raise funds for the film."
              },
              {
                "title": "Event Management and Fundraising",
                "description": "Despite some events not being successful, continue to develop an application to manage these activities more effectively."
              },
              {
                "title": "Aim for the Best Short Film",
                "description": "With persistent effort and development, aim to create the best short film ever when the time is right."
              }
        ],
        images: [
            { src: '../gallery-viewer/images/project23/1.jpg', description: 'Anarchy Art: Paper Scripting' },
            { src: '../gallery-viewer/images/project23/2.JPG', description: 'Managing Scripts: Words, Scenes, and More' },
            { src: '../gallery-viewer/images/project23/3.JPG', description: 'Managing scripts KPIs in Excel: Tracking and Analysis' },
            { src: '../gallery-viewer/images/project23/4.JPG', description: 'identify scenes details in Excel' },
            { src: '../gallery-viewer/images/project23/5.jpg', description: 'From Conception to Decision: Automated Script Management' },
            { src: '../gallery-viewer/images/project23/6.jpg', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/7.jpg', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/8.jpg', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/9.jpg', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/10.PNG', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/11.PNG', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/12.png', description: 'moon-light' },
            { src: '../gallery-viewer/images/project23/44.jpg', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/111.jpg', description: 'A Photographic Journey' },
            { src: '../gallery-viewer/images/project23/5555.jpg', description: 'A Photographic Journey' },

            // Add more image objects as needed
        ]
    }
      // Add more gallery projects here as needed
  };

  function loadProjectDetails(project) {
      document.getElementById("project-title").textContent = project.title;
      document.getElementById("project-technologies").textContent = "Technologies: " + project.technologies;
      document.getElementById("project-description").querySelector("p").textContent = project.description;
      document.getElementById("github-link").href = project.githubLink;

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
