// import $ from 'jquery';
import tech from '../tech/tech';
import project from '../projects/projects';
import bio from '../bio/bio';

const navClick = (event) => {
  const navType = event.target.id;
  if (navType === 'bio') {
    bio.printBio();
  } else if (navType === 'technologies') {
    tech.printTech();
  } else {
    project.printProjectCards();
  }
};

const runNavClick = () => {
  document.getElementById('clickEvent').addEventListener('click', navClick, true);
};

// document.getElementById('bio').addEventListener('click', navClick);
// document.getElementById('technologies').addEventListener('click', navClick);
// document.getElementById('projects').addEventListener('click', navClick);

export default { runNavClick };
