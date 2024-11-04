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
      description:
        "A psychotherapy application that allows psychotherapists and their secretaries to manage appointments, patient information, consultation details, prescription records, invoices, and statistics. Patients can also book appointments remotely through an online interface.",
      videoSrc:
        "https://drive.google.com/file/d/13MBAs9ZqScgba9Km3ZlpzFgKOcD-injP/preview",
      githubLink:
        "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [
        {
          title: "Login Interface",
          description:
            "Secure login interface for both psychotherapists and secretaries.",
        },
        {
          title: "Patient Interface",
          description:
            "Add, delete, and update patient information with detailed records.",
        },
        {
          title: "Appointment Management",
          description:
            "Status management for appointments: pending, rejected, verified.",
        },
        {
          title: "Consultation Interface",
          description:
            "Displays appointments with a status of accepted for the current day.",
        },
        {
          title: "Prescription Management",
          description:
            "Each prescription is linked to a patient with follow-up details and validity date.",
        },
        {
          title: "Invoice Management",
          description:
            "Generate invoices for one or multiple consultation, and option to download invoices.",
        },
        {
          title: "Dashboard with Statistics",
          description:
            "Displays statistics such as profit, number of consultations, etc.",
        },
      ],
    },
    project3: {
      title: "Udemy Module Student App",
      technologies:
        " Angular, HTML , CSS ,TypeScript ,Angular Material ,.NET Core Web API , LINQ , Entity Framework (Code First) , SQL Server , MVC , C#",
      description:
        "In this course, I learned how to create a data table connected to a .NET Core Web API. I gained hands-on experience in building and structuring APIs securely, with a focus on implementing control validation. By the end of the course, I became proficient in developing robust and secure web applications using .NET Core.",
      videoSrc:
        "https://drive.google.com/file/d/1bfgjA4MROwlx81mD5bBFyaJb6TTOa81p/preview",
      githubLink: "https://github.com/mednour2019/udemy-students-app.git",
      keyFeatures: [
        {
          title: "Structured .NET Core Web API Project",
          description:
            "Implement a well-organized project structure with services, repositories, controllers, Swagger documentation, scoped interfaces, and models.",
        },
        {
          title: "API Testing via Swagger",
          description:
            "Utilize Swagger to test and document API endpoints effectively.",
        },
        {
          title: "Control Validation",
          description:
            "Implement robust validation controls within API to ensure data integrity and security.",
        },
        {
          title: "Image Photo Structure with Control Validation",
          description:
            "Manage and validate image uploads and storage within application.",
        },
        {
          title: "Create Structured Angular Project",
          description:
            "Develop a well-structured Angular project to interact with .NET Core Web API.",
        },
        {
          title: "Data Table with CRUD Operations",
          description:
            "Implement a data table with features including adding, editing, removing entries, and an integrated image editor.",
        },
      ],
    },
    project4: {
      title: "Doctor Specialities Module Application",
      technologies:
        ".Net core,Razor,HTML,CSS,LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "This technical test involves creating a module to manage doctor specialities and doctor information. You will implement CRUD operations and control validation for both the specialities and doctor tables. Additionally, the module should support adding and managing doctor photos.",
      videoSrc:
        "https://drive.google.com/file/d/1MI2mnB9wiuAdBZFWW9OrggwQUJ2XAw1v/preview",
      githubLink:
        "https://github.com/mednour2019/MedicalSystem.git",
        keyFeatures: [
          {
            title: "Data Table for Doctors with CRUD Operations",
            description:
              "Implement a data table for managing doctor information, including Create, Read, Update, and Delete operations.",
          },
          {
            title: "Data Table for Doctor Specialities",
            description:
              "Create a data table for managing doctor specialities and assign each doctor to their respective specialities.",
          },
          {
            title: "EF Code First and Project Structure",
            description:
              "Manage the code using Entity Framework Code First approach and ensure a well-structured .NET project with all necessary route configurations.",
          }
         
          
        ],    },
    project5: {
      title: "OLAP Cube Dispatcher Tool",
      technologies:
        ".net web framework , WPF , MVVM , SQl server , Excel , Analysis services , Metro Framework, C# , ",
      description: "The OLAP Cube Dispatcher Tool is designed to simplify the process for account managers to connect to SQL Server and generate OLAP cubes through an intuitive interface. This tool eliminates the need for SSAS Analysis Services, making it accessible to data engineer managers without extensive training or expensive resources. Account managers can easily select analysis axes, measures, create calculations, generate OLAP cubes, and dispatch them, providing full access to the generated data.",
      videoSrc:
        "https://drive.google.com/file/d/1T0w5kwAc12YWU1IaOkdl4FAMsrnfpuOh/preview",
      githubLink:
        "https://github.com/mednour2019/devolap.git",
        keyFeatures: [
          {
            title: "Connect SQL Server Interface",
            description:
              "Easy-to-use interface for connecting to SQL Server.",
          },
          {
            title: "Select Server and Data Warehouse Star Schema",
            description:
              "Choose the server and the desired data warehouse star schema for analysis.",
          },
          {
            title: "Select Dimensions and Facts",
            description:
              "Select the dimensions and facts needed for your work.",
          },
          {
            title: "Choose Measures with Functions",
            description:
              "Select measures and apply functions such as sum, average, and count.",
          },
          {
            title: "Generate OLAP Cube",
            description:
              "Generate the OLAP cube based on your selections.",
          },
          {
            title: "Create Calculations Interface",
            description:
              "Create calculations (e.g., KPI) using a user-friendly interface (e.g., measure1 * measure2).",
          },
          {
            title: "Test OLAP Cube via Excel",
            description:
              "Verify the OLAP cube by testing it in Excel.",
          },
          {
            title: "Manage Calculations on Existing Cubes",
            description:
              "Manage and update calculations on existing OLAP cubes.",
          },
          {
            title: "Dispatch Cube Structure",
            description:
              "Dispatch the cube structure to other data sources without needing to recreate the interface for generating OLAP cubes.",
          },
        ],    },
    project6: {
      title: "MDX QUERY BUILDER",
      technologies:
        " .net web framework , MVVM , LINQ , Entity Framework (database First) , kendo ui  jquery , SQL Server , C# , MDX , Analysis services , olap cube , sql server profiler, HTML , Bootstrap , CSS , java script , jquery",
      description: "The MDX Query Builder connects to a .NET API to consume OLAP cubes. It allows users to choose servers, dimensions, analysis axes, and measures, and to create dynamic pivot tables and reports easily. This tool optimizes report generation time and provides fast-speed visualization insights for more efficient data analysis.",
      videoSrc:
        "https://drive.google.com/file/d/15L7GpwoOsXmea4n49E4TOZVVV1smR5CS/preview",
      githubLink:
        "https://github.com/mednour2019/mdx-query-builder.git",
      keyFeatures: [
        {
          "title": "Login",
          "description": "Access the application through a secure login interface."
        },
        {
          "title": "Connect to Server",
          "description": "Easily connect to a .NET API to consume OLAP cubes."
        },
        {
          "title": "Navigate Complex Data",
          "description": "Divide data into subjects to simplify navigation and analysis."
        },
        {
          "title": "Choose Measures and Calculations",
          "description": "Select measures and create calculations (KPIs) for your analysis."
        },
        {
          "title": "Configure Report Layout",
          "description": "Decide where to place measures and calculations in rows, columns, or filters for easy reporting."
        },
        {
          "title": "Generate Reports",
          "description": "Generate comprehensive reports based on your chosen measures and layout."
        },
        {
          "title": "Visualize Data with Charts",
          "description": "Consume reports in various chart visualizations for better insights."
        },
        {
          "title": "Save and Reconsult Reports",
          "description": "Save reports in the database and reconsult them without creating new ones."
        },
        {
          "title": "Share Reports with Users",
          "description": "Share reports with users on the platform through a single login interface."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project7: {
      title: "TitnaShop CMS: OpenCart Car Parts Store",
      technologies:
        "cms , open cart : titanshop , html , css , jquery , php ,module integration and  configuration , java script ",
      description: "This freelance project, conducted on the Mostaqel platform, involved creating an online store for selling car parts, inspired by other successful web stores. The customer required a CMS-based solution, so I purchased the OpenCart TitnaShop CMS for them. I configured the CMS and customized the CSS design to match existing sites on the internet. Additionally, I integrated necessary modules to enhance the store's functionality.",
      videoSrc:
        "https://drive.google.com/file/d/1CvrL_ZkW2eHticMD9S1U-H3EqZckq9-R/preview",
      githubLink:
        "https://github.com/mednour2019/cms-open-cart.git",
      keyFeatures: [
        {
          "title": "Install and Configuration of CMS",
          "description": "Install and configure the OpenCart TitnaShop CMS to meet the client's requirements."
        },
        {
          "title": "Custom CSS Design",
          "description": "Design and customize CSS modules according to the customer's preferences."
        },
        {
          "title": "Admin Panel Configuration and RTL/Arabic Integration",
          "description": "Configure the admin panel and integrate RTL (Right-to-Left) and Arabic language modules."
        },
        {
          "title": "Integration of Customized Modules",
          "description": "Integrate and customize additional modules to enhance the store's functionality."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project8: {
      title: "RentHouse: Web Application for Property Rentals",
      technologies:
        "Angular, HTML , CSS , Bootstrap ,type script, java , spring boot , swagger, mysql,",
      description: "RentHouse is a web application designed for managing property rentals. It allows users to manage individuals responsible for house guarding, buildings (immeubles), houses, rental contracts, and house states. This educational application was developed based on a project demand by a professor at a faculty",
      videoSrc:
        "https://drive.google.com/file/d/1cm9uGlYPSqD5W1OKuESgLhZq5PN1laVV/preview",
      githubLink:
        "https://github.com/mednour2019/Angular-House-Rent.git",
      keyFeatures: [
         {
    "title": "Manage House Guarding Personnel",
    "description": "Efficiently manage individuals responsible for guarding houses."
  },
  {
    "title": "Manage Property Owners",
    "description": "Handle information related to property owners and their respective houses."
  },
  {
    "title": "Manage Buildings",
    "description": "Organize and manage buildings with unique IDs and names."
  },
  {
    "title": "Manage Houses",
    "description": "Administer houses within each building, including price and description."
  },
  {
    "title": "Manage Contracts",
    "description": "Oversee contracts related to property ownership and house rentals."
  },
  {
    "title": "Manage House States",
    "description": "Keep track of the state and condition of each house."
  }
      ], // Ensure keyFeatures exists, even if empty
    },
    project9: {
      title: "COVID Management Application",
      technologies:
        "c# , .net framework WPF , Mongo db , Metro framework",
      description: "This COVID Management Application is a scholarship project proposed by me during this academic year, which was particularly impacted by the COVID-19 pandemic. Although the professor only required a MongoDB database application, I chose to focus on COVID-19. The application is designed to manage users with COVID-19, track the disease's spread, and provide statistics by city. It also manages the status of individuals (dead, not dead, test positive, negative) and generates statistical charts.",
      videoSrc:
        "https://drive.google.com/file/d/1zf7uXrtPFrbFr2jJjmS3gzc6--dOtXIS/preview",
      githubLink:
        "https://github.com/mednour2019/covid.git",
      keyFeatures: [
        {
          "title": "Login Interface",
          "description": "Secure login interface for accessing the COVID management application."
        },
        {
          "title": "Patient Management",
          "description": "Efficiently manage and track patients with COVID-19, including their status and test results."
        },
        {
          "title": "City-Based Patient Statistics",
          "description": "Provide city-specific statistics to better understand the impact of COVID-19 in different areas."
        },
        {
          "title": "COVID Test Results and Statistics",
          "description": "Track and generate statistics on COVID-19 test results, including positive and negative cases, with statistical curves."
        },
        {
          "title": "Final Patient Outcome",
          "description": "Monitor and provide statistics on patient outcomes, including deceased and recovered, categorized by city and gender."
        }
      ]
      , // Ensure keyFeatures exists, even if empty
    },
    project10: {
      title: "Customer Loan Book Module for Odoo",
      technologies:
        "Oddo configuration",
      description: "A scholarship project where I chose to manage a subject in an ERP system. I selected Odoo to design and implement a module that allows customers to borrow books and manage the process efficiently.",
      videoSrc:
        "https://drive.google.com/file/d/1Dr8GtRqQIjtbFhchMKxCB67q_VYz1PEs/preview",
      githubLink:
        "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [
        {
          "title": "Connect to Odoo",
          "description": "Establish a connection to the Odoo ERP system for seamless integration."
        },
        {
          "title": "Conceptual Design",
          "description": "Create a detailed conceptual design for the book loan management module."
        },
        {
          "title": "Create Entities in Odoo",
          "description": "Develop entities in Odoo for book loans, including customer details such as CIN, name, ID, and more."
        },
        {
          "title": "Visualize Module Execution",
          "description": "Execute the designed module and visualize its functionality within the Odoo system."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project11: {
      title: "Quality Analysis Application",
      technologies:
        "Angular, HTML, CSS, Kendo UI, TypeScript, JavaScript, jQuery, .NET Core Web API, LINQ, Entity Framework (Code First), SQL Server, MVC, C#",
      description: "The Quality Analysis Application allows users to easily manage data visualization in reports and offers drag-and-drop chart options similar to Power BI, including bar charts, stacked charts, line charts, and pie charts. Users can also download data in Excel format. The application provides detailed descriptions of entities and KPIs for comprehensive quality analysis.",
      videoSrc:
        "https://drive.google.com/file/d/1kvsUQj3V6d-x7XztU-rO1BsfQeoOkbvO/preview",
      githubLink:
        "https://github.com/mednour2019/reporting-cus-front.git",
      keyFeatures: [
        {
          "title": "Login",
          "description": "Secure login interface for accessing the Quality Analysis Application."
        },
        {
          "title": "Choose KPI",
          "description": "Select key performance indicators (KPIs) for analysis and reporting."
        },
        {
          "title": "Create Report",
          "description": "Generate comprehensive reports based on selected data and KPIs."
        },
        {
          "title": "Manage Charts",
          "description": "Easily drag and drop various chart types, including bar, stacked, line, and pie charts, for data visualization."
        },
        {
          "title": "Save Report",
          "description": "Save generated reports for future reference and analysis."
        },
        {
          "title": "Historical and Descriptive Notes",
          "description": "Add historical and descriptive notes to dimensions and measures for detailed context."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project12: {
      title: "Blockchain Ganache Smart Contract",
      technologies:
        "solidity , Remix - Ethereum IDE , ganache , truffle suite",
      description: "A scholarship project guided by a professor, focused on creating smart contracts using Solidity and the Ganache Ethereum environment. The project aims to develop and deploy smart contracts for blockchain applications.",
      videoSrc:
        "https://drive.google.com/file/d/1vP7gcX3KLhS7XIoTql2c86n25SjRy82j/preview",
      githubLink:
        "https://github.com/mednour2019/psychotherapie-applicationn.git",
      keyFeatures: [
        {
          "title": "Create Smart Contract with Solidity",
          "description": "Develop smart contracts using Solidity in the smartcontract.sol environment."
        },
        {
          "title": "Connect to Ganache Account",
          "description": "Establish a connection to a Ganache account for local blockchain testing."
        },
        {
          "title": "Ether Wallet Interaction and Contract Deployment",
          "description": "Interact with the smart contract using an Ether wallet and deploy the contract to the blockchain."
        },
        {
          "title": "Utilize Truffle Suite",
          "description": "Leverage the Truffle Suite for development, testing, and deployment of Ethereum smart contracts."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project13: {
      title: "Food Data Warehouse and Data Analysis",
      technologies:
        "faker, python, sql server , sql server analysis services , excel,Reporting ",
      description: "A project focused on creating a data warehouse for Tunisian food data using Faker to generate sample data. The data is centralized into a database and organized into an OLAP cube for efficient analysis. The final step involves visualizing the data for insightful analysis and reporting",
      videoSrc:
        "https://drive.google.com/file/d/1VoeJAijYPUBYbU_54PO9nweTrmEcfGN_/preview",
      githubLink:
        "https://github.com/mednour2019/fake-DHW-Food.git",
      keyFeatures: [
        {
          "title": "Generate Data Warehouse with Faker",
          "description": "Use Python and Faker library to generate sample data for the food data warehouse."
        },
        {
          "title": "Import Data to SQL Server Database",
          "description": "Import the generated data into an SQL Server database for storage and management."
        },
        {
          "title": "Connect to SSAS and Create OLAP Cube",
          "description": "Connect to SQL Server Analysis Services (SSAS) and create an OLAP cube for data analysis."
        },
        {
          "title": "Create Customized Date Dimension",
          "description": "Design and implement a customized date dimension and relate it to the fact table."
        },
        {
          "title": "Process Cube",
          "description": "Process the OLAP cube to ensure data is up-to-date and ready for analysis."
        },
        {
          "title": "Test with Excel",
          "description": "Test the OLAP cube and data integration using Excel for initial validation."
        },
        {
          "title": "Visualize with Customized Tool",
          "description": "Use my  customized development  tool to create smooth and insightful reports for data visualization."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project14: {
      title: "Bank Data Processing and Decision-Making",
      technologies:
        "Excel,Power Bi , Sql Server, .net web framework , MVVM , html , css, jquery , linq , EF",
      description: "A project involving data from the banking field (ATB). The data is processed and related using Power BI Query Tool, followed by generating and publishing reports via Power BI Web Publisher. The project includes creating a module to manage reports with user access:",
      videoSrc:
        "https://drive.google.com/file/d/1HQccNXkQFeh6P6iXuehiwk_haR4U4IDS/preview",
      githubLink:
        "https://github.com/mednour2019/bankBi.git",
      keyFeatures: [
        {
          "title": "Process Data in Power BI",
          "description": "Utilize Power BI to process banking data for analysis and reporting."
        },
        {
          "title": "Relate Data via Query Tool",
          "description": "Use Power BI Query Tool to establish relationships within the data."
        },
        {
          "title": "Create Reports",
          "description": "Generate comprehensive reports based on processed banking data."
        },
        {
          "title": "Publish to Power BI Web",
          "description": "Publish the generated reports to Power BI Web for broader accessibility."
        },
        {
          "title": "Create Iframes",
          "description": "Embed reports into iframes for seamless integration into web applications."
        },
        {
          "title": "Develop Interface Application Module",
          "description": "Create an application module to manage report access and visualization."
        },
        {
          "title": "Admin and Agent Banking Roles",
          "description": "Define roles for admin and banking agents within the application."
        },
        {
          "title": "Admin Visualizes All Reports",
          "description": "Allow admins to visualize all reports within the application interface."
        },
        {
          "title": "Admin Creates Agents and Assigns Interfaces",
          "description": "Enable admins to create agent users and assign specific report interfaces to them."
        },
        {
          "title": "Save Users in Database",
          "description": "Store user information, including assigned interfaces, in the database."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project15: {
      title: "QlikView Communication Trends OLAP Data Analysis",
      technologies:
        "Qlik view, Mdx Query Generator for Qlik View,olap cube",
      description: "A scholarship project, as required by a professor, involves using QlikView for data analysis. The project aims to start with creating an OLAP cube to analyze communication trends. Once the OLAP cube is set up, it will be connected to QlikView via a connector to access the data. The final step involves creating visualizations and insights based on the communication trends data.",
      videoSrc:
        "https://drive.google.com/file/d/1EQ_56p41HTnX9U1LQWx8_FTDJ1Y799hG/preview",
      githubLink:
        "https://github.com/mednour2019/BiqlickView.git",
      keyFeatures: [
        {
          "title": "Connect to OLAP Cube",
          "description": "Establish a connection to the OLAP cube containing communication trends data."
        },
        {
          "title": "Manage Calculations",
          "description": "Perform and manage necessary calculations within the OLAP cube."
        },
        {
          "title": "Connect QlikView to OLAP Cube",
          "description": "Utilize an MDX query generator to connect QlikView to the OLAP cube."
        },
        {
          "title": "Create Visualizations and Interpretations",
          "description": "Develop insightful visualizations and interpretations based on the data accessed through QlikView."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project18: {
      title: "ETL Process for Licensing Data Integration",
      technologies:
        "SSIS , Excel , Sql server",
      description: "The ETL process for the licensing part involves loading Excel data into an SSIS container using a foreach loop. The data is categorized into dimension flux and fact flux, which are then visualized in a SQL Server data warehouse.",
      videoSrc:
        "https://drive.google.com/file/d/1ZC4WDS97Db8-tqDj2z4CqKd_oW2lnazb/preview",
      githubLink:
        "https://github.com/mednour2019/ssis-comms-trend.git",
      keyFeatures: [
        {
          "title": "Visualize and Process with Excel",
          "description": "Use Excel for initial visualization and processing of data."
        },
        {
          "title": "Load and Transform in SSIS",
          "description": "Load Excel data into SSIS, perform necessary transformations, and categorize data into dimension flux and fact flux."
        },
        {
          "title": "Visualize in SQL Server",
          "description": "Visualize the transformed data in a SQL Server data warehouse for comprehensive analysis and reporting."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project19: {
      title: "Power BI Visualization of CommsTrends data",
      technologies:
        "Power Bi",
      description: "The second part of the project involves visualizing communication trends data in Power BI. The process includes loading and transforming data in SSIS, followed by connecting the transformed data to Power BI. Step-by-step, the data is visualized into comprehensive reports, providing insights into communication trends.",
      videoSrc:
        "https://drive.google.com/file/d/1G7w0cDEu1P8qVCxj0WGar2lGBKJJv6l0/preview",
      githubLink:
        "https://github.com/mednour2019/ssis-comms-trend.git",
      keyFeatures: [
        {
          "title": "Step-by-Step Report Creation in Power BI",
          "description": "Guide through the process of creating detailed reports and charts in Power BI, visualizing communication trends data."
        }
      ], // Ensure keyFeatures exists, even if empty
    },
    project24: {
      title: "SudokuMaster: Interactive Solver with Smart Validation and Progress Tracking",
      technologies:
        ".NET Windows Forms , C# , MaterialSkin Manager Framework",
      description: "This Sudoku game serves as a technical test to demonstrate and enhance skills in desktop application development using .NET Windows Forms and C#. It focuses on component interaction, input validation, algorithm implementation, and data persistence.",
      videoSrc:
        "https://drive.google.com/file/d/1q6aVVlzzfTOHOE0-mghNd4WFTSHZPrbn/preview",
      githubLink:
        "https://github.com/mednour2019/Suduko-Game.git",
      keyFeatures: [
        {
          "title": "SudokuMaster",
          "description": "suggests expertise and mastery, appealing to Sudoku enthusiasts."
        },
        {
          "title": "Interactive Solver",
          "description": "highlights the game's core functionality and user engagement."
        },
        {
          "title": "Smart Validation",
          "description": "refers to the real-time input control and error prevention."
        },
        {
          "title": "Progress Tracking",
          "description": "Emphasizes the save/load feature, which allows users to track and continue their games."
        }
      ], // Ensure keyFeatures exists, even if empty
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
        listItem.innerHTML = `<strong>${index + 1}. ${
          feature.title
        }:</strong> ${feature.description}`;
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
