// array of projects
// A good project description includes 'the what', 'the why', and 'the how'.
// Towards the latter part of the class, you will learn how to host your projects 
// until then, just use your GitHub link in this spot as well.
 
const projectsArray = [
    {
        title: 'Product Cards', 
        screenshot: 'images/product-cards.PNG', 
        description: 'This project prints cards onto the DOM using JS.', 
        technologiesUsed: 'CSS, vanilla JS and HTML.',
        available: true,
        url: 'https://github.com/kelseycreel/product-cards', 
        githubUrl: 'https://github.com/kelseycreel/product-cards'
      },
      {
        title: 'Pet Adoption', 
        screenshot: '', 
        description: 'This project prints cards onto the DOM using JS.', 
        technologiesUsed: 'CSS, vanilla JS and HTML.',
        available: true,
        url: 'https://github.com/kelseycreel/pet-adoption', 
        githubUrl: 'https://github.com/kelseycreel/pet-adoption'
      },
      {
        title: '', 
        screenshot: '', 
        description: '', 
        technologiesUsed: '',
        available: false,
        url: '', 
        githubUrl: ''
      },
      {
        title: '', 
        screenshot: '', 
        description: '', 
        technologiesUsed: '',
        available: false,
        url: '', 
        githubUrl: ''
      },
      {
        title: '', 
        screenshot: '', 
        description: '', 
        technologiesUsed: '',
        available: false,
        url: '', 
        githubUrl: ''
      },
      {
        title: '', 
        screenshot: '', 
        description: '', 
        technologiesUsed: '',
        available: false,
        url: '', 
        githubUrl: ''
      },
      {
        title: '', 
        screenshot: '', 
        description: '', 
        technologiesUsed: '',
        available: false,
        url: '', 
        githubUrl: ''
      },
] 


const bioArray = [
    {
    imageLink: './images/DSC_1132.jpg',
    title: 'Kelsey Creel',
    bioContent: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc scelerisque viverra mauris in aliquam. Maecenas sed enim ut sem. Est sit amet facilisis magna etiam tempor orci eu. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Placerat vestibulum lectus mauris ultrices. Congue eu consequat ac felis donec et odio pellentesque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Eu turpis egestas pretium aenean. Augue lacus viverra vitae congue. Volutpat blandit aliquam etiam erat velit scelerisque. Tortor aliquam nulla facilisi cras. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Ultrices vitae auctor eu augue ut lectus arcu bibendum.</p><p>Elit sed vulputate mi sit. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Duis tristique sollicitudin nibh sit amet. At erat pellentesque adipiscing commodo elit. Eleifend quam adipiscing vitae proin sagittis. Feugiat nisl pretium fusce id velit. A iaculis at erat pellentesque. Tellus id interdum velit laoreet id donec. Diam volutpat commodo sed egestas. Consectetur a erat nam at lectus urna.</p>',
    },
]

// TODO: Work on this yo
// My love for technology began at a young age. I was always the person my family asked to help setup any new piece of technology, whether it was a new laptop or television system. Over the years, things have drastically changed! While studying at  Vanderbilt, I dabbled in the technology realm, but really felt like I missed out on the full scope of technology classes and majors. With my newly hired post-grad position at a healthcare technology company here in Nashville, I really began to explore a deeper understanding of what it was to work at small tech company. And I truly loved it. But I wanted more, and I wanted to know more.<p> I started to sit with members of our technology team and ask probably what were annoyingly basic questions. But I started learning, and kept learning. I discovered Nashville Software School from a couple coworkers and the rest was, as they say, history.

const technologiesUsed = [
    {
        technology: 'HTML'
    },
    {
        technology: 'CSS'
    },
    {
        technology: 'JAVASCRIPT'
    },
    {
        technology: 'TBD'
    },
    {
        technology: 'TBD'
    },
    {
        technology: 'TBD'
    }
]


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const printProjectCards = (projectArr) => {
    let stringtoPrint = '';
    for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i].available) {
            stringtoPrint += `
            <div class="cards col-sm-">
            <h2><a href="${projectArr[i].url}">${projectArr[i].title}</a></h2>
            <img src="${projectArr[i].screenshot}" alt="${projectArr[i].title}" />
            <h5>${projectArr[i].technologiesUsed}</h5>
            <p>${projectArr[i].description}</p>
            <p><a href="${projectArr[i].githubUrl}">${projectArr[i].githubUrl}</a></p>
            </div>
            `
        } 
        printToDom(stringtoPrint, 'projectsPage')
    }
}

printProjectCards(projectsArray);     

const printBio = (bioArr) => {
    let stringtoPrint = '';
    for (let i = 0; i < bioArr.length; i++) {
            stringtoPrint += `
            <div class="card mb-3 justify-content-center">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${bioArr[i].imageLink}" class="card-img" alt="${bioArr[i].title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title">${bioArr[i].title}</h2>
                  <p class="card-text">${bioArr[i].bioContent}</p>
                </div>
              </div>
            </div>
          </div>
            `
        } 
        printToDom(stringtoPrint, 'bioPage')
    }

const printTech = (techArr) => {
    let stringtoPrint = '<div class="row justify-content-center">';
    for (let i = 0; i < techArr.length; i++) {
            stringtoPrint += `
            <div class="bioTech" class="col">
                <h1>${techArr[i].technology}</h1>
            </div>
            `
        } 
        stringtoPrint += '</div>'
        printToDom(stringtoPrint, 'technologiesPage')
    }    

const navClick = (event) => {
    // const petCards = document.getElementById('petCards')
    // if (petCards.innerHTML === '') {    
    const navType = event.target.id;
    if (navType === 'bio') {
        console.log(document.getElementById('bioPage').innerHTML);
        printBio(bioArray);
        $( "#technologiesPage" ).empty();
        $( "#projectsPage" ).empty();
    } else if (navType === 'technologies') {
        printTech(technologiesUsed); 
        $( "#bioPage" ).empty();
        $( "#projectsPage" ).empty();
    } else if (navType === 'projects') {
        printProjectCards(projectsArray); 
        $( "#technologiesPage" ).empty();
        $( "#bioPage" ).empty();    
    }
};

document.getElementById('bio').addEventListener('click', navClick);
document.getElementById('technologies').addEventListener('click', navClick);
document.getElementById('projects').addEventListener('click', navClick);