export const hero = {
  name: "Matthew Hernandez",
  about:
    "I've been a programmer for 6+ years, currently specializing in Web3, Solidity after enough experience in React.js, Node.js and other relevant skills. Furthermore, I have a passion for learning new skills, and I'm extremely dedicated to my work with crazy & creative ideas by providing new solutions! Looking for a new remote position with full of challenges in a friendly team.",
  titles: ["Full Stack", "Blockchain", "Smart Contract", "Web3"],
  email: "matthewhernandez1k4#gmail.com",
  phone: "+1 224 328 1725",
  github: "https://github.com/bio1oo1",
  // linkedin: "https://www.linkedin.com/in/Matthew-masaki/",
  linkedin: "",

  // resume: "https://drive.google.com/file/d/1hyohX5tqKm4P-7xoMc3UIblxw3mQ-ugF/view?usp=sharing",
  resume: `https://drive.google.com/file/d/1XbrLGEc8vYUIG8lmjSWIjSw2b-F3YfQB/view?usp=sharing`
  // resume: "",

};

export const workExperience = [
  {
    id: 1,
    date: "05/2024 - 05/2025",
    role: "Full-Stack & Blockchain Engineer",
    company: "Azumo",
    description: `Developed a responsive web application that significantly improved user experience, resulting in a 20% increase in mobile traffic || Architected and developed highly complex smart contracts for a whole NFT ecosystem that includes presale and public sale, whitelist, reward system, NFT sales and rent, and P2E games with Solidity, Hardhat or Foundry.\n\n- Implemented NFT stash and swap features that allow the players to stash their NFTs for a range of days and get on-chain tier and in-game benefits, and trade NFTs on a 1:1 basis, paying different fees according to the stashing tier.\n\n- Collaborated with fullstack developers to integrate smart contracts with the dapps leveraging Ethers.js, Wagmi, Viem, RainbowKit, etc.\n\n- Built several smart contracts with different features, such as the extension of the ERC3525 semi-fungible token standard, random number generation using Solidity and Foundry framework.\n\n- Implemented important logic in P2E games to extend the ERC4907 (NFT rental) standard and enable split profits between owner, borrower, and third parties, and developed a smart contract using Beacon Proxy that deploys the profit share given an ERC721 regular NFT.\n\n- Increased the performance of 20 customer-facing webpages and increased revenue by 40%.\n\n- Constructed a Subgraph indexer to efficiently query and manage data on the blockchain, ensuring smooth data retrieval and analysis, and developed custom index service using Nest.js, Prisma or TypeORM, PostgreSQL, REST API, Ethers.js, to structure and store on-chain data.`,
  },
  {
    id: 2,
    date: "11/2015-08/2019",
    role: "Full Stack Engineer",
    company: "ITVibes",
    description: `- Revamped government CRM systems using diverse programming platforms, enhancing efficiency and functionality to meet evolving requirements.\n\n- Developed an e-commerce platform for Mini-PCs utilizing React.js, Express.js, Bookshelf.js, and PostgreSQL, delivering a seamless shopping experience for customers.\n\n- Led the development of high-level IoT applications, leveraging Arduino (ESP-8266 & ESP-32 with C++) for device integration and React.js, Node.js, and PostgreSQL for robust web-based control and monitoring systems.\n\n- Created IoT Monitoring Systems using Express.js and React.js, providing real-time insights into IoT device performance and status.\n\n- Designed and implemented Shipping Systems (GIS projects) using React.js, Mapbox, and PostGIS, optimizing logistics operations through geospatial data analysis and visualization.\n\n- Integrated websites with License Plate Recognition Systems using Node.js, enabling automated identification and tracking of vehicles for enhanced security and surveillance applications.`,
  },
  {
    id: 3,
    date: "04/2014 - 11/2015",
    role: "Frontend Developer",
    company: "SmartProIT",
    description: `- Designed and implemented CRM solutions for companies utilizing React.js, enhancing user experience and streamlining business operations.\n\n- Participated in the development of visually captivating Panorama websites, leveraging the power of React.js to create immersive online experiences.\n\n- Contributed to the creation of a cutting-edge web animation-to-video rendering platform, employing GSAP, FFmpeg, and Node.js to deliver dynamic content generation capabilities.\n\n- Examined and optimized front-end Javascript codebase, enhancing performance and reducing load times by 15%. Implemented real-time chat functionality using Web Sockets, Laravel Queue, Pusher, Laravel Echo, cron jobs, and integrated Twilio for SMS, Stripe for payments, and email notifications, etc`,
  },
];

export const projectTags = ["All", "NFT", "DEX", "Betting"];

