export const devProjects = [
  {
    id: 1,
    title: "Connect Four",
    classification: "Web development",
    tech: ["HTML, ", "CSS, ", "React "],
    img: "/assets/dev-project-thumbnails/connect-four-thumb.png",
    slug: "/connect-four",
    site: "https://mpayneii-connect-four.netlify.app/",
    github: "https://github.com/MSPayneII/FEM_Connect_Four",
    desc: "A connect four game that allows human player vs. human player gameplay (alternating turns on the same computer)",
    tldr: {
      header: "TLDR",
      body: "Built with ReactJS, this project is a connect four game that allows human player vs. human player gameplay (alternating turns on the same computer). The project was a Frontend Mentor challenge to build the game and get it as close to the provided design specs as possible. While the player vs. player version is complete, Player vs. CPU mode will be in version 2 of the project.",
    },
    behavior: {
      header: "Expected behavior",
      body1:
        "Players start on the main menu screen, where they can select a 'Player vs. Player' game or view the game rules. After selecting 'Player vs. Player,' Player 1 goes first in the first game, with the first turn alternating in subsequent rounds.",
      body2:
        "When a player wins a round, a winner modal appears, and the winning player's score is incremented by 1. Each player has 30 seconds (real-time) to take their turn. If the timer reaches zero, the other player is declared the winner, increasing their score by 1.",
      body3:
        "Clicking the 'Menu' button on the game board opens the in-game menu. In the in-game menu, players can 'Quit Game,' which directs them to the 'Main Menu,' or restart the game by clicking the 'Restart' button, resetting both player scores to zero.",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Player vs player game mode",
        "Visual game piece animation",
        "Score updates after each game",
        "Starting player alternatives every game",
        "View the game rules",
      ],
    },
    highlight1: {
      header: "Gameboard",
      body: "Utilizing the CSS pseudo-elements '::before' and '::after' allowed me to create the gameboard, which consists of a shadow layer, a layer of 42 individual cells (one for each board slot), and the top layer. I set the z-index of the top layer to one and pointer events to none. With this in place, users can click on slots on the board even though they are in the middle layer. It also creates the effect of the game pieces displaying behind the top layer of the board. See the code snippet and accompanying figure.",
    },
    highlight2: {
      header: "Piece animation",
      body: "To create the drop animation, I calculated the heights of the unplaced game piece at the top of a column and the height of the first available row. Next, I subtracted those heights to get the difference and used that information to update the game piece's drop animation using the transform and offset properties. I added a little bounce at the end of each drop to make it more realistic. Shout out to Thomas Campbell on Youtube for this animation approach.",
    },
  },

  {
    id: 2,
    title: "Audiophile E-commerce",
    classification: "Web development",
    tech: ["HTML, ", "CSS, ", "JS "],
    img: "/assets/dev-project-thumbnails/audiophile-thumb.png",
    slug: "/audiophile",
    site: "https://audiophile-ecommerce-mspayneii.netlify.app/",
    github: "https://github.com/MSPayneII/Audiophile_e-commerce",
    desc: "A multi-page e-commerce website built with a JavaScript-heavy approach",
    tldr: {
      header: "TLDR",
      body: "This project is a multi-page e-commerce website built with a vanilla JavaScript-heavy approach. The project's next step will be rebuilding with ReactJS to reduce code repetition via the use of components",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Add/remove/edit products in cart",
        "Form validation",
        "Order summary confirmation",
        "Cart management via localStorage",
        "Shipping always adds $50 to the order",
        "VAT included",
      ],
    },
    cart: {
      header: "Cart",
      body: "Building with vanilla JS was a fun challenge that took a lot of mental gymnastics for the cart functionality, specifically ensuring that the UI was always in sync with the data by updating and retrieving information every time a product was added, edited, or removed from the cart. ",
    },
  },

  {
    id: 3,
    title: "Todo App",
    classification: "Web development",
    tech: ["HTML, ", "CSS, ", "React "],
    img: "/assets/dev-project-thumbnails/todo-app-thumb.png",
    slug: "/todo-app",
    site: "https://mspayneii-todo-app.netlify.app/",
    github: "https://github.com/MSPayneII/FEM-Todo-App",
    desc: "A todo app built with ReactJS that supports drag and drop functionality and list filtering",
    tldr: {
      header: "TLDR",
      body: "This is a responsive Todo list application built with ReactJS and serves as my solution for the Todo app challenge on Frontend Mentor. For an accessible drag-and-drop list, I used React Beautiful DnD. Also, local storage is updated when data is created, updated, or deleted, ensuring the UI and data are always in sync when the list is updated.",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Drag and drop functionality",
        "Filter by all/active/complete todos",
        "Add/Remove/Update todos to the list",
        "Toggle light and dark mode",
      ],
    },
  },
  {
    id: 4,
    title: "8-Ball Fortune Teller",
    classification: "Web development",
    tech: "M.E.R.N stack",
    img: "/assets/dev-project-thumbnails/eightball-fortune-thumb.png",
    slug: "/eightball-fortune",
    site: "",
    github: "https://github.com/MSPayneII/8-ball-fortune-teller-v2",
    desc: "My Bright Paths Foundation Capstone project. A digital version of the Magic Eightball produced by Mattel",
    tldr: {
      header: "TLDR",
      body1:
        "This project is called '8-Ball Fortune Teller', a full-stack application built with M.E.R.N (MongoDB, Express, React, and Node), and is my attempt at creating a digital experience of Magic Eightball produced by Mattel.",
      body2:
        "It was my coding foundations' capstone for the Bright Paths Program coding boot camp, which ran from October 2021 - February 4th, 2022, and was split into two halves. The first eight weeks focused on coding foundations, and the latter half focused on full-stack React development specialization.",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Account login/creation with authentication",
        "Users can ask the eightball questions",
        "Receive generated answers from eightball",
        "Q&A pairings display in a user's record",
        "Session logout functionality",
      ],
    },
  },
  {
    id: 5,
    title: "Digital Office Space",
    classification: "Web development",
    client: "Chadsey Condon (CCCO)",
    img: "/assets/dev-project-thumbnails/chadsey-thumb.png",
    slug: "/digital-office-space",
    time: "4 months ( Jan2021 - Apr2021 )",
    role: "Web developer, Content gatherer",
    team: "5",
    skills: `Agile development, Coding,
    Software integration, Copywriting, 
    Survey design`,
    desc: "A UX/development project for the creation of a digital office space for a Detroit-based non-profit community organization",
    tldr: {
      header: "TLDR",
      body: "Our team partnered with the Chadsey Condon Community Organization (CCCO) to create a new digital office space to serve their better residents in the wake of the Covid-19 pandemic. CCCO is a Detroit-based nonprofit dedicated to transforming the lives of residents of the Chadsey Condon neighborhood through community engagement.",
    },
    problem: {
      header: "Problem statement",
      body: "With the onset of the COVID-19 pandemic, the Chadsey Condon Community Organization (CCCO) lost the ability to interact with its community residents through their walk-in office - a vital part of their organization that provided a one-stop destination for help and resources. After moving its organization’s services and resources entirely online, CCCO needed a complete revamping of its website to cater to the new, powerful site utility necessary for its organization to successfully move forward and grow.",
    },
    solution: {
      header: "Solution",
      body1:
        "Our team designed a new website for CCCO, which allowed them to smoothly transition their office to a virtual environment. The focus was to facilitate increased and optimal communication with their residents, reorganize their resources for easier search and navigation and incorporate new features that increase their backend efficiency and website utility.",
      body2:
        "Due to the limited resources available at Chadsey Condon and the organization’s ingrained usage of Squarespace, our team decided to continue using Squarespace, a web content management system (CMS). The workaround was to create a new website that was more user-friendly and provided an interactive digital space for users.",
    },
    agile: {
      header: "Agile",
      body: "Our team adopted an Agile development approach with evolving requirements and solutions split into sprints. We had four 2-3 week sprint cycles, with each sprint consisting of a planning and review phase with Chadsey Condon. The goal for each sprint was to identify issues and challenges to resolve and deliver a working product.",
    },
    functionality: {
      header: "Key functionality",
      items: [
        {
          icon: "/assets/undraw-svgs/undraw_chatting_re_j55r.svg",
          header: "Chat",
          body: "The Facebook-powered Live Chat feature allows Chadsey staff to quickly respond to resident questions and comments through their Facebook page",
        },
        {
          icon: "/assets/undraw-svgs/undraw_tourist_map_re_293e.svg",
          header: "Zone map",
          body: "Built using custom-created geographical maps, residents have access to information about essential landmarks within the Chadsey Condon neighborhood",
        },
        {
          icon: "/assets/undraw-svgs/undraw_filter_re_sa16.svg",
          header: "Resource filter",
          body: "Resource filtering buttons are set so residents can easily find resources they need and which category they are viewing with a visible, active state",
        },
        {
          icon: "/assets/undraw-svgs/undraw_video_call_re_4p26.svg",
          header: "Booking office hours",
          body: "Residents can book a 30 minutes virtual office hour with Chadsey Condon through Calendly software integration",
        },
        {
          icon: "/assets/undraw-svgs/undraw_voice_assistant_nrv7.svg",
          header: "Translation",
          body: "The new site translations utilize the power of Google Translate to deliver website translations directed toward the target demographic of Chadsey Condon residents",
        },
        {
          icon: "/assets/undraw-svgs/undraw_notify_re_65on.svg",
          header: "Report Activities",
          body: "The reporting feature allows residents to notify Chadsey Condon of many issues ranging from potholes to illegal dumping around the neighborhood",
        },
        {
          icon: "/assets/undraw-svgs/undraw_questions_re_1fy7.svg",
          header: "FAQ",
          body: "The FAQs page provides answers to common questions that residents often have, giving them an additional avenue to obtain the answers they seek",
        },
        {
          icon: "/assets/undraw-svgs/undraw_newsletter_re_wrob.svg",
          header: "Newsletter",
          body: "Service integration with Mailchimp to help Chadsey Condon manage their newsletters and keep residents updated with the latest community events",
        },
      ],
    },
  },
];
