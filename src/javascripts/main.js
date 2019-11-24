import projects from './components/projects/projects';
import click from './components/click/click';

const init = () => {
  projects.printProjectCards();
  click.runNavClick();
};

init();
