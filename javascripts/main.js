import projects from './components/projects.js'
import click from './components/click.js'

const init = () => {
    projects.printProjectCards(); 
    click.runNavClick();
};

init();