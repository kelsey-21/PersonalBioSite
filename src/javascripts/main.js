import projects from './components/projects/projects';
import click from './components/click/click';
import tech from './components/tech/tech';
import bio from './components/bio/bio';

const init = () => {
  projects.printProjectCards();
  tech.printTech();
  bio.printBio();
  click.runNavClick();
};

init();
