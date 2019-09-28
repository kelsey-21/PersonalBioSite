import tech from './tech.js'
import project from './projects.js'
import bio from './bio.js'

const navClick = (event) => {
    const navType = event.target.id;
        if (navType === 'bio') {
            bio.printBio();
            $( "#technologiesPage" ).empty();
            $( "#projectsPage" ).empty();
        } else if (navType === 'technologies') {
            tech.printTech(); 
            $( "#bioPage" ).empty();
            $( "#projectsPage" ).empty();
        } else if (navType === 'projects') {
            project.printProjectCards(); 
            $( "#technologiesPage" ).empty();
            $( "#bioPage" ).empty();    
        }
};

const runNavClick = () => {
    document.getElementById('clickEvent').addEventListener('click', navClick, true)
}

export default { runNavClick }