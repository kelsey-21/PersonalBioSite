import utilities from '../../helpers/utilities';
import singleProject from './singleProject/singleProject';
import './projects.scss';

const projects = [
  {
    title: 'Starjets website',
    id: 'starjets-project-card',
    img1: 'images/starjets1.PNG',
    img2: 'images/starjets2.PNG',
    img3: 'images/starjets3.PNG',
    description: 'We worked together as a group to create a website for our assigned band. There are 4 pages: home, about us, music and tour pages.',
    technologiesUsed: 'CSS, HTML and Javascript.',
    available: true,
    url: 'https://github.com/kelseycreel/starjets',
    githubUrl: 'https://github.com/kelseycreel/product-cards',
  },
  {
    title: 'Pinterest',
    img1: 'images/Pinterest1.JPG',
    img2: 'images/Pinterest2.JPG',
    img3: 'images/Pinterest3.JPG',
    // eslint-disable-next-line max-len
    description: 'Pinterest is an individual project with full CRUD (create, read, update and delete) using firebase API and vanilla javascript. The user is able to organize their interests on organized "boards". Each board has pins which displays a picture of the item. The user is able to re-organize any pin or board if a mistake is made or an update is needed.',
    technologiesUsed: 'Firebase, vanilla JS, SCSS, Jquery',
    available: true,
    url: 'https://pinterest-6f913.firebaseapp.com/',
    githubUrl: 'https://github.com/kelseycreel/pinterest',
  },
  {
    title: 'Jurassic World',
    img1: 'images/Jurassic-World1.JPG',
    // eslint-disable-next-line max-len
    description: 'Jurrassic World is a group project with full CRUD (create, read, update and delete) using firebase API and vanilla javascript. Each team member completed CRUD on a collection. Upon login, the user is able to interact with items in the Jurassic World Theme Park items - dinosaurs, vendors, rides, and staff. There is also a cron job that sets off a chaos monkey.',
    technologiesUsed: 'Firebase, vanilla JS, SCSS, Jquery, Cron',
    available: true,
    url: 'https://github.com/nss-evening-cohort-10/nutshell-jurassic-world/tree/lc-settingMonkeyTime',
    githubUrl: 'https://github.com/nss-evening-cohort-10/nutshell-jurassic-world/tree/04a1de1bd3dcade715b27b2be8c2d01e3b75d115',
  },
  {
    title: 'Sports Roster',
    img1: '',
    description: '',
    technologiesUsed: 'React, Firebase, SCSS',
    available: false,
    url: '',
    githubUrl: '',
  },
  {
    title: 'Capstone',
    screenshot: '',
    description: '',
    technologiesUsed: '',
    available: false,
    url: '',
    githubUrl: '',
  },
];

const printProjectCards = () => {
  let stringtoPrint = '<div class="project-cards d-flex flex-row flex-wrap bd-highlight justify-content-center">';
  projects.forEach((project) => {
    if (project.available) {
      stringtoPrint += singleProject.singleProjectCard(project);
    }
  });
  stringtoPrint += '</div>';
  utilities.printToDom('projectsPage', stringtoPrint);
};

export default { printProjectCards };
