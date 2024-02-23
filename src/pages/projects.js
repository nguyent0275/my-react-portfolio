import horiseon from "../assets/images/horiseon-banner.png";
import prework from "../assets/images/prework-guide.png"
import rps from "../assets/images/rock-paper-scissors.png"
import randomPassword from "../assets/images/random-password-generator.png"
import quiz from "../assets/images/beginner-coding-quiz.png"
import scheduler from "../assets/images/work-day-scheduler.png"
import dinner from "../assets/images/whats-for-dinner.png"
import weather from "../assets/images/weather-dashboard.png"
import readme from "../assets/images/pro-readme-generator.png"
import svglogo from "../assets/images/logo.svg"
import noteTaker from "../assets/images/expressjs-note-taker.png"
import sql from "../assets/images/sql-employee-tracker.png"
import ecommerce from "../assets/images/ecommerce-backend.png"
import anime from "../assets/images/your-anime-sucks.png"


const projects = [
  {
    id: 1,
    name: "Horiseon SEO Refactor",
    image: horiseon,
    description:
      "Refactoring of HTMl and CSS code for ideal search engine optimization and readability",
    link: "https://nguyent0275.github.io/horiseon-seo-refactor",
  },
  {
    id: 2,
    name: "Prework Study Guide",
    image: prework,
    description:
      "A study guide going over the assigned prework for Upenn LPS Bootcamp for Coding.",
    link: "https://nguyent0275.github.io/prework-study-guide/",
  },
  {
    id: 3,
    name: "Rock, Paper, Scissor (Python)",
    image: rps,
    description:
      "A game of Rock, Paper, Scissors written in Python for a Udemy course.",
    link: "https://replit.com/@ToanNguyen136/rock-paper-scissors-start",
  },
  {
    id: 4,
    name: "Random Password Generator",
    image: randomPassword,
    description:
      "A password generator that creates strong password based on user input",
    link: "https://nguyent0275.github.io/random-password-generator/",
  },
  {
    id: 5,
    name: "Beginner Coding Quiz",
    image: quiz,
    description:
      "A quiz applications with questions based on Javascript fundamentals.",
    link: "https://nguyent0275.github.io/beginner-coding-quiz/",
  },
  {
    id: 6,
    name: "Work Day Scheduler",
    image: scheduler,
    description:
      "An application for planning and keeping track of task throughout the work day.",
    link: "https://nguyent0275.github.io/work-day-scheduler/",
  },
  {
    id: 7,
    name: "What's For Dinner",
    image: dinner,
    description: "A food and cocktail recipe searching application.",
    link: "https://nguyent0275.github.io/whats-for-dinner/",
  },
  {
    id: 8,
    name: "Weather Dashboard API",
    image: weather,
    description:
      "An application that uses Open Weather API to get the weather and 5 day forecast of a user specified location",
    link: "https://nguyent0275.github.io/weather-dashboard-api",
  },
  {
    id: 9,
    name: "Pro-README-Generator",
    image: readme,
    description:
      "A command line interface application that creates professional README's in markdown.",
    link: "https://github.com/nguyent0275/pro-readme-generator",
  },
  {
    id: 10,
    name: "SVG-Logo-Maker",
    image: svglogo,
    description:
      "A command line interface application that creates logos in SVG format.",
    link: "https://github.com/nguyent0275/svg-logo-maker/",
  },
  {
    id: 11,
    name: "ExpressJS-Note-Taker",
    image: noteTaker,
    description:
      "A note taking application that can be used to write and save notes. The application uses Express.js as a back end and will save and retrieve note data from a JSON file.",
    link: "https://github.com/nguyent0275/expressjs-note-taker",
  },
  {
    id: 12,
    name: "SQL-Employee-Tracker",
    image: sql,
    description:
      "A command-line application to manage a company's employee database. Using Node.js, Inquierer, and MySQL to develop the back end of the application.",
    link: "https://github.com/nguyent0275/sql-employee-tracker/",
  },
  {
    id: 13,
    name: "eCommerce-Back-End",
    image: ecommerce,
    description:
      "The backend for an e-commerce site build with a Express.js API configured with Sequelize to interact with a MYSQL Database.",
    link: "https://github.com/nguyent0275/eCommerce-Back-End",
  },
  {
    id: 14,
    name: "Your Anime Sucks",
    image: anime,
    description:
      "Your Anime Sucks is a comprehensive anime database platform tailored for enthusiasts seeking an enhanced anime-watching experience.",
    link: "https://github.com/nguyent0275/your-anime-sucks",
  },
];

export default projects;
