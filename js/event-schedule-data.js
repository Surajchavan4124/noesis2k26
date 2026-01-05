const allEventsData = [
  {
    mainEvent: {
      id: "main-event-1",
      date: "Jan 23-24, 2026",
      title: "WEBWIZARD",
      venue: "TBA",
      cardTitle: "[Main Event] WEBWIZARD",
      descriptionTitle: "About WEBWIZARDS",
      descriptionBody: "A series of challenges designed to test your mastery of web technologies. From front-end design to back-end logic and bug hunting, prove you're the ultimate web wizard.",
    },
    subEvents: [
      {
        id: "sub-event-1",
        date: "Jan 23",
        title: "FIGMATRIX",
        venue: "TBA",
        cardTitle: "[Sub Event] FIGMATRIX",
        descriptionTitle: "About FIGMATRIX",
        descriptionBody: "Step into the Figma Design Arena: Conceptualise, Craft, and Prototype Stunning Web App Interfaces!",
      },
      {
        id: "sub-event-2",
        date: "Jan 23",
        title: "BugIT",
        cardTitle: "[Sub Event] BugIT",
        venue: "TBA",
        descriptionTitle: "About BugIT",
        descriptionBody: "Not All Bugs Hide Well - Find them, fix them, and optimize like a true web detective.",
      },
      {
        id: "sub-event-3",
        date: "Jan 23",
        title: "WEB DESIGN",
        cardTitle: "[Sub Event] WEB DESIGN",
        venue: "TBA",
        descriptionTitle: "About WEB DESIGN",
        descriptionBody: "Take on the ultimate web design showdown and stand out from the crowd! Craft original, functional, and stunning websites and prove you’ve got what it takes to dominate the web!",
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "Jan 23-24, 2026",
      title: "CODE CRUSADER",
      cardTitle: "[Main Event] CODE CRUSADER",
      venue: "BCA Lab",
      descriptionTitle: "About Code Crusader",
      descriptionBody: "Dive deep into the fundamentals of programming. These events will test your logic, problem-solving speed, and debugging skills under pressure. Only the sharpest coders will prevail.",
    },
    subEvents: [
      {
        id: "sub-event-4",
        date: "Jan 23",
        title: "CODELITE",
        cardTitle: "[Sub Event] CODELITE",
        venue: "TBA",
        descriptionTitle: "About CODELITE",
        descriptionBody: "CodeLite is a challenge focused on writing efficient solutions with minimal instructions.",
      },
      {
        id: "sub-event-5",
        date: "Jan 23",
        title: "CODE HUNT",
        cardTitle: "CODE HUNT",
        venue: "TBA",
        descriptionTitle: "About CODE HUNT",
        descriptionBody: "Code Hunt is the event where cryptography meets C programming—team up, decrypt the message, and bring the code to life.",
      },
      {
        id: "sub-event-6",
        date: "Jan 23",
        title: "BUG SQUASHERS",
        cardTitle: "BUG SQUASHERS",
        venue: "TBA",
        descriptionTitle: "About BUG SQUASHERS",
        descriptionBody: "Ready to squash some bugs? Step into the arena and show your mastery of C!",
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-3",
      date: "Jan 23-24, 2026",
      title: "INNOQUEST",
      cardTitle: "[Main Event] INNOQUEST",
      venue: "TBA",
      descriptionTitle: "About INNOQUEST",
      descriptionBody: "It's all about ideas and intellect. Challenge your knowledge in our geek-out quiz, pitch a world-changing idea, or defend your technological stances in a fast-paced debate.",
    },
    subEvents: [
      {
        id: "sub-event-7",
        date: "Jan 24",
        title: "GEEK-O-PEDIA",
        cardTitle: "[Sub Event] GEEK-O-PEDIA",
        venue: "TBA",
        descriptionTitle: "About GEEK-O-PEDIA",
        descriptionBody: "Unleash your inner artist. This category is for the visual storytellers, the 3D modelers, and the design gurus. Show us your creative vision and technical skill.",
      },
      {
        id: "sub-event-8",
        date: "Jan 24",
        title: "PITCH PERFECT",
        cardTitle: "[Sub Event] PITCH PERFECT",
        venue: "TBA",
        descriptionTitle: "About PITCH PERFECT",
        descriptionBody: "Where innovative ideas take center stage and creativity meets opportunity! Are you ready to pitch your vision?",
      },
      {
        id: "sub-event-9",
        date: "Jan 24",
        title: "REBUTTAL REBELS",
        cardTitle: "[Sub Event] REBUTTAL REBELS",
        venue: "TBA",
        descriptionTitle: "About REBUTTAL REBELS",
        descriptionBody: "Speak with speed, argue with logic, and defend with confidence! Are you ready to argue, defend, and dominate?",
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-4",
      date: "Jan 23-24, 2026",
      title: "MEDIA CRAFTERS",
      cardTitle: "[Main Event] MEDIA CRAFTERS",
      venue: "TBA",
      descriptionTitle: "About MEDIA CRAFTERS",
      descriptionBody: "Unleash your inner artist. This category is for the visual storytellers, the 3D modelers, and the design gurus. Show us your creative vision and technical skill.",
    },
    subEvents: [
      {
        id: "sub-event-10",
        date: "Jan 24",
        title: "CREATIVITY",
        cardTitle: "CREATIVITY",
        venue: "TBA",
        descriptionTitle: "About CREATIVITY",
        descriptionBody: "Your ideas, your art, your stage—make a poster that speaks volumes.",
      },
      {
        id: "sub-event-11",
        date: "Jan 24",
        title: "SYNCIT",
        cardTitle: "SYNCIT",
        venue: "TBA",
        descriptionTitle: "About SYNCIT",
        descriptionBody: "From concept to cut, craft a video that resonates and captivates.",
      },
      {
        id: "sub-event-12",
        date: "Jan 24",
        title: "BLENDERNATE",
        cardTitle: "BLENDERNATE",
        venue: "TBA",
        descriptionTitle: "About BLENDERNATE",
        descriptionBody: "Bring your ideas off the screen—model, render, and amaze.",
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "Jan 23-24, 2026",
      title: "SWING OF FORTUNE",
      cardTitle: "[Main Event] SWING OF FORTUNE",
      venue: "BCA Lab",
      descriptionTitle: "About Swing of Fortune",
      descriptionBody: "Show your team's spirit and creativity! These ice-breaker and media-focused events are all about personality, style, and making a memorable impression.",
    },
    subEvents: [
      {
        id: "sub-event-13",
        date: "Submission",
        title: "Get ready to introduce your team in a unique and creative way!",
        cardTitle: "Get ready to introduce your team in a unique and creative way!",
        venue: "BCA Lab",
        descriptionTitle: "About Squad Showcase",
        descriptionBody: "This ice breaker event is all about showing your team's spirit, creativity, and personality through a short video or reel.",
      },
      {
        id: "sub-event-14",
        date: "Jan 23",
        title: "Get ready to showcase your creativity in Reel Rumble!",
        cardTitle: "Get ready to showcase your creativity in Reel Rumble!",
        venue: "BCA Lab",
        descriptionTitle: "About Reel Rumble",
        descriptionBody: "Capture the best moments, the excitement, and the energy of NOESIS within our campus and turn them into a captivating reel.",
      },
      {
        id: "sub-event-15",
        date: "Jan 24",
        title: "Walking the Robot Way",
        cardTitle: "Walking the Robot Way",
        venue: "BCA Lab",
        descriptionTitle: "About MechMania Showcase",
        descriptionBody: "Get ready to showcase your mechanical moves, unleash your inner robot, and dazzle the audience with your robotic expressions, mesmerizing the crowd with every move!.",
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-6",
      date: "Jan 23-24, 2026",
      title: "GAMERS GROOVE",
      cardTitle: "[Main Event] GAMERS GROOVE",
      venue: "BCA Lab",
      descriptionTitle: "About Gamers Groove",
      descriptionBody: "Get your game face on. This is the ultimate test of teamwork, strategy, and reflexes. Only one team will achieve victory in the arena. Are you ready?",
    },
    subEvents: [
      {
        id: "sub-event-16",
        date: "Jan 24",
        title: "Assemble Your Squad, Claim Victory!",
        cardTitle: "Assemble Your Squad, Claim Victory!",
        venue: "BCA Lab",
        descriptionTitle: "About Valorant",
        descriptionBody: "It's time to clutch or kick! Assemble your squad of five and dive into the ultimate test of tactical prowess. Show off your sharp aim, flawless strategies, and unbreakable teamwork to rise through the ranks and be crowned the Valorant champions!",
      }
    ]
  }
]