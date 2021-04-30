import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cliff | Senior Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Clifford Harvey',
  subtitle: 'Senior Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'upwisefull.png',
    title: 'UpWise',
    info: '',
    info2: '',
    url: 'https://www.upwise.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'noblefits.png',
    title: 'Noble Fits',
    info: '',
    info2: '',
    url: 'https://noble-live.herokuapp.com/',
    repo: 'https://github.com/deeharvey06/noblefits', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smartbrain.png',
    title: 'Smart Brain',
    info: '',
    info2: '',
    url: 'https://deeharvey06.github.io/smartbrain/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cliffharvey06@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/clifford-harvey/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/deeharvey06',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
