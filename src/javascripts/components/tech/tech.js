import utilities from '../../helpers/utilities';
import './tech.scss';

const technologiesUsed = [
  {
    technology: 'HTML',
    iconLink: 'https://unik.al/unik_content/uploads/2018/12/html-logo-png-2.png',
  },
  {
    technology: 'CSS',
    iconLink: 'https://p7.hiclipart.com/preview/509/571/818/cascading-style-sheets-logo-css3-html-web-development-world-wide-web-thumbnail.jpg',
  },
  {
    technology: 'JAVASCRIPT',
    iconLink: 'https://mpng.pngfly.com/20181209/yvf/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d82819a4963.228658921544389249632.jpg',
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
    technology: 'React',
    iconLink: 'https://cdn.worldvectorlogo.com/logos/react.svg',
  },
];

const printTech = () => {
  let stringtoPrint = '<div class="bioTech-title-background"><h3 class="bioTech-title">Technologies</h3></div>';
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
