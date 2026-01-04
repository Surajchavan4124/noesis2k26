const allEventsData = [
  {
    mainEvent: {
      id: "main-web",
      date: "Jan 23, 2026",
      title: "WEB WIZARDS",
      cardTitle: "WEB WIZARDS",
      venue: "BCA Lab",
      imageUrl: "assets/webwizard.png",
      descriptionTitle: "About Web Wizards",
      descriptionBody:
        "Take on creative and technical web challenges that test your design sense, frontend skills, UI/UX thinking, and debugging ability. Web Wizards is where ideas meet execution.",
      rulesTitle: "General Rules",
      rules: [
        "Participants must follow event-specific rules.",
        "Use of unfair means will result in disqualification.",
        "Judges’ decisions will be final and binding."
      ]
    },
    subEvents: [
      {
        id: "web-design",
        date: "Jan 23",
        title: "WEB DESIGN",
        cardTitle: "Web Design",
        venue: "BCA Lab",
        imageUrl: "assets/webdesign.jpg",
        descriptionTitle: "Web Design",
        descriptionBody:
          "Take on the ultimate web design showdown and stand out from the crowd! Craft original, functional, and stunning websites and prove you’ve got what it takes to dominate the web!",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Theme will be provided on the spot.",
          "Website must be designed using HTML, CSS, and JavaScript.",
          "Only PHP and MySQL allowed for backend.",
          "Pre-made templates are not allowed.",
          "Judging based on originality, design, functionality, and usability."
        ]
      },
      {
        id: "figmatrix",
        date: "Jan 23",
        title: "FIGMATRIX",
        cardTitle: "FigMatrix",
        venue: "BCA Lab",
        imageUrl: "assets/figmatrix.webp",
        descriptionTitle: "FigMatrix",
        descriptionBody:
          "Step into the Figma Design Arena: Conceptualise, craft, and prototype stunning web app interfaces.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hours",
          "Theme will be announced at the start of the event.",
          "Entire design must be done in Figma.",
          "Multiple screens with clickable prototype required.",
          "No pre-made templates allowed.",
          "Judging based on creativity, usability, consistency, and visual appeal."
        ]
      },
      {
        id: "bugit",
        date: "Jan 23",
        title: "BUGIT",
        cardTitle: "BugIT",
        venue: "BCA Lab",
        imageUrl: "assets/bugit.webp",
        descriptionTitle: "BugIT",
        descriptionBody:
          "Not all bugs hide well — find them, fix them, and optimize like a true web detective.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hours",
          "Static website provided using HTML, CSS, and JavaScript.",
          "No server-side programming or database.",
          "Participants must identify, document, fix bugs, and optimize performance."
        ]
      }
    ]
  },

  /* ===================== CODE CRUSADERS ===================== */
  {
    mainEvent: {
      id: "main-code",
      date: "Jan 23, 2026",
      title: "CODE CRUSADERS",
      cardTitle: "CODE CRUSADERS",
      venue: "BCA Lab",
      imageUrl: "assets/codecrusaders.png",
      descriptionTitle: "About Code Crusaders",
      descriptionBody:
        "A battleground for coders where efficiency, logic, speed, and debugging skills define victory.",
      rulesTitle: "General Rules",
      rules: [
        "Participants must adhere to event rules.",
        "No external help unless specified.",
        "Judges’ decision is final."
      ]
    },
    subEvents: [
      {
        id: "codelite",
        date: "Jan 23",
        title: "CODELITE",
        cardTitle: "CodeLite",
        venue: "BCA Lab",
        imageUrl: "assets/codelite.webp",
        descriptionTitle: "CodeLite",
        descriptionBody:
          "CodeLite is a challenge focused on writing efficient solutions with minimal instructions.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Python programming knowledge required.",
          "Shortest correct code wins.",
          "No internet or external resources.",
          "Libraries allowed only if specified.",
          "Plagiarism leads to disqualification.",
          "Completion time considered in case of tie."
        ]
      },
      {
        id: "codehunt",
        date: "Jan 23",
        title: "CODE HUNT",
        cardTitle: "Code Hunt",
        venue: "BCA Lab",
        imageUrl: "assets/codehunt.png",
        descriptionTitle: "Code Hunt",
        descriptionBody:
          "Where cryptography meets C programming — decrypt the message and bring the code to life.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hours",
          "Only college-provided systems allowed.",
          "Caesar Cipher and C programming required.",
          "Roles: Decryptor and Coder.",
          "Roles reversed in Round 2.",
          "No external resources allowed.",
          "Fastest correct team wins."
        ]
      },
      {
        id: "bugsquashers",
        date: "Jan 23",
        title: "BUG SQUASHERS",
        cardTitle: "Bug Squashers",
        venue: "BCA Lab",
        imageUrl: "assets/bugsquahers.png",
        descriptionTitle: "Bug Squashers",
        descriptionBody:
          "Ready to squash some bugs? Step into the arena and show your mastery of C.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "C programming knowledge required.",
          "Find bugs and write corrected code.",
          "No IDEs allowed.",
          "No smart devices allowed."
        ]
      }
    ]
  },

  /* ===================== INNOQUEST ===================== */
  {
    mainEvent: {
      id: "main-inno",
      date: "Jan 24, 2026",
      title: "INNOQUEST",
      cardTitle: "INNOQUEST",
      venue: "BCA Lab",
      imageUrl: "assets/innoquest.png",
      descriptionTitle: "About InnoQuest",
      descriptionBody:
        "A stage for intellect, ideas, and debate — test your knowledge, pitch innovation, and defend your thoughts.",
      rulesTitle: "General Rules",
      rules: [
        "Participants must follow event-specific rules.",
        "Decisions of judges are final."
      ]
    },
    subEvents: [
      {
        id: "geekopedia",
        date: "Jan 24",
        title: "GEEK-O-PEDIA",
        cardTitle: "Geek-O-Pedia",
        venue: "BCA Lab",
        imageUrl: "assets/geek-o.webp",
        descriptionTitle: "Geek-O-Pedia",
        descriptionBody:
          "A thrilling showdown of knowledge — will your mind crack under pressure or lead you to triumph?",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Quiz topics: Technology, GK, Logic, Sports, Movies.",
          "Top teams advance to final rounds.",
          "Quizmaster’s decision is final."
        ]
      },
      {
        id: "pitchperfect",
        date: "Jan 24",
        title: "PITCH PERFECT",
        cardTitle: "Pitch Perfect",
        venue: "BCA Lab",
        imageUrl: "assets/pitch.webp",
        descriptionTitle: "Pitch Perfect",
        descriptionBody:
          "Where innovative ideas take center stage and creativity meets opportunity.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Pitch a tech-based idea or concept.",
          "Presentation via model, demo video, or PPT.",
          "10 minutes per team."
        ]
      },
      {
        id: "rebuttalrebels",
        date: "Jan 24",
        title: "REBUTTAL REBELS",
        cardTitle: "Rebuttal Rebels",
        venue: "BCA Lab",
        imageUrl: "assets/rebels.webp",
        descriptionTitle: "Rebuttal Rebels",
        descriptionBody:
          "Speak with speed, argue with logic, and defend with confidence.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hours",
          "Debate on latest technology topics.",
          "Topics given on the spot.",
          "Respectful and structured debate mandatory."
        ]
      }
    ]
  },

  /* ===================== MEDIA CRAFTERS ===================== */
  {
    mainEvent: {
      id: "main-media",
      date: "Jan 24, 2026",
      title: "MEDIA CRAFTERS",
      cardTitle: "MEDIA CRAFTERS",
      venue: "BCA Lab",
      imageUrl: "assets/mediacrafters.png",
      descriptionTitle: "About Media Crafters",
      descriptionBody:
        "For visual storytellers, designers, editors, and 3D artists — bring creativity to life.",
      rulesTitle: "General Rules",
      rules: [
        "Participants must adhere to rules.",
        "Judges’ decisions are final."
      ]
    },
    subEvents: [
      {
        id: "creativity",
        date: "Jan 24",
        title: "CREATIVITY",
        cardTitle: "Creativity",
        venue: "BCA Lab",
        imageUrl: "assets/creativity.webp",
        descriptionTitle: "Creativity",
        descriptionBody:
          "Your ideas, your art, your stage — make a poster that speaks volumes.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Poster must be created in Canva.",
          "Start from a blank canvas.",
          "No pre-made templates allowed.",
          "All text must be original."
        ]
      },
      {
        id: "syncit",
        date: "Jan 24",
        title: "SYNCIT",
        cardTitle: "SyncIT",
        venue: "BCA Lab",
        imageUrl: "assets/sync it.webp",
        descriptionTitle: "SyncIT",
        descriptionBody:
          "From concept to cut — craft a video that resonates and captivates.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 1½ hour",
          "Muted video clips and audio provided.",
          "Synchronize one video using Shotcut or OpenShot.",
          "Carry wired headphones."
        ]
      },
      {
        id: "blendernate",
        date: "Jan 24",
        title: "BLENDERNATE",
        cardTitle: "BlenderNate",
        venue: "BCA Lab",
        imageUrl: "assets/blendernate.webp",
        descriptionTitle: "BlenderNate",
        descriptionBody:
          "Bring your ideas off the screen — model, render, and amaze.",
        rulesTitle: "Rules",
        rules: [
          "Participants: 2",
          "Duration: 2 hours",
          "Theme given at start.",
          "Software: Blender only.",
          "Use college-provided PC.",
          "No pre-built models or external assets."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-5",
      date: "Jan 23-24, 2026",
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
        title: "Squad Showcase",
        cardTitle: "Squad Showcase",
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
        date: "Jan 23",
        title: "Reel Rumble",
        cardTitle: "Reel Rumble",
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
          "The reel should be within Instagram's 60-second limit. Post your reel on Instagram using the event hashtag (to be provided) by 11:50 p.m. on 14th January 2024.",
          "Ensure that your reel is appropriate, respectful, and aligns with the event's values. Content that is inappropriate or violates guidelines will be disqualified.",
          "Any team failing to participate in this event will lose points that count toward their overall score in the competition."
        ]
      },
      {
        id: "sub-event-15",
        date: "Jan 24",
        title: "MechMania Showcase",
        cardTitle: "MechMania Showcase",
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
      date: "Jan 23-24, 2026",
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
  }
];