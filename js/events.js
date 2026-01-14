const allEventsData = [
  {
    mainEvent: {
      id: "main-web",
      title: "WEB WIZARDS",
      cardTitle: "WEB WIZARDS",
      imageUrl: "assets/webwizard.png",
      descriptionTitle: "About Web Wizards",
      descriptionBody:"Take on creative and technical web challenges that test your design sense, frontend skills, UI/UX thinking, and debugging ability. Web Wizards is where ideas meet execution.",
      rulesTitle: "General Rules",
      rules: [
        "Participants must follow event-specific rules.",
        "Use of unfair means will result in disqualification.",
        "Judges’ decisions will be final and binding."
      ]
    },
    subEvents: [
      {
        id: "W3DESIXN",
        date: "23 Jan 2026, 11:30 AM - 1:00 PM",
        title: "W3B DESIXN",
        cardTitle: "W3B DESIXN",
        venue: "LAB 2",
        imageUrl: "assets/webdesign.jpg",
        descriptionTitle: "W3B DESIXN",
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
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "FIGMATRIX",
        cardTitle: "FigMatrix",
        venue: "LAB 2",
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
        date: "23 Jan 2026, 02:00 PM - 03:30 PM",
        title: "BUGIT",
        cardTitle: "BugIT",
        venue: "LAB 2",
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
      title: "CODE CRUSADERS",
      cardTitle: "CODE CRUSADERS",
      imageUrl: "assets/codecrusaders.webp",
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
        date: "23 Jan 2026, 11:30 AM - 1:00 PM",
        title: "CODELITE",
        cardTitle: "CodeLite",
        venue: "LAB 4",
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
        date: "23 Jan 2026, 01:30 PM - 03:30 PM",
        title: "CODE HUNT",
        cardTitle: "Code Hunt",
        venue: "LAB 4",
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
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "BUG SQUASHERS",
        cardTitle: "Bug Squashers",
        venue: "LAB 4",
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
      title: "INNOQUEST",
      cardTitle: "INNOQUEST",
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
        date: "23 Jan 2026, 02:00 PM - 03:30 PM",
        title: "GEEK-O-PEDIA",
        cardTitle: "Geek-O-Pedia",
        venue: "Seminar Hall",
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
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "PITCH PERFECT",
        cardTitle: "Pitch Perfect",
        venue: "Seminar Hall",
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
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "REBUTTAL REBELS",
        cardTitle: "Rebuttal Rebels",
        venue: "Seminar Hall",
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
      title: "MEDIA CRAFTERS",
      cardTitle: "MEDIA CRAFTERS",
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
        id: "Creatix",
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "CREATIX",
        cardTitle: "Creatix",
        venue: "LAB 3",
        imageUrl: "assets/creativity.webp",
        descriptionTitle: "Creatix",
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
        date: "23 Jan 2026, 02:00 PM - 03:30 PM",
        title: "SYNCIT",
        cardTitle: "SyncIT",
        venue: "LAB 3",
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
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "BLENDERNATE",
        cardTitle: "BlenderNate",
        venue: "LAB 3",
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
      title: "SWING OF FORTUNE",
      cardTitle: "SWING OF FORTUNE",
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
        date: "23 Jan 2026, 11:00 AM - 11:15 AM",
        title: "Squad Showcase",
        cardTitle: "Squad Reveal",
        venue: "Seminar Hall",
        imageUrl: "assets/squadshowcase.webp",
        descriptionTitle: "About Squad Reveal",
        descriptionBody: "Kick-start the excitement by introducing your squad in a fun and creative way! Squad Reveal is a video-based icebreaker where teams express their identity, bond, and vibe through a short and engaging clip.",
        rulesTitle: "Squad Reveal Rules",
        rules: [
          "This is a video-only introduction round. Teams are not permitted to introduce themselves live on stage.",
          "Each team must prepare one icebreaker video.",
          "One designated member from the team of 10 is responsible for uploading the video.",
          "The video must be uploaded to the official Google Drive link shared by the organizers within the given deadline.",
          "The maximum duration of the video should not exceed 5 minutes.",
          "Participation in this icebreaker round is mandatory. Teams that do not submit a video will lose points that count toward the overall event score."
        ]
      },
      {
        id: "sub-event-14",
        date: "Jan 23-24, 2026",
        title: "The Reel Run",
        cardTitle: "The Reel Run",
        venue: "Campus",
        imageUrl: "assets/reel rumble.webp",
        descriptionTitle: "About The Reel Run",
        descriptionBody: "Bring NOESIS to life through your lens! The Reel Run challenges teams to capture the fun, energy, and unforgettable moments of the fest and present them as a creative Instagram reel.",
        rules: [
          "Participants: 1",
          "Each team is permitted to submit only one reel.",
          "The reel must include clips captured during NOESIS event and within the college campus.",
          "The duration of the reel must not exceed 2 minutes.",
          "Teams must upload the reel on Instagram using the official event hashtag #NoesisOnCampus and tag the official event handle @noesis2k25_26.",
          "The reel must be uploaded on or before 11:30 PM, 23rd January 2026.",
          "The content must be appropriate, respectful, and aligned with the spirit of the fest. Any violation may lead to disqualification.",
          "Participation is mandatory. Teams that fail to submit a reel will lose points, which will affect their overall standing.",
        ]
      },
      {
        id: "sub-event-15",
        date: "23 Jan 2026, 03:30 PM - 05:30 PM",
        title: "Runway Royale",
        cardTitle: "Runway Royale",
        venue: "Quadrangle",
        imageUrl: "assets/mech mania.webp",
        descriptionTitle: "About Runway Royale",
        descriptionBody: "Step into the future. Own the spotlight.Runway Royale is where fashion meets imagination. Bold walks, striking poses, and fearless style transform the runway into a world of digital brilliance and next-gen glamour.",
        rulesTitle: "Runway Royale Rules",
        rules: [
          "Theme: Global Fashion",
          "Each team can have a maximum of 4 participants ",
          "Each team will represent ONE country through its traditional or cultural attire.",
          "Country selection will be on a first-come, first-serve basis. Teams that register earlier will get priority in choosing their country.",
          "All costumes, styling, and performance must reflect the theme.",
          "The maximum time allowed on stage is 5 minutes (including entry and exit).",
          "Participants must bring their own costumes, props, and accessories.",
          "Props must be safe; fire, sharp objects, or hazardous materials are strictly prohibited.",
          "Background music should be pre-submitted to organizers on pendrive.",
          "Vulgar or offensive content is not allowed.",
          "The judges’ decision will be final and binding.",
          "Teams failing to participate will loose points hence affecting the overall standing."
        ]
      }
    ]
  },
  {
    mainEvent: {
      id: "main-event-6",
      title: "GAMERS GROOVE",
      cardTitle: "GAMERS GROOVE",
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
        date: "23 Jan 2026, 11:30 AM - 01:00 PM",
        title: "FIFA 24",
        cardTitle: "FIFA 24",
        venue: "TNB 13",
        imageUrl: "assets/fifa24.webp",
        descriptionTitle: "About FIFA 24",
        descriptionBody: "Experience the thrill of the game! FIFA 24 is where strategy, teamwork, and quick reflexes come together in an electrifying virtual football showdown.",
        rulesTitle: "FIFA 24 Rules",
        rules: [
          "Participants: 1",
          "Duration: 1½ hours",
          "Platform: PS5 (Controllers only will be provided).",
          "Only one participant per team is allowed.",
          "Match Format: 4-minute halves with 1-minute team management per half.",
          "Default camera settings must be used.",
          "Teams from the 'Rest of the World' category are prohibited.",
          "Tournament format will be decided based on the number of teams entered",
          "Swearing or sledging is not allowed.First a warning will be given, followed by disqualification if repeated.",
          "Technical issues will be fairly resolved by the coordinator. First a warning will be given, followed by disqualification if repeated",
          "Extra time is allowed only in case of a draw in Semi-Finals and Finals. If still tied, matches will go directly to penalties.",
          "Two minutes of pre-game time will be provided for team instructions and changing settings.",
          "The decision of the organizers will be final and binding.",
          "Any damage to the controller must be paid for by the participant responsible."
        ]
      },
      {
        id: "sub-event-17",
        date: "24 Jan 2026, 09:00 AM - 11:00 AM",
        title: "Valorant",
        cardTitle: "Valorant",
        venue: "TNB 13",
        imageUrl: "assets/valorant.webp",
        descriptionTitle: "About Valorant",
        descriptionBody: "Team up, strategize, and outplay your opponents in this high-stakes tactical shooter!",
        rules: [
          "Participants: 2",
          "Duration: 1½ hours",
          "Participants are required to bring and use their own laptops for the gaming event.",
          "Valorant will be played in team format. Teams will be formed by the organizers based on the participation.",
          "Game Mode for early rounds will be informed during the event.",
          "The game frame rate will be capped at 60 FPS to ensure equal performance conditions.",
          "All matches will be played on systems with a 60 Hz refresh rate for fairness.",
          "Matches will be hosted on the Mumbai server or the nearest mutually agreed server to minimize latency.",
          "Each team is allowed one tactical pause per match lasting up to two minutes.",
        ]
      },
      {
        id: "sub-event-15",
        date: "23 Jan 2026, 02:00 PM - 03:30 PM",
        title: "NOESIS EXTREME",
        cardTitle: "NOESIS EXTREME",
        venue: "Quadrangle",
        imageUrl: "assets/noesisextreme.webp",
        descriptionTitle: "About NOESIS EXTREME",
        descriptionBody: "It takes more than a strong mindset to win. It takes endurance, power, and intellect. Do you have the physical and mental agility to dominate? If so, prove it at NOESIS EXTREME. -- Expect the Unexpected.",
        rulesTitle: "NOESIS Extreme Rules",
        rules: [

          "Surprise Penalties: Fall behind, and you will face disadvantages that test your gut and your grit.",
          "The Reset Trap: Precision is key—fail the balance test, and you go back to the start.",
          "Hybrid Warfare: A gauntlet that blends explosive power with razor-sharp focus.",
          "The tasks remain classified. The challenge is waiting. Are you ready?"
        ]
      }
    ]
  }
];