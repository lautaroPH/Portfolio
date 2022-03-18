import emoji from "react-easy-emoji";

import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import sass from "./assets/images/sass.png";
import javascript from "./assets/images/javascript.png";
import typescript from "./assets/images/typescript.png";
import react from "./assets/images/react.png";
import nextLogo from "./assets/images/nextjs.png";
import node from "./assets/images/node.png";
import mongodb from "./assets/images/mongodb.png";
import npm from "./assets/images/npm.png";
import firebase from "./assets/images/firebase.png";
import git from "./assets/images/git.png";
import express from "./assets/images/express.png";
import graphql from "./assets/images/graphql.png";

import musicopyImg from "./assets/images/Musicopy-image.png";
import blogImg from "./assets/images/React-blog-image.png";
import memotestPokemonImg from "./assets/images/Memotest-image.png";
import rickAndMorty from "./assets/images/Rick-and-Morty.png";

const illustration = {
  animated: true
};

const greeting = {
  username: "Lautaro Perez H.",
  title: "Hi all, I'm Lautaro",
  subTitle: emoji(
    "A passionate Front-end Developer with backend knowledge from Argentina 🚀 having an experience of building Webs with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. I like problem solving, teamworking, self-taught learning and carrying out web projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/lautaroPH",
  linkedin: "https://www.linkedin.com/in/lautaroperezh/",
  gmail: "lautaroph@gmail.com",
  facebook: "https://www.facebook.com/lautaro.perezh/",
  display: true
};

const socialMediaLinksToContact = {
  github: "https://github.com/lautaroPH",
  linkedin: "https://www.linkedin.com/in/lautaroperezh/",
  gmail: "lautaroph@gmail.com",
  facebook: "https://www.facebook.com/lautaro.perezh/",
  whatsapp: "https://wa.me/5492213641472",
  display: true
};

const mainProjects = [
  {
    title: "Blog",
    image: blogImg,
    urlPage: "https://lautaroph.github.io/react-blog/",
    urlCode: "https://github.com/lautaroPH/react-blog"
  },
  {
    title: "Memotest Pokemon",
    image: memotestPokemonImg,
    urlPage: "https://lautaroph.github.io/memotestPokemon/",
    urlCode: "https://github.com/lautaroPH/memotestPokemon"
  },
  {
    title: "Musicopy",
    image: musicopyImg,
    urlPage: "https://musicopy-02.vercel.app",
    urlCode: "https://github.com/lautaroPH/musicopy"
  }
];

const moreProjects = [
  {
    title: "Rick and Morty",
    image: rickAndMorty,
    urlPage: "https://rick-and-morty-theta-three.vercel.app",
    urlCode: "https://github.com/lautaroPH/rickAndMorty"
  }
];

const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase")
  ],

  softwareSkills: [
    {
      skillName: "Html-5",
      image: html
    },
    {
      skillName: "Css3",
      image: css
    },
    {
      skillName: "Sass",
      image: sass
    },
    {
      skillName: "JavaScript",
      image: javascript
    },
    {
      skillName: "Typescript",
      image: typescript
    },
    {
      skillName: "Reactjs",
      image: react
    },
    {
      skillName: "Nextjs",
      image: nextLogo
    },
    {
      skillName: "Nodejs",
      image: node
    },
    {
      skillName: "Express",
      image: express
    },
    {
      skillName: "MongoDB",
      image: mongodb
    },
    {
      skillName: "Graphql",
      image: graphql
    },
    {
      skillName: "Npm",
      image: npm
    },
    {
      skillName: "Firebase",
      image: firebase
    },
    {
      skillName: "Git",
      image: git
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️")
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  contactInfo,
  socialMediaLinksToContact,
  mainProjects,
  moreProjects
};
