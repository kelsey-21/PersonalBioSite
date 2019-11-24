import utilities from '../../helpers/utilities';
import './bio.scss';

const bioArray = [
  {
    imageLink: './images/DSC_1132.jpg',
    title: 'Kelsey Creel',
    bioContent: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc scelerisque viverra mauris in aliquam. Maecenas sed enim ut sem. Est sit amet facilisis magna etiam tempor orci eu. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Placerat vestibulum lectus mauris ultrices. Congue eu consequat ac felis donec et odio pellentesque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Eu turpis egestas pretium aenean. Augue lacus viverra vitae congue. Volutpat blandit aliquam etiam erat velit scelerisque. Tortor aliquam nulla facilisi cras. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Ultrices vitae auctor eu augue ut lectus arcu bibendum.</p><p>Elit sed vulputate mi sit. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Duis tristique sollicitudin nibh sit amet. At erat pellentesque adipiscing commodo elit. Eleifend quam adipiscing vitae proin sagittis. Feugiat nisl pretium fusce id velit. A iaculis at erat pellentesque. Tellus id interdum velit laoreet id donec. Diam volutpat commodo sed egestas. Consectetur a erat nam at lectus urna.</p>',
  },
];

// TODO: Work on this yo
// My love for technology began at a young age. I was always the person my family asked to help setup any new piece of technology, whether it was a new laptop or television system. Over the years, things have drastically changed! While studying at  Vanderbilt, I dabbled in the technology realm, but really felt like I missed out on the full scope of technology classes and majors. With my newly hired post-grad position at a healthcare technology company here in Nashville, I really began to explore a deeper understanding of what it was to work at small tech company. And I truly loved it. But I wanted more, and I wanted to know more.<p> I started to sit with members of our technology team and ask probably what were annoyingly basic questions. But I started learning, and kept learning. I discovered Nashville Software School from a couple coworkers and the rest was, as they say, history.

const printBio = () => {
  let stringtoPrint = '';
  for (let i = 0; i < bioArray.length; i += 1) {
    stringtoPrint += `
            <div class="card mb-3 justify-content-center">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${bioArray[i].imageLink}" class="card-img" alt="${bioArray[i].title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title">${bioArray[i].title}</h2>
                  <p class="card-text">${bioArray[i].bioContent}</p>
                </div>
              </div>
            </div>
          </div>`;
  }
  utilities.printToDom(stringtoPrint, 'bioPage');
};

export default { printBio };
