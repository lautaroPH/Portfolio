import emoji from "react-easy-emoji";

import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import sass from "./assets/images/sass.png";
import tailwind from "./assets/images/tailwind.png";
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

import musicopyImg from "./assets/images/Musicopy-image.png";
import blogImg from "./assets/images/React-blog-image.png";
import searchGifImg from "./assets/images/Search-gif.png";
import todoappImg from "./assets/images/Todoapp-image.png";
import memotestPokemonImg from "./assets/images/Memotest-image.png"

const illustration = {
  animated: true
};

const greeting = {
  username: "Lautaro Perez H.",
  title: "Hi all, I'm Lautaro",
  subTitle: emoji(
    "A passionate Front-end Developer with backend knowledge 🚀 having an experience of building Webs with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const aboutMe = {
  title: "About me",
  subtitle: "Lautaro Perez Herrera",
  description:
    "My name is Lautaro Perez Herrera a Front-end Developer from Argentina. I am 17 years old. I like solving problems, teamworking and carrying out web projects. I haven't got any job experiencie yet. I like self-taught learning and I have no problem to using new technologies, getting out of my comfort zone."
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

const projects = [
  {
    title: "Musicopy",
    image: musicopyImg,
    urlPage: "https://musicopy-02.vercel.app",
    urlCode: "https://github.com/lautaroPH/musicopy"
  },
  {
    title: "Blog",
    image: blogImg,
    urlPage: "https://lautaroph.github.io/react-blog/",
    urlCode: "https://github.com/lautaroPH/react-blog"
  },
  {
    title: "Todoapp",
    image: todoappImg,
    urlPage: "https://lautaroph.github.io/Todo-app/",
    urlCode: "https://github.com/lautaroPH/Todo-app"
  },
  {
    title: "Search Gifs",
    image: searchGifImg,
    urlPage: "https://lautaroph.github.io/react-gifexpertapp/",
    urlCode: "https://github.com/lautaroPH/react-gifexpertapp"
  },
  {
    title: "Memotest Pokemon",
    image: memotestPokemonImg,
    urlPage: "https://lautaroph.github.io/memotestPokemon/",
    urlCode: "https://github.com/lautaroPH/memotestPokemon"
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
      skillName: "Tailwind",
      image: tailwind
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
  aboutMe,
  greeting,
  socialMediaLinks,
  skillsSection,
  contactInfo,
  socialMediaLinksToContact,
  projects
};
