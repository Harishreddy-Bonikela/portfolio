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
  username: "Harish Bonikela",
  title: "Hi, I'm Harish",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Angularjs and some other cool libraries and frameworks. You can contact me through any medium!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BK1VfoWQ6hEN0vdGOu4NzIZoTu-Kij2C/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const aboutMeSection = {
  title: "I specialize in creating software for clients and I absolutely love what I do!",
  subTitle: "Over the years, I've done some wonderful work for large clients, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.",
  body: "Can't wait to start collaborating? You can contact me directly and take a peek at my resume below.",
  text: "Outside of work, I like to travel, play soccer and being outdoorsy doing hiking and kayaking.",
  resumeLink:
    "https://drive.google.com/file/d/1BK1VfoWQ6hEN0vdGOu4NzIZoTu-Kij2C/view?usp=sharing", // Set to empty to hide the button
  display: true
}

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Harishreddy-Bonikela",
  linkedin: "https://www.linkedin.com/in/harish-bonikela-57496b98/",
  gmail: "harish.bonikela@gmail.com",
  medium: "https://medium.com/@harish.bonikela",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a problem solver and an enthusiastic engineer, with proven background in end to end software development.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Deep understanding and experience with all phases of SDLC and agile development methodologies"),
    emoji(
      "⚡ Translating solutions into code and working across many different APIs, third-party integrations and databases"
    )
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
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
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
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: '', //require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend and Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Testing and Debugging",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Soft Skills",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "UI Developer",
      company: "FAA",
      companylogo: require("./assets/images/faa.jpeg"),
      title: "FAA is a government agency that handles air traffic management and operation of airports.",
      desc: "Developed a high performance application Air Traffic Operations and Management System for FAA. Responsible for full-stack development to develop the product.",
    },
    {
      role: "Front-End Engineer",
      company: "Capital One",
      companylogo: require("./assets/images/capOne.png"),
      title: "Capital One Financial Corporation is an American bank holding company specializing in credit cards and banking.",
      desc: "Built a Reconciliation application for Internal Capital One Users which is used for Reconciliation of Capital One bank transactions."
    },
    {
      role: "Software Engineer",
      company: "HSBC",
      companylogo: require("./assets/images/HSBC.jpeg"),
      title: "HSBC is a British universal bank headquartered in London, England, which provides financial services to customers worldwide.",
      desc: "Worked on Login and Registration of user profile integration by colloborating with business system analysts. "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME GREAT COMPANIES WHERE I HAVE HELPED THEM TO CREATE APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/McGraw-Hill_Education.png"),
      projectName: "Connect",
      projectDesc: "McGraw-Hill is a learning science company that provides customized educational content, software, and services for pre-K through postgraduate education. Designed and built Connect app for the Inclusive Access project used across all the LMS Modules like Blackboard, Canvas and D2L. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://connect.mheducation.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/karsun-solutions.jpeg"),
      projectName: "ATOMS",
      projectDesc: "Karsun is an IT solutions company that delivers continuous enterprise modernization for its clients. Developed ATOMS Application for FAA, which is a government agency that handles air traffic management and operation of airports.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.faa.gov/air_traffic"
        }
      ]
    },
    {
      image: require("./assets/images/bill-logo.png"),
      projectName: "Bill.com",
      projectDesc: "BILL is a leading provider of cloud-based software that simplifies, digitizes, and automates back-office financial processes for small and mid-sized businesses. Created a micro-front codebase for our fintech platform and contributed to many key features for our Accountants.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bill.com/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const testimonialSection = {
  title: emoji("Testimonials 🏆 "),
  subtitle:
    "WHAT PEOPLE SAY",

  testimonialCards: [
    {
      title: "McGraw Hill",
      subtitle:
        "Harish joined us as a consulting UI developer and quickly became one of the core full stack UI engineers in a new enterprise-wide initiative involving multiple teams. He rose to the occasion and worked on multiple web / UI apps involving Angular framework. Great work ethic, and will be a good asset to any team.",
      footerTitle: "Krish Manepalli, Director"
    },
    {
      title: "McGraw Hill",
      subtitle:
        "I worked with Harish when he was one of the only two people a) maintaining a legacy Ember application,andb) Creating a new Angular (TypeScript) application to augment that legacy app.He also worked on several sub-projects, all Angular. Great work, great attitude. Highly recommended.",
      footerTitle: "Dan Roentsch, Senior Engineer"
    },
    {
      title: `Karsun
      Solutions`,
      subtitle: "Harish supported me on an UI intense, highly visible, Enterprise level application at the Federal Aviation Administration (FAA). He was one of the first engineers on the project and was instrumental in setting up the UI framework and standards. He takes pride in his work and strives to develop a good quality product.",
      footerTitle: "Sudhir Duggineni, Manager"
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
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Ready to start collaborating? My Inbox is open for all.",
  number: "+1-7033959555",
  email_address: "harish.bonikela@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  aboutMeSection,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  testimonialSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
