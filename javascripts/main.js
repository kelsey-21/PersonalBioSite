import projects from './components/projects.js'
import click from './components/click.js'
import tech from './components/tech.js'

const init = () => {
    projects.printProjectCards(); 
    click.runNavClick();
};

init();