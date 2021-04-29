import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shakeel Khan | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Welcome! I'm",
  name: 'Shakeel Khan',
  subtitle: ' software engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Shak.jpg',
  paragraphOne:
    "Hello! My name is Mohammed but I go by Shakeel. I enjoy creating products and experiences that are enjoyed by many people! My interest in development started when I used to mod video games on the Xbox 360. Turns out that playing video games wasn't a waste of time!",
  paragraphTwo:
    "Nowadays I work at a start-up called iMovR where I created and lead the software engineering team. My main focus is to develop accessible, inclusive, and safe products for iMovRs' clients.",
  paragraphThree: 'o/',
  resume: 'https://skhan16.github.io/Resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'iphone-11-Control-Page.png',
    title: 'iMovR desk controller app',
    info:
      'Designed and developed an iOS app that uses a custom built API that controls iMovR products via bluetooth. ',
    info2: '',
    url: 'https://apps.apple.com/us/app/imovr-ergodynamics/id1561075469',
    repo: 'https://github.com/sKhan16/iMovRSwift', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blyp-poster.jpg',
    title: 'Blyp',
    info:
      'Developed a mobile social media app that allowed users to curate their digital footprint after they passed away.',
    info2: '',
    url: '',
    repo: 'https://github.com/sKhan16/Blyp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UWFgc.jpg',
    title: 'UW Fighting Game Club',
    info: "Was a part of the founding of UW's first fighting game club. ",
    info2:
      'We hosted tournaments for various fighting games both in person and online to foster a positive community at UW.',
    url: 'https://www.facebook.com/fgc.wga/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'khansk97@uw.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shakeel-khan-29b79a157/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sKhan16',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
