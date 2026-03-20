const portfolio = [
  {
    id: 0,
    projectName: "Doctor Appointment Booking System",
    url: "https://doctor-appointment-booking-system-br6c.onrender.com",
    image: "projects/AppoitmentApp.png",
    projectDetail:
      "A MERN stack-based Doctor Appointment Booking System where patients can book appointments and pay fees via Stripe or cash. Includes Doctor Dashboard for managing patients and earnings, and Admin Dashboard for full system control.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Context Api",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "Stripe",
      },
      {
        tech: "Mern Stack Developer",
      },
    ],
  },
  {
    id: 0,
    projectName: "Taleem-o-Tarbiya",
    url: "https://github.com/Mohsinkhan48/Taleem-o-Tarbiya",
    image: "projects/taleem.png",
    projectDetail:
      "A MERN stack-based e-learning platform inspired by Coursera, designed for Islamic education (Dars-e-Nizami). It supports three roles—Student, Teacher, and Admin—where students can enroll in courses and earn certificates, while teachers can create and manage course content.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Design",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Redux Toolkit",
      },
      {
        tech: "REST API'S",
      },
      {
        tech: "Full Stack Developer",
      },
    ],
  },
  {
    id: 0,
    projectName: "Book Store Crud-Operations",
    url: "https://github.com/Mohsinkhan48/Book-store-app-crud-operations",
    image: "projects/BookStore.png",
    projectDetail:
      "A ReactJS-based Book Store CRUD application demonstrating Create, Read, Update, and Delete operations. It uses Axios for efficient data fetching and API integration.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Axios",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "FieldForce",
    url: "https://www.fieldforce-ai.com/",
    image: "projects/fieldforce.png",
    projectDetail:
      "A smart Field Force Management system that enables task assignment, real-time tracking, employee management, stock control, and AI-based sales prediction to improve operational efficiency.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Material UI",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Framer Motion",
      },
      {
        tech: "JavaScript",
      },
    ],
  },
  {
    id: 0,
    projectName: "BigEntities",
    url: "https://www.bigentities.com/",
    image: "projects/BigEntities.png",
    projectDetail:
      "A fully responsive software company website designed to present services and portfolio, built using HTML, CSS, Bootstrap, JavaScript, and jQuery with interactive UI elements.",
    technologiesUsed: [
      {
        tech: "HTML",
      },
      {
        tech: "CSS",
      },
      {
        tech: "Bootstrap",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "jQuery",
      },
      {
        tech: "Frontend",
      },
    ],
  },
  {
    id: 0,
    projectName: "Login & Logout Authentication System",
    url: "https://github.com/Mohsinkhan48/login-logout-using-authentication-bcrypt",
    image: "projects/Login.png",
    projectDetail:
      "A secure authentication system implementing user login and logout functionality using bcrypt for password hashing and protection.",
    technologiesUsed: [
      {
        tech: "NodeJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "bcrypt",
      },
      {
        tech: "JWT",
      },
      {
        tech: "Backend",
      },
    ],
  },
  {
    id: 0,
    projectName: "Tic-Tac-Toe Game",
    url: "https://github.com/Mohsinkhan48/Tic-Tac-Toe-Game-Reactjs",
    image: "projects/tictactoe.png",
    projectDetail:
      "An interactive Tic-Tac-Toe game built with ReactJS, showcasing component-based architecture, state management, event handling, and dynamic rendering with efficient game logic.",
    technologiesUsed: [
      {
        tech: "UseEffect",
      },
      {
        tech: "UseState",
      },
      {
        tech: "State Management",
      },
      {
        tech: "CSS",
      },
      {
        tech: "ReactJS",
      },
    ],
  },
  {
    id: 2,
    projectName: "Responsive & Interactive Web App",
    url: "https://mohsinkhan48.github.io/mohsin-portfolio/",
    image: "projects/portfolio.png",
    projectDetail:
      "its a modern, fully responsive web application designed to deliver an intuitive user experience across all devices. Built with ReactJS and TailwindCSS, the project incorporates smooth animations using Framer Motion, interactive components, and seamless communication via EmailJS for contact forms. This project reflects my growth in building dynamic, user-friendly interfaces with a strong emphasis on design aesthetics and performance.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Framer Motion (Animations)",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "EmailJS (Contact Forms)",
      },
      {
        tech: "Responsive Design",
      },
    ],
  },
  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
