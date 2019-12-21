import './header.scss';
import utilities from '../../helpers/utilities';

const printHeader = () => {
  let domString = '<div id="header-div">';
  domString += '<div class="name d-flex flex-row justify-content-between"><h1 class="h1-kelsey">Kelsey Creel</h1>';
  utilities.printToDom('main-header-area', domString);
};

export default { printHeader };
