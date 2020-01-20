import utilities from '../../helpers/utilities';
import './bio.scss';

const bioArray = [
  {
    imageLink: './images/DSC_1132.jpg',
    title: 'Kelsey Creel',
    // eslint-disable-next-line max-len
    bioContent1: 'Before becoming a software developer, I was working in project management for a small healthcare technology company in Nashville. My curiosity for software development was sparked by conversations with coworkers and grew as more technical based projects came my way. During my time as a project manager, I often strategized best practices and processes with my team. I was also responsible for training new employees on these practices and processes.',
    // eslint-disable-next-line max-len
    bioContent2: 'As I came to better understand technology and how it could and should be used, I wanted be more involved on the creation side. My time at Nashville Software School has taught me to look at the problems technology raises differently. Project management follows a predictable pattern, but development is innovative and challenging. Finding the solution to the challenge in front of me is extremely fulfilling and I look forward to even more in the future.',
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
            <p class="card-text">${bioArray[i].bioContent2}</p>
          </div>
        </div>
      </div>
    </div>`;
  }
  utilities.printToDom('bioPage', stringtoPrint);
};

export default { printBio };
