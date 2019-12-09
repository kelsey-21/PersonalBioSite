import './header.scss';
import plus from './assets/arrow.png';
import arrows from './assets/3-arrows.png';
import circle from './assets/circle.png';
import linecirc from './assets/line-circle.png';
import line from './assets/line.png';
import kelsey from './assets/kelsey.jpg';
import utilities from '../../helpers/utilities';

const printHeader = () => {
  let domString = '<div id="header-div">';
  domString += `<img class="img-plus-1" src="${plus}" alt="plus" />`;
  domString += `<img class="img-plus-2" src="${plus}" alt="plus" />`;
  domString += `<img class="img-arrows img-arrows-1" src="${arrows}" alt="arrows" />`;
  domString += `<img class="img-arrows img-arrows-2" src="${arrows}" alt="arrows" />`;
  domString += `<img class="img-circle" src="${circle}" alt="circle" />`;
  domString += `<img class="img-linecirc" src="${linecirc}" alt="line circle" />`;
  domString += `<img class="img-line-horizontal" src="${line}" alt="line" />`;
  domString += `<img class="img-line-vertical" src="${line}" alt="line" />`;
  domString += `<img class="img-kelsey" src="${kelsey}" alt="kelsey" />`;
  domString += '<div class="name d-flex flex-row justify-content-between"><h1 class="h1-kelsey">Kelsey</h1>';
  domString += '<h1 class="h1-creel">Creel</h1></div></div>';
  console.log(domString);
  utilities.printToDom('main-header-area', domString);
};

export default { printHeader };
