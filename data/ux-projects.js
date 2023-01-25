export const uxProjects = [
  {
    id: 1,
    title: "AV Status System",
    classification: "UX research",
    client: "Michigan Department of State",
    img: "/assets/ux-project-thumbnails/mdos-thumb.png",
    slug: "/av-status-system",
    time: "13 months ( May2020 - June2021 )",
    role: "UX researcher",
    team: "3",
    skills: `Interviews, Transcriptions, 
    Survey design, Usability testing, Report writing`,
    desc: "Established an automated email confirmation system for absentee ballot status updates in four Michigan cities & townships",
    tldr: {
      header: "TLDR",
      body: "Our team partnered with four Michigan Clerk's Offices to roll out an automated email confirmation system to notify those voters of their absentee applications and ballot status for the 2020 Presidential Election. We assessed the system's value by collecting clerk and voter feedback regarding their experience with the system. Finally, the team met with the Michigan Bureau of Elections to discuss publishing documentation on implementing the system for other Michigan clerks to adopt. The project originated during my summer internship as a Citizen Interaction Design Summer Fellow in May 2020.",
    },
    problem: {
      header: "Problem statement",
      body: "In 2020, due to the passage of the statewide ballot proposal 18-3, all eligible and registered voters in Michigan may now request an absent voter ballot without providing a reason. With existing limitations on resources and the increase in completed applications, Michigan's absentee voting system is facing increasing constraints, especially in the realm of transparency.",
    },
    discovery: {
      header: "Discovery",
      items: [
        {
          header: "Research",
          body: "From May 2020 to June 2020, our team conducted eight interviews with Michigan city and township clerks via virtual video conferencing. Each interview lasted 30-60 minutes and adhered to a semi-structured interview protocol. Additionally, our team reviewed data gathered from the Michigan Public Policy Survey (MPPS) during the spring of 2020 by the Center for Local, State, and Urban Policy (Closup).",
        },
        {
          header: "Initial findings",
          body: "There was a heavy clerk workload. Clerks were drowning in voter communications, especially addressing concerns about absentee ballots. Additionally, there needed to be more transparency in the absentee voting process. This lack of transparency caused voter anxiety/uncertainty about whether their vote had been counted.",
        },
        {
          header: "Path forward: automated email system",
          body: "Ann Arbor was already implementing an automated email system that spoke to our discovery findings: automated confirmation emails. We worked with them to understand their IT system and decided to focus on creating the tools needed to scale the solution to other cities and townships. The system needed to account for the various IT setups. Some clerk's offices had in-house IT while others outsourced to IT agencies.",
        },
      ],
    },
    validation: {
      header: "Step 1: Validation criteria",
      items: [
        {
          icon: "/assets/undraw-svgs/undraw_video_call_re_4p26.svg",
          header: "Measure",
          body: "The demand and capability of multiple clerk's offices in Michigan through interviews and a technical walk-through of their system setup",
        },
        {
          icon: "/assets/undraw-svgs/undraw_development_re_g5hq.svg",
          header: "Develop",
          body: "Business requirements, process integration, and implementation documentation",
        },
      ],
    },
    pilot: {
      header: "Step 2: Automation pilot",
      items: [
        {
          header: "Email testing",
          icon: "/assets/undraw-svgs/undraw_usability_testing_re_uu1g.svg",
          body: "Worked with clerk's offices and their information technology agencies to integrate automated email testing",
        },
      ],
    },
    implementation: {
      header: "Step 3: Implementation",
      items: [
        {
          header: "4 cities and townships",
          icon: "/assets/undraw-svgs/undraw_map_re_60yf.svg",
          body: "(Oxford twp, Northville twp, Bay City, Ferndale) Note: These clerk's offices expressed the most interest in utilizing the system, as well as having the time to help set up the configuration",
        },
      ],
    },
    assessment: {
      header: "Step 4: Assessment",
      items: [
        {
          header: "Clerks",
          icon: "/assets/undraw-svgs/undraw_profile_pic_re_iwgo.svg",
          body: "Conducted assessment interviews and surveys with all participating clerk's offices to gauge the system's value",
        },
        {
          header: "Voters",
          icon: "/assets/undraw-svgs/undraw_pic_profile_re_7g2h.svg",
          body: "Surveyed 192 voters to understand their experience and thoughts of the system",
        },
      ],
    },
    findings: {
      header: "Key findings",
      items: [
        {
          header: "Clerks",
          body: `Generally, clerks felt that the email automation saved them time that would have been spent answering the phone or email queries about the status of absentee ballots, though not all could quantify it. Ferndale came the closest, calculating that they would have spent around 314 hours answering queries without the system. Oxford estimated that the system saved them around an hour a day. 
          On average, 5% of emails sent by the clerk's offices were bounced back, with Ferndale noting, "I find that the problems are about 50/50 split between them [voters] providing an address that is either incorrect or that we could not read it correctly".`,
        },
        {
          header: "Voters",
          body: "Voters embraced the status emails. 61% of surveyed voters felt relief when they received an email update, with 97% expressing interest in receiving future status notifications. 84% of surveyed voters stated the email notification system saved them time from contacting their clerk’s office about their absentee ballot.",
        },
      ],
    },
    conclusion: {
      header: "Step 5: Michigan Bureau of Elections hand-off",
      items: [
        {
          header: "Documentation",
          icon: "/assets/undraw-svgs/undraw_typewriter_re_u9i2.svg",
          body: "Completed written report outlining system assessment",
        },
        {
          header: "Scaling",
          icon: "/assets/undraw-svgs/undraw_remote_meeting_re_abe7.svg",
          body: "Met with the Bureau of Elections to discuss the next steps in making the system available to other Michigan clerk's offices",
        },
      ],
    },

    challenges: {
      header: "Challenges",
      list: [
        "Survey participation was limited to those who actively engage with the clerk’s office (via social media)",
        "Reaching Clerks was difficult at times given the Presidential election and workload",
        "There is a month delay between Northville, Oxford, Bay City voter data and Ferndale voter data",
        "The specific time period (the stress and misinformation around the presidential election) may have contributed to a greater interest in this kind of transparency",
        "COVID restrictions increased the demand for/interest in Absentee Ballots",
      ],
    },
    takeaway: {
      header: "Personal takeaway",
      body: "Before this project, I had little knowledge of Michigan's voting system, but I learned a great deal from speaking with professionals in the voting space and hearing their stories. I respect all civil servants dedicating their lives to protecting democracy and keeping voters informed with accurate information.",
    },
  },
  {
    id: 2,
    title: "Banned Books",
    classification: "User research",
    client: "American Library Association",
    img: "/assets/ux-project-thumbnails/ala-thumb.png",
    slug: "/banned-books",
    time: "4 months ( Jan2019 - Apr2019 )",
    role: "UX researcher",
    team: "4",
    skills: `Qualtrics, Interviews, User flows, Personas, Comparative analysis, Heuristic evaluation, A/B testing, Usability testing`,
    desc: "An updated needs and usability assessment analysis of the Banned & Challenged Books website for the American Library Association",
    tldr: {
      header: "TLDR",
      body: "The Office of Intellectual Freedom of the American Library Association redesigned the Banned Books website in 2017. They wanted to ensure the redesign met users' needs by having a website that offered easy website navigation and access to frequently requested materials. Our team conducted a needs assessment and a seven-step usability evaluation of the website to understand where users experienced difficulty and provided recommendations to address those issues.",
    },
    background: {
      header: "Project background",
      body1:
        "The Banned Books website is a resource for individuals to learn about banned or challenged books and the censorship of literature. The Office of Intellectual Freedom (OIF), a department within the American Library Association, implements policies on intellectual freedom and free access to libraries and library materials and manages the website.",
      body2:
        "The Banned Books website is easily confused with Banned Books Week, a sibling website dedicated to the week-long annual and nationally hosted event organized by the OIF.",
    },
    problem: {
      header: "Problem statement",
      body: "The OIF redesigned the Banned Books website in 2017 and wants to ensure the redesign meets users' needs by providing easy website navigation and access to frequently requested materials.",
    },
    process: {
      header: "Process",
      items: [
        {
          icon: "/assets/undraw-svgs/undraw_user_flow_re_bvfx.svg",
          header: "Interaction mapping",
          body: "Illustrated multiple user pathways when navigating the website",
        },
        {
          icon: "/assets/undraw-svgs/undraw_interview_re_e5jn.svg",
          header: "User interviews",
          body: "We interviewed the appropriate user groups to discuss their general attitudes on book censorship and their opinions of the current website",
        },
        {
          icon: "/assets/undraw-svgs/undraw_analysis_re_w2vd.svg",
          header: "Competitive analysis",
          body: "We analyzed competitor websites to identify the strengths and weaknesses of the current website configuration",
        },
        {
          icon: "/assets/undraw-svgs/undraw_survey_05s5.svg",
          header: "User survey",
          body: "Distributed a 30-question survey to target a larger group of users, gathering additional data about general attitudes, knowledge, and opinions about the Banned Books website",
        },
        {
          icon: "/assets/undraw-svgs/undraw_checklist__re_2w7v.svg",
          header: "Hueristic evaluation",
          body: "Each team member performed an evaluation of the Banned Books website to identify significant usability issues from different perspectives",
        },
        {
          icon: "/assets/undraw-svgs/undraw_split_testing_l1uw.svg",
          header: "User preference",
          body: "Created a preference test for users to compare the current Banned Books landing page with a reformatted version",
        },
        {
          icon: "/assets/undraw-svgs/undraw_usability_testing_re_uu1g.svg",
          header: "Usability testing",
          body: "We performed a moderated usability test with users to understand their experience navigating the Banned Books website",
        },
      ],
    },
    findings: {
      header: "Overall findings",
      list: [
        "The navigation on the Banned Books website is not intuitive. It can be difficult for a user to decipher, which was highly evident in our Usability testing. Users expressed confusion with the navigation tabs located further down the page instead of at the top",
        "Users had difficulty navigating between the Banned Books Website and the ALA Store because 1) accessing the ALA store redirected users out of the Banned Books site into a different section of the larger ALA website, and 2) navigation breadcrumbs were not present.",
        "Users and potential users expressed interest in discussing censorship and banned books because they find the reasons why books are banned fascinating",
      ],
    },
    recommendations: {
      header: "Main recommendations",
      list: [
        "Create a visible navigation bar at the top or left side of the homepage",
        "Add a discussion section or forum to the webpage in place of 'Top 10 Most Challenged Books'. Can also Combine 'Most Challenged Books' and 'Frequently Challenged books' sections",
        "Highlight the link to the ALA Store, and warn users they are leaving the Banned Books Webpage when they click it",
        "Add a redirect link to the Banned Books website on both the ALA store and Banned Books Week landing page",
      ],
    },
    takeaway: {
      header: "Personal takeaway",
      body: "If I could go back and improve an aspect of the project, it would be the User Preference test. In hindsight, we could have done a more comprehensive test, incorporating additional pages rather than focusing solely on the landing page. We missed out on some rich information by limiting ourselves to one page.",
    },
  },
  {
    id: 3,
    title: "Audience Expansion",
    classification: "ux",
    client: "Journeys International",
    img: "/assets/ux-project-thumbnails/journeys-thumb.png",
    slug: "/audience-expansion",
    time: "4 months ( Feb2020 - Apr2020 )",
    role: "UX Researcher",
    team: "4",
    skills: `Interviews, Data Analysis, Affinity Diagramming, Report Writing`,
    desc: "A customer assessment of current and potential customers to provide recommendations for attracting a new audience for Journeys International",
    tldr: {
      header: "TLDR",
      body: "Journeys International is an adventure travel company looking to expand its business by attracting new customers. As the company pivoted to broaden its market, the goal was to understand the travel habits and preferences of individuals who could serve as a future customer base for Journeys International, specifically travel-inclined people aged 30-45. Our team conducted various user research methods and provided recommendations for attracting this audience.",
    },
    background: {
      header: "What is Journeys International?",
      body: "Journeys International is a travel agency known for its highly customized travel itineraries. Joan and Will Weber founded the company in 1978 to provide more eco-friendly and culturally respectful travel options. To this day, the company adheres to this mission. A local guide accompanies tourists on each trip, and Journeys collaborates with various non-profits to offset carbon output from air travel. Despite its small size of fewer than 20 employees, the Ann Arbor-based company has received several accolades from noteworthy publishers, including Conde Nast, Travel and Leisure, and National Geographic.",
    },
    question: {
      header: "Research question",
      body: "How do people aged 30-45 that share a similar psychologic profile to current Journeys customers make decisions in regards to adventure travel?",
    },
    process: {
      header: "Process",
      items: [
        {
          header: "Background research",
          list: [
            "Client interviews",
            "Competitive Analysis",
            "Target demographic research",
          ],
        },
        {
          header: "Interviews",
          list: ["6 non-customers", "3 customers", "1 adventure specialist"],
        },
        {
          header: "Analysis",
          list: [
            "Examine interview notes",
            "Group into themes for analysis",
            "Develop findings & recommendations",
          ],
        },
      ],
    },
    findings: {
      header:
        "Primary finding: Non-Customers have a mismatched mental model about what a Journeys experience provides",
      items: [
        {
          header: "Definition of Adventure Travel",
          body: "Journeys customers think of the term 'adventure travel' as an internal experience while non-customers view it as more of an external one.",
          quote1:
            "Adventure travel sounds like a tough mudder or accomplishment - nc6",
          quote2:
            "It can... be deep culture travel. It's just not doing the same old - jc1",
        },
        {
          header: "Group travel",
          body: "The mismatched mental model extends to a hesitation toward group travel due to concerns about travel companions",
          quote1:
            "I'm hesitant to travel with people I don't know because I don't want my time and money wasted - nc2",
          quote2:
            "Group trips can be a way to connect with people you share 1 or 2 things in common with and wouldn't meet otherwise - jc3",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Website Comparison",
    classification: "ux",
    client: "Tobii",
    img: "/assets/ux-project-thumbnails/eyetracker-thumb.png",
    slug: "/website-comparison",
    desc: "A comparison of the navigability of multiple Behavioral Lab websites  using eye-tracking technology",
  },
];
