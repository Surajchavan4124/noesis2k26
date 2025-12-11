const allEventsData = [
  {
    mainEvent: {
      id: "main-event-1",
      date: "Jan 24-25, 2026",
      title: "WEBWIZARD",
      venue: "BCA Lab",
      cardTitle: "WEBWIZARD",
      imageUrl: "assets/webwizard.png",
      descriptionTitle: "About WebWizard",
      descriptionBody: "A series of challenges designed to test your mastery of web technologies. From front-end design to back-end logic and bug hunting, prove you're the ultimate web wizard.",
      rulesTitle: "General Rules for WebWizard",
      rules: [
        "All participants must be registered students.",
        "Please check individual sub-events for specific rules and timings.",
        "Decisions of the event coordinators and judges are final."
      ]
    },
    subEvents: [
      {
        id: "sub-event-1",
        date: "Jan 24",
        title: "Ignite Your Web Design Genius",
        venue: "BCA Lab 2",
        cardTitle: "Ignite Your Web Design Genius",
        imageUrl: "assets/webdesign.jpg",
        descriptionTitle: "About W3BDESIXN",
        descriptionBody: "Attention Web Developers and Designers: Unleash Your Hidden Talents!\nJoin Our Website Design Competition and Showcase Your Creativity!",
        rulesTitle: "W3BDESIXN Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "The participants will be given a theme based on which they have to design a dynamic website.",
          "Website should be designed using HTML, CSS, and JavaScript.",
          "For backend, only PHP and MySQL are allowed.",
          "Premade templates are not allowed.",
          "Website will be judged based on originality, design, functionality, and usability."
        ]
      },
      {
        id: "sub-event-2",
        date: "Jan 24",
        title: "Validate and Conquer!",
        cardTitle: "Validate and Conquer!",
        venue: "BCA Lab",
        imageUrl: "assets/regex.webp",
        descriptionTitle: "About RegEx",
        descriptionBody: "Join the RegEx Challenge: Where JavaScript Enthusiasts Perfect the Art of Web Form Validation!",
        rulesTitle: "RegEx Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "The participants will be given a screenshot of the form layout.",
          "The form should be designed using HTML, CSS and JavaScript only.",
          "Participants have to perform all possible JavaScript validations.",
          "Use of constraint validation attributes eg. required, min, max will not be allowed."
        ]
      },
      {
        id: "sub-event-3",
        date: "Jan 24",
        title: "Unmask the Hidden Bugs",
        cardTitle: "Unmask the Hidden Bugs",
        venue: "BCA Lab",
        imageUrl: "assets/bugit.webp",
        descriptionTitle: "About BugIT",
        descriptionBody: "Join the BugIT Competition: Put Your Web Investigation Skills to Work on Static Sites—Identify, Fix, and Optimize!",
        rulesTitle: "BugIT Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hour",
          "The participants will be provided with a static website created with HTML, CSS and JavaScript. The website does not have server side programming and database connection.",
          "The participants have to identify the errors, document the errors in the template provided, fix the errors and optimize the website for performance."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "Jan 24-25, 2026",
      title: "CODE CRUSADER",
      cardTitle: "CODE CRUSADER",
      venue: "BCA Lab",
      imageUrl: "assets/codecrusaders.png",
      descriptionTitle: "About Code Crusader",
      descriptionBody: "Dive deep into the fundamentals of programming. These events will test your logic, problem-solving speed, and debugging skills under pressure. Only the sharpest coders will prevail.",
      rulesTitle: "General Rules for Code Crusader",
      rules: [
        "All participants must be registered students.",
        "Please check individual sub-events for specific rules and timings.",
        "Decisions of the event coordinators and judges are final."
      ]
    },
    subEvents: [
      {
        id: "sub-event-4",
        date: "Jan 24",
        title: "Code Unseen, Conquer the Challenge!",
        cardTitle: "Code Unseen, Conquer the Challenge!",
        venue: "BCA Lab",
        imageUrl: "assets/blindcoding.webp",
        descriptionTitle: "About Blind Coding",
        descriptionBody: "Blind Coding is a unique challenge that puts your coding expertise, logic, and focus to the test—without the usual coding aids.\nIt's just you, your code, and the clock!",
        rulesTitle: "Blind Coding Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Participants should have the knowledge of C programming language.",
          "Round 1: One participant of the team has to write the code for the given problem, with the MONITOR TURNED OFF within a specified time.",
          "Round 2: Task will be revealed on the day of the competition. The team who solves the given problem in the least amount of time will be the winner."
        ]
      },
      {
        id: "sub-event-5",
        date: "Jan 24",
        title: "Bug-Busting Showdown!",
        cardTitle: "Bug-Busting Showdown!",
        venue: "BCA Lab",
        imageUrl: "assets/bugsquahers.png",
        descriptionTitle: "About BugSquasher",
        descriptionBody: "Attention coding enthusiasts! It's time to step up and eliminate those sneaky bugs.\nJoin the Bug Squashers and demonstrate your programming expertise in the realm of C!",
        rulesTitle: "BugSquasher Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Participants should know C programming language.",
          "Questions will consist of code snippets with a bug in the code.",
          "Participants need to find the bug and write the correct code on the answer sheet.",
          "Participants will not be allowed to use any IDE.",
          "Participants are not allowed to carry any smart devices."
        ]
      },
      {
        id: "sub-event-6",
        date: "Jan 24",
        title: "Search, Solve and Succeed!",
        cardTitle: "Search, Solve and Succeed!",
        venue: "BCA Lab",
        imageUrl: "assets/codehunt.png",
        descriptionTitle: "About CodeHunt",
        descriptionBody: "Join us for Code Hunt, where participants will showcase their Java skills while embarking on an exciting quest to decode clues that reveal programming questions.",
        rulesTitle: "CodeHunt Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hour",
          "The participants are not allowed to use their own laptop, or phones, but must use the PC provided by the college.",
          "Participants will be given clues guiding them to the questions hidden somewhere in the campus.",
          "Participants have to solve the questions using Java Programming language.",
          "The solution of the current question serves as input to the next question.",
          "The participant who solves all the questions in the least amount of time will be the winner."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-3",
      date: "Jan 24-25, 2026",
      title: "MEDIA CRAFTER",
      cardTitle: "MEDIA CRAFTER",
      venue: "BCA Lab",
      imageUrl: "assets/mediacrafters.png",
      descriptionTitle: "About Media Crafter",
      descriptionBody: "Unleash your inner artist. This category is for the visual storytellers, the 3D modelers, and the design gurus. Show us your creative vision and technical skill.",
      rulesTitle: "General Rules for Media Crafter",
      rules: [
        "All participants must be registered students.",
        "Please check individual sub-events for specific rules and timings.",
        "Decisions of the event coordinators and judges are final."
      ]
    },
    subEvents: [
      {
        id: "sub-event-7",
        date: "Jan 25",
        title: "Prepare to unleash your creativity",
        cardTitle: "Prepare to unleash your creativity",
        venue: "BCA Lab",
        imageUrl: "assets/creativity.webp",
        descriptionTitle: "About Creativity",
        descriptionBody: "For the visionary designer with an eye for impactful visuals. Create an unforgettable poster that captures hearts and minds!",
        rulesTitle: "Creativity Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Participants are required to create a poster on a given theme using Canva.",
          "All posters must be created from a blank canvas.",
          "Participants are not allowed to use any pre-made templates, themes, or design frameworks available on Canva."
        ]
      },
      {
        id: "sub-event-8",
        date: "Jan 25",
        title: "Craft the Perfect Fusion",
        cardTitle: "Craft the Perfect Fusion",
        venue: "BCA Lab",
        imageUrl: "assets/sync it.webp",
        descriptionTitle: "About Sync It",
        descriptionBody: "Are you ready to compose the perfect movie?\nTap the maestro in you to create the perfect harmony between video clips and audio files.",
        rulesTitle: "Sync It Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Participants will be provided with muted video clips and audio files.",
          "The task is to synchronize ANY ONE of the video clips with one or more audio files to create a meaningful movie using -Shortcut video editor / Openshot Video Editor.",
          "Participants have to carry their own headphones (wired)."
        ]
      },
      {
        id: "sub-event-9",
        date: "Jan 25",
        title: "Where Imagination and Innovation Takes Shape",
        cardTitle: "Where Imagination and Innovation Takes Shape",
        venue: "BCA Lab",
        imageUrl: "assets/blendernate.webp",
        descriptionTitle: "About Blendernate",
        descriptionBody: "Join BlenderNATE to dive into the world of 3D modeling and bring your imagination and creativity to life!.",
        rulesTitle: "Blendernate Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hour",
          "Participants must create a 3D model or scene based on the provided theme.",
          "The theme will be communicated to participants at the beginning of the competition.",
          "Software to be used : Blender",
          "The participants are not allowed to use their own laptop, but must use the PC provided by the college."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-4",
      date: "Jan 24-25, 2026",
      title: "INNOQUEST",
      cardTitle: "INNOQUEST",
      venue: "BCA Lab",
      imageUrl: "assets/innoquest.png",
      descriptionTitle: "About InnoQuest",
      descriptionBody: "It's all about ideas and intellect. Challenge your knowledge in our geek-out quiz, pitch a world-changing idea, or defend your technological stances in a fast-paced debate.",
      rulesTitle: "General Rules for InnoQuest",
      rules: [
        "All participants must be registered students.",
        "Please check individual sub-events for specific rules and timings.",
        "Decisions of the event coordinators and judges are final."
      ]
    },
    subEvents: [
      {
        id: "sub-event-10",
        date: "Jan 25",
        title: "Step up, unlock the geek within you!",
        cardTitle: "Step up, unlock the geek within you!",
        venue: "BCA Lab",
        imageUrl: "assets/geek-o.webp",
        descriptionTitle: "About Geek-O-Pedia",
        descriptionBody: "Only the sharpest minds will survive the ultimate test of knowledge—are you ready to outsmart, outlast, and outplay your competition?",
        rulesTitle: "Geek-O-Pedia Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "The quiz will be based on the following themes: Technology, General Knowlegde, Logical Reasoning, Sports and Movies.",
          "Only the top 5 qualifying teams from the elimination rounds (if held) will advance to the on-stage round.",
          "The rules for each round will be announced at the beginning of the respective round",
          "The decision of the quiz-master and the organisers will be final and binding."
        ]
      },
      {
        id: "sub-event-11",
        date: "Jan 25",
        title: "Innovate. Pitch. Inspire.",
        cardTitle: "Innovate. Pitch. Inspire.",
        venue: "BCA Lab",
        imageUrl: "assets/pitch.webp",
        descriptionTitle: "About Pitch Perfect",
        descriptionBody: "PitchPerfect is a visionary's stage to present game-changing ideas, from technological innovations to sustainable solutions and turn them into reality.",
        rulesTitle: "Pitch Perfect Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Participants should pitch an innovative tech-based idea or concept for a product or service, showcasing its value, potential impact, and the transformative difference it can make.",
          "The idea/concept could be presented by the participants with the aid of a model, demo video, or PowerPoint presentation.",
          "Time duration : 10 minutes per team"
        ]
      },
      {
        id: "sub-event-12",
        date: "Jan 25",
        title: "Defend Your Ideas, Challenge The Rest!",
        cardTitle: "Defend Your Ideas, Challenge The Rest!",
        venue: "BCA Lab",
        imageUrl: "assets/rebels.webp",
        descriptionTitle: "About Rebuttal Rebels",
        descriptionBody: "The Rebuttal Rebels Challenge will push you to the edge of your knowledge and eloquence.Dare to take on an unexpected IT topic, think fast, argue smart and defend your position.",
        rulesTitle: "Rebuttal Rebels Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hour",
          "Rebuttal Rebels is a debate competition centered around the latest technology topics.",
          "Participants should come prepared with up-to-date knowledge of the trends and developments in the IT world.",
          "Topics will be given on the spot, and participants must think quickly and present their arguments clearly.",
          "Participants are expected to follow the debate rules, including time limits for speaking, respectful engagement with others, and staying on-topic."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "Jan 24-25, 2026",
      title: "SWING OF FORTUNE",
      cardTitle: "SWING OF FORTUNE",
      venue: "BCA Lab",
      imageUrl: "assets/swing.png",
      descriptionTitle: "About Swing of Fortune",
      descriptionBody: "Show your team's spirit and creativity! These ice-breaker and media-focused events are all about personality, style, and making a memorable impression.",
      rulesTitle: "General Rules for Swing of Fortune",
      rules: [
        "All participants must be registered students.",
        "Please check individual sub-events for specific rules and timings.",
        "Decisions of the event coordinators and judges are final."
      ]
    },
    subEvents: [
      {
        id: "sub-event-13",
        date: "Submission",
        title: "Get ready to introduce your team in a unique and creative way!",
        cardTitle: "Get ready to introduce your team in a unique and creative way!",
        venue: "BCA Lab",
        imageUrl: "assets/squadshowcase.webp",
        descriptionTitle: "About Squad Showcase",
        descriptionBody: "This ice breaker event is all about showing your team's spirit, creativity, and personality through a short video or reel.",
        rulesTitle: "Squad Showcase Rules",
        rules: [
          "This is strictly a video-only event. Teams are NOT allowed to introduce themselves on stage. The video must be uploaded to the designated Google Drive link provided by the event organizers well before the deadline.",
          "The video/reel should not exceed 2 minutes.",
          "Any team failing to participate in this ice breaker event will lose points that count toward their overall score in the competition."
        ]
      },
      {
        id: "sub-event-14",
        date: "Jan 24",
        title: "Get ready to showcase your creativity in Reel Rumble!",
        cardTitle: "Get ready to showcase your creativity in Reel Rumble!",
        venue: "BCA Lab",
        imageUrl: "assets/reel rumble.webp",
        descriptionTitle: "About Reel Rumble",
        descriptionBody: "Capture the best moments, the excitement, and the energy of NOESIS within our campus and turn them into a captivating reel.",
        rulesTitle: "Reel Rumble Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Each team can submit ONLY ONE reel.",
          "The reel must be based on moments captured during NOESIS and within the campus.",
          "The reel should be within Instagram's 60-second limit. Post your reel on Instagram using the event hashtag (to be provided) by 11:50 p.m. on 14th January 2025.",
          "Ensure that your reel is appropriate, respectful, and aligns with the event's values. Content that is inappropriate or violates guidelines will be disqualified.",
          "Any team failing to participate in this event will lose points that count toward their overall score in the competition."
        ]
      },
      {
        id: "sub-event-15",
        date: "Jan 25",
        title: "Walking the Robot Way",
        cardTitle: "Walking the Robot Way",
        venue: "BCA Lab",
        imageUrl: "assets/mech mania.webp",
        descriptionTitle: "About MechMania Showcase",
        descriptionBody: "Get ready to showcase your mechanical moves, unleash your inner robot, and dazzle the audience with your robotic expressions, mesmerizing the crowd with every move!.",
        rulesTitle: "MechMania Showcase Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hour",
          "ONLY ONE participant from each team.",
          "Participants must bring their own costumes, accessories, and props to enhance their robot persona.",
          "Be sure to include appropriate background music that complements the mechanical theme.",
          "The maximum performance time is 5 minutes per team."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-6",
      date: "Jan 24-25, 2026",
      title: "GAMERS GROOVE",
      cardTitle: "GAMERS GROOVE",
      venue: "BCA Lab",
      imageUrl: "assets/gamersgroove.png",
      descriptionTitle: "About Gamers Groove",
      descriptionBody: "Get your game face on. This is the ultimate test of teamwork, strategy, and reflexes. Only one team will achieve victory in the arena. Are you ready?",
      rulesTitle: "General Rules for Gamers Groove",
      rules: [
        "All participants must be registered students.",
        "Please check individual sub-events for specific rules and timings.",
        "Decisions of the event coordinators and judges are final."
      ]
    },
    subEvents: [
      {
        id: "sub-event-16",
        date: "Jan 25",
        title: "Assemble Your Squad, Claim Victory!",
        cardTitle: "Assemble Your Squad, Claim Victory!",
        venue: "BCA Lab",
        imageUrl: "assets/valorant.png",
        descriptionTitle: "About Valorant",
        descriptionBody: "It's time to clutch or kick! Assemble your squad of five and dive into the ultimate test of tactical prowess. Show off your sharp aim, flawless strategies, and unbreakable teamwork to rise through the ranks and be crowned the Valorant champions!",
        rulesTitle: "Valorant Rules",
        rules: [
          "Participants: 5",
          "Duration: 3 Hours (Tournament)",
          "This is a 5v5 team-based tournament.",
          "Game Mode: Standard (Competitive).",
          "Lobby Settings: Tournament Mode: On, Overtime: Win by Two: On, Cheats: Off.",
          "Format: Single Elimination knockout. Finals will be Best-of-3.",
          "Map Pool: Ascent, Bind, Haven, Split, Lotus. Maps for each match will be decided by a veto process.",
          "Participants must use the PCs and peripherals provided by the college.",
          "In case of a player disconnect, the round will continue. The player must reconnect as soon as possible.",
          "All agents are allowed. Exploiting any known game bugs will result in disqualification.",
          "All participants must demonstrate good sportsmanship. Toxic behavior will not be tolerated."
        ]
      }
    ]
  }
]