import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Nasir',
  subtitle: "I'm a Computer Science Student",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.png',
  paragraphOne:
    'I am a Computer Science Student Currently Pursuing Master Of Computer Application at Birla Institute Of Technology Mesra ,Jaipur',
  paragraphTwo:
    'I like Making Creative and Fun things using Code ,Currently enhancing my Knowledge on MERN Stack and React Native',
  paragraphThree: 'Looking For Opportunities to Implement My Knowledge in Real World Projects',
  resume: 'https://drive.google.com/file/d/1A_QA7QGdQluXun2DA1FreEQDWnt42mgk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movie_app.png',
    title: 'Movie App-Netflix Clone',
    info: 'This Front-End App Render Movies List as A Styled React Component',
    info2:
      'This App uses Modern React Features Like Hooks ,Functional Components and Data is fetched from TMDB API using Axios',
    url: 'https://movie-app-a94b4.web.app/',
    repo: 'https://github.com/nasir-khan01/Movie-App/blob/main/README.md', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-19_tracker.png',
    title: 'Covi-Track',
    info: 'Covi-Track is a Covid-19 Tracker that Displays important Insights like Covid-19 cases ,recoveries and Deaths Data of multiple countries on a World Map',
    info2: 'This App uses disease.sh API to Display Data and Chart.js to Display Charts',
    url: 'https://covi-track-30cbd.web.app/',
    repo: 'https://github.com/nasir-khan01/CoviTrack', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mail2nasirkhan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nasir-khan01/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nasir-khan01',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/khan_nasir01',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
