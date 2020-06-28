import utilities from '../../helpers/utilities';
import './bio.scss';

const bioArray = [
  {
    imageLink: './images/DSC_1132_square.jpg',
    title: 'Kelsey Creel',
    // eslint-disable-next-line max-len
    bioContent1: 'Project manager turned software developer. My experience has led to an exposure of a wide range of areas, including agile development, product design, client management, implementations and process improvement. Passionate about problem solving and innovative solutions.',
    bioContent3: '',
  },
];

const printBio = () => {
  let stringtoPrint = '';
  for (let i = 0; i < bioArray.length; i += 1) {
    stringtoPrint += `
      <div class="card mb-3 justify-content-center border-0">
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src="https://raw.githubusercontent.com/kelseycreel/PersonalBioSite/master/images/DSC_1132.jpg" class="card-img bio-img"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${bioArray[i].title}</h2>
            <p class="card-text">${bioArray[i].bioContent1}</p>
          </div>
        </div>
      </div>
    </div>`;
  }
  utilities.printToDom('bioPage', stringtoPrint);
};

export default { printBio };
