module.exports = {
  siteTitle: 'April Li | Portfolio',
  siteDescription: 'April Li is a software engineer and entrepreneur based in San Francisco Bay',
  siteKeywords: 'April Li, Elephant Box, elephant-box, software engineer, full stack, frontend',
  siteUrl: 'https://www.april-li.com',
  siteLanguage: 'en_US',
  name: 'April Li',
  location: 'San Francisco, CA',
  email: 'greatday4april@gmail.com',
  github: 'https://www.github.com/greatday4april',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://www.github.com/greatday4april',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/april-li-37161197',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