export const projects = [
  {
    id: 1,
    link: "https://mint.toonlands.com/",
    name: "Toonlands NFT Mint",
    description:
      "Toonlands Metaverse NFT Collection; Mint dapp for presale and public sale of the NFTs with whitelist and rewards system.",
    imgs: [
      "/images/projects/toonlands_mint/toonlands_mint_1.png",
      "/images/projects/toonlands_mint/toonlands_mint_2.png",
    ],
    techStacks: [
      "React.js",
      "TypeScript",
      "Web3 Modal",
      "Ethers.js",
      "Solidity",
      "Hardhat",
      "Express.js",
      "Digital Ocean",
    ],
  },
  {
    id: 2,
    link: "https://toonlands.com/",
    name: "Toonlands App",
    description:
      "Toonlands dapp where users can explore Toonlands NFT, view statistics, create Raffle, stake or swap tokens, etc.",
    imgs: [
      "/images/projects/toonlands_app/toonlands_app_1.png",
      "/images/projects/toonlands_app/toonlands_app_2.png",
      "/images/projects/toonlands_app/toonlands_app_3.png",
      "/images/projects/toonlands_app/toonlands_app_4.png",
    ],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Wagmi",
      "Viem",
      "Nest.js",
      "PostgreSQL",
      "Subgraph",
      "Solidity",
    ],
  },
  {
    id: 3,
    link: "https://fireflydex.io/",
    name: "Firefly DEX",
    description:
      "Decentralized exchange on Manta chain where users can create pools and exchange between tokens.",
    imgs: [
      "/images/projects/fireflydex/fireflydex_1.png",
      "/images/projects/fireflydex/fireflydex_2.png",
      "/images/projects/fireflydex/fireflydex_3.png",
      "/images/projects/fireflydex/fireflydex_4.png",
    ],
    techStacks: [
      "React.js",
      "TypeScript",
      "Redux",
      "Ethers.js",
      "Subgraph",
      "GraphQL",
      "Solidity",
      "Hardhat",
    ],
  },
  {
    id: 4,
    link: "https://www.tideprotocol.xyz/",
    name: "Tide Protocol",
    description:
      "Enables users to launch Web3 point-based community campaigns and embed them into websites.",
    imgs: [
      "/images/projects/tideprotocol/tideprotocol_1.png",
      "/images/projects/tideprotocol/tideprotocol_2.png",
      "/images/projects/tideprotocol/tideprotocol_3.png",
      "/images/projects/tideprotocol/tideprotocol_4.png",
      "/images/projects/tideprotocol/tideprotocol_5.png",
    ],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Ethers.js",
      "Nest.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 5,
    link: "https://app.rolla.fi/",
    name: "Rolla Fi",
    description:
      "Crypto price prediction platform for users to earn profit depending on their binary option on the price provided by Pyth Network oracle.",
    imgs: [
      "/images/projects/rolla/rolla_1.png",
      "/images/projects/rolla/rolla_2.png",
    ],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Redux",
      "SCSS",
      "Ethers.js",
      "Pyth Network",
      "Onramp",
      "AWS",
    ],
  },
  {
    id: 6,
    link: "https://app.vertexprotocol.com/",
    name: "Vertex Protocol",
    description:
      "Orderbook DEX on Arbitrum One network with features like perpetual and spot trading, VRTX staking, etc.",
    imgs: [
      "/images/projects/vertex/vertex_1.png",
      "/images/projects/vertex/vertex_2.png",
      "/images/projects/vertex/vertex_3.png",
      "/images/projects/vertex/vertex_4.png",
      "/images/projects/vertex/vertex_5.png",
    ],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Wagmi",
      "Web3 Modal",
      "REST API",
      "Nest.js",
      "Solidity",
      "Hardhat",
    ],
  },
  {
    id: 7,
    link: "https://orium.network/",
    name: "Orium Network",
    description:
      "Collateral-free marketpalce for renting NFTs by providing incentives for lenders.",
    imgs: [
      "/images/projects/orium/orium_1.png",
      "/images/projects/orium/orium_2.png",
      "/images/projects/orium/orium_3.png",
      "/images/projects/orium/orium_4.png",
    ],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Charkra UI",
      "Wagmi",
      "Web3 Modal",
      "Subgraph",
      "GraphQL",
      "Solidity",
      "Foundry",
    ],
  },
  {
    id: 8,
    link: "https://blinkit.com/",
    name: "Grofers",
    description:
      "Delivers groceries and essentials with real-time inventory and ultra-fast, seamless user experience.",
    imgs: [
      "/images/projects/blinkit/blinkit_1.png",
      "/images/projects/blinkit/blinkit_2.png",
      "/images/projects/blinkit/blinkit_3.png",
    ],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "AWS",
      "Docker",
    ],
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "C#", "Solidity", "Python", "PHP"],
  frontend: [
    "HTML",
    "CSS",
    "React.js",
    "Vue.js",
    "Tailwind CSS",
    "Material UI",
    "Styled Components",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "TypeORM",
    "Prisma",
    "Sequelize",
    "FastAPI",
    "GraphQL",
    "REST API",
    "Websocket",
  ],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  blockchain: [
    "Ethereum",
    "Hardhat",
    "Foundry",
    "Web3.js",
    "Ethers.js",
    "Wagmi",
    "Viem",
    "Subgraph",
  ],
  others: [
    "Git",
    "Github Actions",
    "CI/CD",
    "AWS",
    "Docker",
    "Firebase",
    "Vercel",
    "Microsoft Azure",
    "Google Cloud",
    "Jira",
    "Figma",
  ],
};

