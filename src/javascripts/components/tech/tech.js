import utilities from '../../helpers/utilities';
import './tech.scss';

const technologiesUsed = [
  {
    technology: 'REACT',
    iconLink: 'https://as2.ftcdn.net/jpg/03/17/17/97/500_F_317179733_lJoESnUUGSRTUMK4dYMlCGDj7r58m9gO.jpg',
    Link1: 'TEST',
    Link2: 'TEST',
  },
  {
    technology: 'C#/.NET',
    iconLink: 'https://as2.ftcdn.net/jpg/01/43/13/43/500_F_143134352_oLaa3Dej0MwUnVrPs6GF1uIr2V9jGsWu.jpg',
    Link1: 'TEST',
    Link2: 'TEST',
  },
  {
    technology: 'JAVASCRIPT',
    iconLink: 'https://as2.ftcdn.net/jpg/03/12/22/63/500_F_312226316_Piw2xpzYa3x9dIFJ3yBPfxbCDLOe4IVJ.jpg',
    Link1: 'TEST',
    Link2: 'TEST',
  },
  {
    technology: '???',
    iconLink: 'https://as1.ftcdn.net/jpg/01/96/70/28/500_F_196702863_X6PX2Fo0sSgrpXY2f9CmhlrV4EHOkUD7.jpg',
    Link1: 'TEST',
    Link2: 'TEST',
  },
];

const printTech = () => {
  let stringtoPrint = '<div class="bioTech d-flex flex-row flex-wrap justify-content-center align-content-center">';
  for (let i = 0; i < technologiesUsed.length; i += 1) {
    stringtoPrint += '<div class="single-technology">';
    stringtoPrint += `<img src="${technologiesUsed[i].iconLink}" alt="${technologiesUsed[i].technology}"/>`;
    stringtoPrint += `<div class="dropdown show">
  <a class="btn btn-outline dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  ${technologiesUsed[i].technology}
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href=${technologiesUsed[i].Link1}>Action</a>
    <a class="dropdown-item" href=${technologiesUsed[i].Link2}>Another action</a>
  </div>
</div></div>`;
  }
  stringtoPrint += '</div>';
  utilities.printToDom('technologiesPage', stringtoPrint);
};

export default { printTech };

// stringtoPrint += '<div class="single-technology">';
//     stringtoPrint += `<img src="${technologiesUsed[i].iconLink}" alt="${technologiesUsed[i].technology}"/>`;
//     stringtoPrint += `<div class="dropdown-menu"><p class="technology-text">${technologiesUsed[i].technology}</p>`;
//     stringtoPrint += `<a class="dropdown-item" href=${technologiesUsed[i].Link1}>${technologiesUsed[i].Link1}</a>`;
//     stringtoPrint += `<a class="dropdown-item" href=${technologiesUsed[i].Link2}>${technologiesUsed[i].Link2}</a>`;
//     stringtoPrint += '</div></div>
