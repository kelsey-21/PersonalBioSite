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
    title: 'Pet Adoption',
    screenshot: 'images/pet-adoption.png',
    description: 'This project prints cards onto the DOM using JS.',
    technologiesUsed: 'CSS, vanilla JS and HTML.',
    available: false,
    url: 'https://github.com/kelseycreel/pet-adoption',
    githubUrl: 'https://github.com/kelseycreel/pet-adoption',
  },
  {
    title: '',
    screenshot: '',
    description: '',
    technologiesUsed: '',
    available: false,
    url: '',
    githubUrl: '',
  },
  {
    title: '',
    screenshot: '',
    description: '',
    technologiesUsed: '',
    available: false,
    url: '',
    githubUrl: '',
  },
  {
    title: '',
    screenshot: '',
    description: '',
    technologiesUsed: '',
    available: false,
    url: '',
    githubUrl: '',
  },
  {
    title: '',
    screenshot: '',
    description: '',
    technologiesUsed: '',
    available: false,
    url: '',
    githubUrl: '',
  },
  {
    title: '',
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