export const clientReviews = [
  {
    id: 1,
    name: "Kanessa Muluneh",
    position: "Creative Business Builder",
    review:
      "Matthew helped me audit my NFT project and was really honest about everything. He also kept asking how everything was going and kept an eye on the project. His advise turned out to be all true. Very valuable",
    linkedin: "https://www.linkedin.com/in/kanessa-muluneh-297984b2/",
    image: "/images/clients/kanessa.jpg",
  },
  {
    id: 2,
    name: "Chad Piatek",
    position: "",
    review:
      "I can not recommend Matthew any more. He not only is an expert at his craft but I was blown away by his communication abilities, ability to teach , as well as his quickness to complete tasks and efficiency. I enjoyed my time working directly with Matthew during our project and I am looking forward for the opportunity to work with him again. He is phenomenal across the board.",
    linkedin: "https://www.linkedin.com/in/chad-piatek-795395101/",
    image: "/images/clients/chad.jpg",
  },
  {
    id: 3,
    name: "Sevgin SEN",
    position: "Founder at Supeer",
    review:
      "We worked with Philip for the smart contract of the Toonlands project. He did a very nice and clean job.",
    linkedin: "https://www.linkedin.com/in/doctorsevgin/",
    image: "/images/clients/sevgin.jpg",
  },
  {
    id: 4,
    name: "Murat Can Turgut",
    position: "Experienced CTO Entrepreneur",
    review:
      "Matthew and I worked on an NFT project, actually a gaming & metaverse ecosystem. He had written the smart contract & mint page in under 5 days. He is a great developer. I recommend him.",
    linkedin: "https://www.linkedin.com/in/muratcannnn/",
    image: "/images/clients/murat.jpg",
  },
  // {
  //   id: 5,
  //   name: "Marcè Ayala",
  //   position: "Global Workplace Innovator",
  //   review:
  //     "Matthew was very professional and amazing to work with. He was very detailed and saw the project through to the end. Very knowledgeable w/ Rust and Candy machine! Really appreciate Philip's assistance with our project!",
  //   linkedin: "https://www.linkedin.com/in/marcerayala/",
  //   image: "/images/clients/marce.jpg",
  // },
  {
    id: 6,
    name: "Kylie Ayala",
    position: "Global Creative Director",
    review:
      "Matthew was the incredibly talented dev for our 'just for fun' NFT Project, SOL Summer. Matthew is incredibly smart, and on top of current happenings. Whenever we ran into a sticky moment, Matthew trouble shot the issues and came up with strong solutions. I look forward to working with Matthew again soon, and you'll be lucky if you work with him too!",
    linkedin: "https://www.linkedin.com/in/kyliesayala/",
    image: "/images/clients/kylie.jpg",
  },
  {
    id: 7,
    name: "Shan Xu",
    position: "Founder of ratDAO",
    review:
      "Matthew is an amazing developer that's extremely dedicated to his jobs. His robust knowledge of web3 & web2 programming, along with his passion for problem solving was impressive to say the least. Matthew helped in developing complex scripts to help us generate metadata & art for RatDAO. His patience and problem solving skills also shined through on the smart contract development of our NFT mint. Matthew helped us launch a smooth, pain-free mint with zero hiccups. Aside the smart contract development, Matthew's support along the way was great. He went above and beyond for us when we needed it. I knew I could always count on him for help when brainstorming new idea's, fixing bugs and additional smart contract development. I highly recommend Matthew as he's a dedicated & passionate problem solver to have on your team.",
    linkedin: "https://www.linkedin.com/in/shan-xu88/",
    image: "/images/clients/shanxu.jpg",
  },
];
