import Dice from "../../src/images/Dice.jpeg";
import Onlineshopping from "../../src/images/Onlineshopping.jpeg";
import Progression from "../../src/images/Progression.jpeg";
import Ticket from "../../src/images/Ticket.jpeg";
import Toursim from "../../src/images/Toursim.png";
import RealEstate from "../../src/images/RealEstate .jpeg";

import php from "../../src/images/php.png";
import python from "../../src/images/python.png";
import java from "../../src/images/java.png";
import node from "../../src/images/node.png";




export const Bio = {
  name: "Nirmal Tharuka",
  roles: ["Software Engineer"],
  description:
    "I am a second-year student studying software engineering, and I have a tremendous interest in technology and its ability to solve issues in the real world. With a strong background in programming languages including Javascript, Java, Python, and web development languages, I have a knowledge of object-oriented principles and software development techniques. I am constantly keen to learn new technologies and programming languages to maintain my current knowledge and abilities with the most recent technological advancements.",
  github: "https://github.com/Tharukax",
  resume:
    "https://drive.google.com/file/d/1BZL4yRQEOOsni8OxQI2CPeJIOA3VupWW/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/nirmal-tharuka/",
  twitter: "",
  insta: "",
  facebook: "",
};

export const skills = [
  {
    title: "Frontend & Backend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Node Js",
        image:
        node,
      },
      {
        name: "PHP",
        image:
        php,
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Python",
        image:
        python,
      },
      {
        name: "Java",
        image:
          java,
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Progression Outcome",
    description:
      "This Project focused on providing a solution to producing grades based on a system followed by a university.There are two version of the project one called Staff Version and another one called Student version.Use python as the core language to implement this command Line Interface project.",
    image:
      Progression,
    tags: ["Python"],
    category: "Web Application",
    github: "",
  },
  {
    id: 1,
    title: "Theater Ticket Booking System",
    description:
      "Movie Ticket Booking System to manage the details of Seats, Booking, Payment and Customer. It manages all the information about Seats, Customers. This system including functionalities as managing tickets and keeping track of tickets. This project mainly based on Java and Object Oriented Programming.",
    image:
    Ticket,
    tags: ["Java"],
    category: "Web Application",
    github: "",
  },
  {
    id: 2,
    title: "Online Shopping Manager System",
    description:
      "Online Shopping System is developed using Java,OOP,and JavaSwing. This project contains the admin side and user side where a user can view shopping items details, sign up, and buy products. While the admin can add items and users, products, manage them, and so on. The system includes functionalities such as managing products keeping track of products and purchasing products.",
    image:
    Onlineshopping,
    tags: ["Java", "OOP", "Java Swing"],
    category: "Web Application",
    github: "",
  },
  {
    id: 3,
    title: "Sri Lankan Tourism",
    description:
      "This project produce a nonresponsive creative website focusing on the tourism sector of Sri Lanka. The site contained different pages linked mentioning the attractive places that can be visited by the tourists. apart from that it also contained quiz page, site map, feedback page,Store page, about us page, and home page.this project basically based on HTML · Cascading Style Sheets (CSS) · JavaScript ·",
    image:
    Toursim,
    tags: ["Html", "CSS", "Js"],
    category: "Web Application",
    github: "",
  },
  {
    id: 4,
    title: "Real Estate ",
    description:
      "",
    image:
    RealEstate,
    tags: ["Node JS"],
    category: "Web Application",
    github: "",
  },
  {
    id: 4,
    title: "Dice Game",
    description:
      "",
    image:
    Dice,
      tags: ["Html", "CSS", "Js"],
    category: "Game",
    github: "",
  },
];

