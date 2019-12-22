import utilities from '../../helpers/utilities';
import './tech.scss';

const technologiesUsed = [
  {
    technology: 'HTML',
    iconLink: 'https://unik.al/unik_content/uploads/2018/12/html-logo-png-2.png',
  },
  {
    technology: 'CSS',
    iconLink: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png',
  },
  {
    technology: 'JAVASCRIPT',
    iconLink: 'https://jermerf.com/images/js.png',
  },
  {
    technology: 'GIT',
    iconLink: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  },
  {
    technology: 'Visual Studio',
    iconLink: 'https://www.stickpng.com/assets/images/58482afbcef1014c0b5e4a21.png',
  },
  {
    technology: 'Bootstrap',
    iconLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    technology: 'Firebase',
    iconLink: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png',
  },
  {
    technology: 'React',
    iconLink: 'https://cdn.worldvectorlogo.com/logos/react.svg',
  },
];

const printTech = () => {
  let stringtoPrint = '<div class="bioTech-title-background"><h3 class="bioTech-title">Technologies<span class="yellow">.</span></h3></div>';
  stringtoPrint += '<div class="bioTech d-flex flex-row flex-wrap justify-content-center align-content-center">';
  for (let i = 0; i < technologiesUsed.length; i += 1) {
    stringtoPrint += '<div class="single-technology d-flex flex-column justify-content-center align-items-center col-3">';
    stringtoPrint += `<img src="${technologiesUsed[i].iconLink}" alt="${technologiesUsed[i].technology}"/>`;
    stringtoPrint += `<p class="technology-text">${technologiesUsed[i].technology}</p>`;
    stringtoPrint += '</div>';
  }
  stringtoPrint += '</div>';
  utilities.printToDom('technologiesPage', stringtoPrint);
};

export default { printTech };
