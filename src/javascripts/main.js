import projects from './components/projects/projects';
import tech from './components/tech/tech';
import bio from './components/bio/bio';

import '../styles/main.scss';
import header from './components/header/header';


const init = () => {
  header.printHeader();
  projects.printProjectCards();
  tech.printTech();
  bio.printBio();
};

init();
