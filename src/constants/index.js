import {
    mobile,
    backend,
    creator,
    web,
    aws,
    azure,
    cpp,
    csharp,
    django,
    fastapi,
    python,
    rust,
    sql,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    philips,
    ms,
    zenskar,
    crypto,
    seismic,
    tictactoe,
    ide,
    game,
    blockchain,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
    },
    {
      title: "Learning Enthusiast",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    }
  ];

  const experiences = [
    {
      title: "Software Developer",
      company_name: "Microsoft",
      icon: ms,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Creating JavaScript modules for precise user telemetry, optimizing Copilot",
        "Expertise in API Gateways, Azure Cloud and DevOps, CosmosDB, and SQL",
        "Developing C# ASP.NetCore Services for Internal Teams and insights into MSCommerce customers.",
        "Collaborating with cross-functional teams including designers, product managers, and other SDEs to create high-quality products.",
      ],
    },
    {
      title: "Founding Engineer",
      company_name: "Zenskar",
      icon: zenskar,
      iconBg: "#ffffff",
      date: "Dec 2022 - May 2023",
      points: [
        "Worked on the backend of the billing system utilizing FastAPI and DynamoDB",
        "Developed complex pricing model nodes using AWS Lambda and Step functions",
        "Utilized CWL to make pricing nodes independent, but compatible with each other",
        "reated a Contract Template Builder using ReactFlow for customers",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Microsoft",
      icon: ms,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Implemented a Monitoring System on Azure DevOps Data for Cloud And AI Team",
        "Experimented on multiple data models to parse Azure Cloudmine Cluster data",
        "Added PowerBI and Kusto API calls for real-time data monitoring",
      ],
    },
    {
      title: "ML Research Intern",
      company_name: "Philips",
      icon: philips,
      iconBg: "#E6DEDD",
      date: "May 2021 - July 2021",
      points: [
        "Reviewed literature on different market solutions for federated data lake indexing",
        "Implemented HAPI JPA Generic Client REST API using Jetty and docker",
        "Proposed an indexing schema in PostgreSQL for FHIR, DICOM, and Blob data",
      ],
    },
  ];

  const projects = [
    {
      name: "Binance Trading Bot",
      description:
        "An automated trading bot built using WebSockets, TA-Lib, and Binance API, that executes Ethereum trades based on the RSI indicator and tweakes strategy to optimise.",
      tags: [
        {
          name: "websockets",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "binanceAPI",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/adarsh0raj/CryptoTradingBot",
    },
    {
      name: "Anti Tic Tac Toe",
      description:
        "Encoded the game of anti tic tac toe as a Markov Decision Problem and solved using different RL algorithms and obtained optimal strategies for both players.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "reinforcement learning",
          color: "green-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/adarsh0raj/fila-labs/tree/master/lab2/submission",
    },
    {
      name: "Online IDE",
      description:
        "Created a multi-language web IDE using Angular, utilizing shell scripting for user code compilation and execution, with backend in PHP and MySQL.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: ide,
      source_code_link: "https://github.com/adarsh0raj/OCDE-ssl",
    },
    {
      name: "3D Seismic Visualizer",
      description:
        "An interactive visual representation tool for subsurface geology by creating 3D images of seismic volumes for interpreting horizons, identifying fault planes, etc.",
      tags: [
        {
          name: "mayavi",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "shell",
          color: "pink-text-gradient",
        },
      ],
      image: seismic,
      source_code_link: "https://github.com/rajagond/AE6102_sifar",
    },
    {
      name: "BlockChain Simulator",
      description:
        "Implemented discrete-event simulator of a P2P cryptocurrency network with transactions and block forwarding, along with simulating selfish and stubborn mining attacks.",
      tags: [
        {
          name: "web3",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "blockchain",
          color: "pink-text-gradient",
        },
      ],
      image: blockchain,
      source_code_link: "https://github.com/adarsh0raj/",
    },
    {
      name: "C++ Game Engine",
      description:
        "Created a C++ game engine enabling player-controlled object movement and addition of new objects using a blueprint class, along with an abstracted layer.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "gamedev",
          color: "green-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/adarsh0raj/",
    },
  ];

  export { services, technologies, experiences, projects };