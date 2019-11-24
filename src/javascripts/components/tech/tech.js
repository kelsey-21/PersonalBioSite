import utilities from '../../helpers/utilities';
import './tech.scss';

const technologiesUsed = [
  {
    technology: 'HTML',
  },
  {
    technology: 'CSS',
  },
  {
    technology: 'JAVASCRIPT',
  },
  {
    technology: 'TBD',
  },
  {
    technology: 'TBD',
  },
  {
    technology: 'TBD',
  },
];

const printTech = () => {
  let stringtoPrint = '<div class="row justify-content-center">';
  for (let i = 0; i < technologiesUsed.length; i += 1) {
    stringtoPrint += `
      <div class="bioTech" class="col">
        <h1>${technologiesUsed[i].technology}</h1>
      </div>`;
  }
  stringtoPrint += '</div>';
  utilities.printToDom(stringtoPrint, 'technologiesPage');
};

export default { printTech };
