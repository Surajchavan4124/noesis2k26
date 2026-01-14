const allEventsData = [
  {
    mainEvent: {
      id: "main-event-1",
      date: "23 Jan 2026",
      time: "08:45 AM - 09:15 AM",
      title: "Registration",
      venue: "TBA",
      cardTitle: "[Main Event] Registration",
      descriptionTitle: "About Registration",
      descriptionBody:
        "Register for the event and get ready to participate in the challenges.",
    },
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "23 Jan 2026",
      time: "09:30 AM - 11:00 AM",
      title: "Inaugral Ceremony",
      venue: "Seminar Hall",
      cardTitle: "[Main Event] Inaugral Ceremony",
      descriptionTitle: "About Inaugral Ceremony",
      descriptionBody:
        "The official start of the event with a special ceremony.",
    },
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "Jan 23, 2026",
      title: "SWING OF FORTUNE",
      cardTitle: "[Main Event] SWING OF FORTUNE",
      venue: "TBA",
      descriptionTitle: "About Swing of Fortune",
      descriptionBody:
        "Show your team's spirit and creativity! These ice-breaker and media-focused events are all about personality, style, and making a memorable impression.",
    },
    subEvents: [
      {
        id: "sub-event-13",
        date: "23 Jan 2026, 11:00 AM - 11:15 AM",
        title: "Squad Showcase",
        cardTitle: "Squad Showcase",
        venue: "Seminar Hall",
        descriptionTitle: "About Squad Showcase",
        descriptionBody:
          "Kick-start the excitement by introducing your squad in a fun and creative way! Squad Showcase is a video-based icebreaker where teams express their identity, bond, and vibe through a short and engaging clip. ",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "23 Jan 2026",
      time: "11:15 AM - 11:30 AM",
      title: "Refreshment Break",
      cardTitle: "[Main Event] Refreshment Break",
      venue: "TBA",
      descriptionTitle: "About Refreshment Break",
      descriptionBody: "Take a break and enjoy refreshments during the event.",
    },
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "Jan 23, 2026",
      title: "WEBWIZARD",
      venue: "LAB 2",
      cardTitle: "[Main Event] WEBWIZARD",
      descriptionTitle: "About WEBWIZARDS",
      descriptionBody:
        "A series of challenges designed to test your mastery of web technologies. From front-end design to back-end logic and bug hunting, prove you're the ultimate web wizard.",
    },
    subEvents: [
      {
        id: "sub-event-1",
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "WEB DESIGN",
        cardTitle: "[Sub Event] WEB DESIGN",
        venue: "LAB 2",
        descriptionTitle: "About WEB DESIGN",
        descriptionBody:
          "Take on the ultimate web design showdown and stand out from the crowd! Craft original, functional, and stunning websites and prove you’ve got what it takes to dominate the web!",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "Jan 23, 2026",
      title: "CODE CRUSADER",
      cardTitle: "[Main Event] CODE CRUSADER",
      venue: "LAB 4",
      descriptionTitle: "About Code Crusader",
      descriptionBody:
        "Dive deep into the fundamentals of programming. These events will test your logic, problem-solving speed, and debugging skills under pressure. Only the sharpest coders will prevail.",
    },
    subEvents: [
      {
        id: "sub-event-4",
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "CODELITE",
        cardTitle: "[Sub Event] CODELITE",
        venue: "LAB 4",
        descriptionTitle: "About CODELITE",
        descriptionBody:
          "CodeLite is a challenge focused on writing efficient solutions with minimal instructions.",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-4",
      date: "Jan 23, 2026",
      title: "MEDIA CRAFTERS",
      cardTitle: "[Main Event] MEDIA CRAFTERS",
      venue: "LAB 3",
      descriptionTitle: "About MEDIA CRAFTERS",
      descriptionBody:
        "Unleash your inner artist. This category is for the visual storytellers, the 3D modelers, and the design gurus. Show us your creative vision and technical skill.",
    },
    subEvents: [
      {
        id: "sub-event-10",
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "CREATIX",
        cardTitle: "CREATIX",
        venue: "LAB 3",
        descriptionTitle: "About CREATIX",
        descriptionBody:
          "Your ideas, your art, your stage—make a poster that speaks volumes.",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-3",
      date: "Jan 23, 2026",
      title: "INNOQUEST",
      cardTitle: "[Main Event] INNOQUEST",
      venue: "Seminar Hall",
      descriptionTitle: "About INNOQUEST",
      descriptionBody:
        "It's all about ideas and intellect. Challenge your knowledge in our geek-out quiz, pitch a world-changing idea, or defend your technological stances in a fast-paced debate.",
    },
    subEvents: [
      {
        id: "sub-event-7",
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "REBUTTAL REBELS",
        cardTitle: "[Sub Event] REBUTTAL REBELS",
        venue: "Seminar Hall",
        descriptionTitle: "About REBUTTAL REBELS",
        descriptionBody:
          "Speak with speed, argue with logic, and defend with confidence! Are you ready to argue, defend, and dominate?",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-6",
      date: "Jan 23, 2026",
      title: "GAMERS GROOVE",
      cardTitle: "[Main Event] GAMERS GROOVE",
      venue: "TNB-13/Quadrangle",
      descriptionTitle: "About Gamers Groove",
      descriptionBody:
        "Get your game face on. This is the ultimate test of teamwork, strategy, and reflexes. Only one team will achieve victory in the arena. Are you ready?",
    },
    subEvents: [
      {
        id: "sub-event-16",
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "FIFA 24",
        cardTitle: "FIFA 24",
        venue: "TBA",
        descriptionTitle: "About FIFA 24",
        descriptionBody:
          "Show off your football skills and lead your team to glory in the virtual stadium!",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "23 Jan 2026",
      time: "01:00 PM - 02:00 PM",
      title: "Lunch Break",
      cardTitle: "[Main Event] Lunch Break",
      venue: "TBA",
      descriptionTitle: "About Lunch Break",
      descriptionBody: "Take a break and enjoy lunch during the event.",
    },
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "Jan 24, 2026",
      title: "WEBWIZARD",
      venue: "LAB 2",
      cardTitle: "[Main Event] WEBWIZARD",
      descriptionTitle: "About WEBWIZARDS",
      descriptionBody:
        "A series of challenges designed to test your mastery of web technologies. From front-end design to back-end logic and bug hunting, prove you're the ultimate web wizard.",
    },
    subEvents: [
      {
        id: "sub-event-3",
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "FIGMATRIX",
        venue: "LAB 2",
        cardTitle: "[Sub Event] FIGMATRIX",
        descriptionTitle: "About FIGMATRIX",
        descriptionBody:
          "Step into the Figma Design Arena: Conceptualise, Craft, and Prototype Stunning Web App Interfaces!",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-2",
      date: "Jan 24, 2026",
      title: "CODE CRUSADER",
      cardTitle: "[Main Event] CODE CRUSADER",
      venue: "LAB 4",
      descriptionTitle: "About Code Crusader",
      descriptionBody:
        "Dive deep into the fundamentals of programming. These events will test your logic, problem-solving speed, and debugging skills under pressure. Only the sharpest coders will prevail.",
    },
    subEvents: [
      {
        id: "sub-event-6",
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "BUG SQUASHERS",
        cardTitle: "BUG SQUASHERS",
        venue: "LAB 4",
        descriptionTitle: "About BUG SQUASHERS",
        descriptionBody:
          "Ready to squash some bugs? Step into the arena and show your mastery of C!",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-4",
      date: "Jan 24, 2026",
      title: "MEDIA CRAFTERS",
      cardTitle: "[Main Event] MEDIA CRAFTERS",
      venue: "LAB 3",
      descriptionTitle: "About MEDIA CRAFTERS",
      descriptionBody:
        "Unleash your inner artist. This category is for the visual storytellers, the 3D modelers, and the design gurus. Show us your creative vision and technical skill.",
    },
    subEvents: [
      {
        id: "sub-event-12",
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "BLENDERNATE",
        cardTitle: "BLENDERNATE",
        venue: "LAB 3",
        descriptionTitle: "About BLENDERNATE",
        descriptionBody:
          "Bring your ideas off the screen—model, render, and amaze.",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-3",
      date: "Jan 24, 2026",
      title: "INNOQUEST",
      cardTitle: "[Main Event] INNOQUEST",
      venue: "Seminar Hall",
      descriptionTitle: "About INNOQUEST",
      descriptionBody:
        "It's all about ideas and intellect. Challenge your knowledge in our geek-out quiz, pitch a world-changing idea, or defend your technological stances in a fast-paced debate.",
    },
    subEvents: [
      {
        id: "sub-event-9",
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "PITCH PERFECT",
        cardTitle: "[Sub Event] PITCH PERFECT",
        venue: "Seminar Hall",
        descriptionTitle: "About PITCH PERFECT",
        descriptionBody:
          "Where innovative ideas take center stage and creativity meets opportunity! Are you ready to pitch your vision?",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-6",
      date: "Jan 24, 2026",
      title: "GAMERS GROOVE",
      cardTitle: "[Main Event] GAMERS GROOVE",
      venue: "TNB-13/Quadrangle",
      descriptionTitle: "About Gamers Groove",
      descriptionBody:
        "Get your game face on. This is the ultimate test of teamwork, strategy, and reflexes. Only one team will achieve victory in the arena. Are you ready?",
    },
    subEvents: [
      {
        id: "sub-event-17",
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "Valorant ",
        cardTitle: "Valorant",
        venue: "TNB-13",
        descriptionTitle: "About Valorant",
        descriptionBody:
          "Team up, strategize, and outplay your opponents in this high-stakes tactical shooter!",
      },
    ],
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "Jan 24, 2026",
      title: "SWING OF FORTUNE",
      cardTitle: "[Main Event] SWING OF FORTUNE",
      venue: "TBA",
      descriptionTitle: "About Swing of Fortune",
      descriptionBody:
        "Show your team's spirit and creativity! These ice-breaker and media-focused events are all about personality, style, and making a memorable impression.",
    },
    subEvents: [
      {
        id: "sub-event-14",
        date: "23 Jan 2026, 03:30 PM - 05:30 PM",
        title: "Runway Royale",
        cardTitle: "Runway Royale",
        venue: "TBA",
        descriptionTitle: "About Runway Royale",
        descriptionBody:
          "Step into the future. Own the spotlight. Runway Royale is where fashion meets imagination. Bold walks, striking poses, and fearless style transform the runway into a world of digital brilliance and next-gen glamour.",
      },
      {
        id: "sub-event-15",
        date: "Jan 23-24, 2026",
        title: "The Reel Run",
        cardTitle: "The Reel Run",
        venue: "Campus",
        descriptionTitle: "About The Reel Run",
        descriptionBody:
          "Bring NOESIS to life through your lens! The Reel Run challenges teams to capture the fun, energy, and unforgettable moments of the fest and present them as a creative Instagram reel.",
      },
    ],
  },

  {
    mainEvent: {
      id: "main-event-5",
      date: "24 Jan 2026",
      time: "11:00 AM - 12:30 PM",
      title: "Refreshment Break",
      cardTitle: "[Main Event] Refreshment Break",
      venue: "TBA",
      descriptionTitle: "About Refreshment Break",
      descriptionBody: "Take a break and enjoy refreshments during the event.",
    },
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "24 Jan 2026",
      time: "12:30 PM - 02:00 PM",
      title: "Valedictory Programme and Prize distribution Ceremony",
      cardTitle:
        "[Main Event] Valedictory Programme and Prize distribution Ceremony",
      venue: "TBA",
      descriptionTitle:
        "About Valedictory Programme and Prize distribution Ceremony",
      descriptionBody:
        "Conclude the event with a grand valedictory ceremony, celebrating the achievements of all participants and distributing prizes to the winners.",
    },
  },
];
