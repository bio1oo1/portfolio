/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Matthew hernandez",
  title: "Hi, I'm Matthew",
  subTitle: emoji(
    "A passionate Software Engineer (Full stack & Blockchain) 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bio1oo1",
  linkedin: "/",
  gmail: "matthewhernandez1k4@gmail.com",
  gitlab: "/",
  facebook: "/",
  medium: "/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/Matthew-hernandezall",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack developer with deep experience in building responsive, high-performance web applications",
  skills: [
    
    emoji(
      "⚡ Achieved a 20% increase in user engagement and a 15% reduction in page load times, alongside securing a 100% SEO score."
    ),
    emoji("⚡ Developed a booking application using React and Laravel, increasing customer acquisition and retention by 50% in three months."),
    emoji(
      "⚡ Reduced deployment time by 50% by automating CI/CD pipelines with CircleCI."
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Texas A&M University",
      logo: require("./assets/images/TAM-LogoBox.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2016 - 2020",
      desc: " Top 10% of program; completed coursework in Software Engineering, Web Security, and Operating Systems.",
      // descBullets: ["Over three decades at Southwest Airlines, he has been instrumental in transforming the airline into a prominent national brand, overseeing its expansion from a regional carrier to a major industry player."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Azumo",
      companylogo: require("./assets/images/Azumo_logo.png"),
      date: "May 2024 – May 2025",
      // desc: "Azumo.",
      descBullets: [
        "Developed a closed NFT marketplace on avalanche network using Next.js, TypeScript, C#, Nethereum and Solidity, where only verified artists can deploy series and mint NFTs.",
        "Implemented Datadog for monitoring and analytics, ensuring robust performance and quick identification of any issues.",
        "Orchestrated a blockchain infrastructure using 100֡+ nodes on AWS and Azure.",
        "Developed and deployed microservice-based applications in AWS environment, increasing system reliability by 20% with strong emphasis on maintainable code."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "ITVibes",
      companylogo: require("./assets/images/ITVibes_logo.png"),
      date: "Jul 2022 – Nov 2024",
      descBullets: [
        "Did all sorts of work such as React/Next.js app development, backend Nodejs/Postgres development, researching and investigating problem-solving technologies, as well as many devops-related GCloud, Terraform etc things.",
        "Achieved a 20% increase in user engagement and a 15% reduction in page load times, alongside securing a 100% SEO score.",
        "Examined and optimized front-end Javascript codebase, enhancing performance and reducing load times by 15%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Accenture",
      companylogo: require("./assets/images/accenture_logo.png"),
      date: "Jun 2015 – Jul 2015",
      descBullets: [
        "Developed a booking application using React and Laravel to let users book a service online and get real-time updates on their progress, increasing the customer acquisition and retention rate by around 50% in three months.",
        "Collaborated closely with designers to create clean and intuitive, responsive interfaces for web applications, utilizing various front-end libraries and techniques such as React.js, Bootstrap, MUI and so on.",
        "Implemented real-time chat functionality using Web Sockets, Laravel Queue, Pusher, Laravel Echo, cron jobs, and integrated Twilio for SMS, Stripe for payments, and email notifications, etc."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.jpg"),
      projectName: "fireflydex",
      projectDesc: "Decentralized exchange on Manta chain where users can create pools and exchange between tokens.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fireflydex.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/adsinthe.png"),
      projectName: "Tide Protocol",
      projectDesc: "Enables users to launch Web3 point-based community campaigns and embed them into websites.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tideprotocol.xyz/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Delivered Critical Features on Time",
      subtitle:
        "FSuccessfully developed and launched major features or products that improved user engagement or revenue.",
      image: require("./assets/images/deliver_feature.jpg"),
      imageAlt: "Delivered Critical Features on Time..",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Improved Application Performance",
      subtitle:
        "Optimized frontend code to reduce page load times by 30% or more.",
      image: require("./assets/images/application of performance.png"),
      imageAlt: "Improved Application Performance..",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Increased Test Coverage",
      subtitle: "Implemented automated testing frameworks that improved code reliability and reduced bugs in production by 40%.",
      image: require("./assets/images/test coverage.jpg"),
      imageAlt: "Increased Test Coverage..",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Matthewhernandez/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Matthewhernandez-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Matthew-hernandez-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's Work Together!",
  number: "+1 (224) 328 1725",
  email_address: "Matthewhernandez1k4@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection
};
