import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';
import singleProject from './singleProject/singleProject';
import './projects.scss';


const printProjectCards = () => {
  let stringtoPrint = '<div class="project-cards d-flex flex-row flex-wrap bd-highlight justify-content-center">';
  projectsData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        if (project.available) {
          stringtoPrint += singleProject.singleProjectCard(project);
        }
        stringtoPrint += '</div>';
        utilities.printToDom('projectsPage', stringtoPrint);
      });
    })
    .catch((error) => console.error(error));
};

export default { printProjectCards };
