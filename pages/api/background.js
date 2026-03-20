const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Riphah International University",
        degree: "BS, Computer Science",
        detail:
          "Bachelor's Degree in Computer System from Riphah International University.",
        year: "2021-2025",
      },
      {
        id: 1,
        title: "Narowal Degree College",
        degree: "HSSC, Pre Engineering",
        detail:
          "Completed FSC part 1 and part 2 in Pre-Engineering from Narowal Degree College.",
        year: "2018-2020",
      },
      {
        id: 2,
        title: "Falcon Academy",
        degree: "SSC, Science Subjects",
        detail:
          "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Narowal",
        year: "2016-2018",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Big Entities",
        role: "Software Engineer",
        url: "https://www.bigentities.com/",
        desc: "As a MERN Stack Developer, I use MongoDB, Express.js, React, and Node.js to build full-stack web applications with scalable backend services and interactive user interfaces.",
        year: "02/2026 - Present",
        location: "Lahore, Pakistan",
      },
      {
        id: 2,
        title: "Encoder Bytes",
        role: "Frontend Developer",
        url: "https://www.encoderbytes.com/",
        desc: "Worked as a Frontend Developer building responsive UI and integrating Firebase for real-time features.",
        year: "09/2024 - 02/2025",
        location: "Lahore, Pakistan",
      },
      {
        id: 3,
        title: "Deutics Global",
        role: "Internee",
        url: "https://deutics.com/",
        desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
        year: "02/2024",
        location: "Lahore, Pakistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
