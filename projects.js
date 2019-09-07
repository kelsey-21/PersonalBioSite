// array of projects
// A good project description includes 'the what', 'the why', and 'the how'.
// Towards the latter part of the class, you will learn how to host your projects 
// until then, just use your GitHub link in this spot as well.
 
const projectsArray = [
    {
        title: 'Product Cards', 
        screenshot: 'images/product-cards.PNG', 
        description: 'This is a cool project I made to show CSS, vanilla JS and HTML.', 
        technologiesUsed: 'CSS, vanilla JS and HTML.',
        available: true,
        url: 'https://github.com/kelseycreel/product-cards', 
        githubUrl: 'https://github.com/kelseycreel/product-cards'
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
    bioContent: '<p>My love for technology began at a young age. I was always the person my family asked to help setup any new piece of technology, whether it was a new laptop or television system. Over the years, things have drastically changed! While studying at  Vanderbilt, I dabbled in the technology realm, but really felt like I missed out on the full scope of technology classes and majors. With my newly hired post-grad position at a healthcare technology company here in Nashville, I really began to explore a deeper understanding of what it was to work at small tech company. And I truly loved it. But I wanted more, and I wanted to know more.<p> I started to sit with members of our technology team and ask probably what were annoyingly basic questions. But I started learning, and kept learning. I discovered Nashville Software School from a couple coworkers and the rest was, as they say, history.</p>',
    },
]

const technologiesUsed = [
    {
        technology: 'HTML'
    },
    {
        technology: 'CSS'
    },
    {
        technology: 'JAVASCRIPT'
    }
]


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const printProjectCards = (projectArr) => {
    let stringtoPrint = '<div class="row">';
    for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i].available) {
            stringtoPrint += `
            <div class="cards" class="col-3">
            <h2><a href="${projectArr[i].url}">${projectArr[i].title}</a></h2>
            <img src="${projectArr[i].screenshot}" alt="${projectArr[i].title}" />
            <h5>${projectArr[i].technologiesUsed}</h5>
            <p>${projectArr[i].description}</p>
            <p><a href="${projectArr[i].githubUrl}">${projectArr[i].githubUrl}</a></p>
            </div>
            `
        } 
        stringtoPrint += '</div>'
        printToDom(stringtoPrint, 'projectsPage')
    }
}

printProjectCards(projectsArray);     

const printBio = (bioArr) => {
    let stringtoPrint = '';
    for (let i = 0; i < bioArr.length; i++) {
            stringtoPrint += `
            <div id="printedBio" class="bioDiv">
            <img src="${bioArr[i].imageLink}" alt="${bioArr[i].title}" />
            <h2>${bioArr[i].title}</h2>
            ${bioArr[i].bioContent}
            </div>
            `
        } 
        printToDom(stringtoPrint, 'bioPage')
    }

const printTech = (techArr) => {
    let stringtoPrint = '<div class="row">';
    for (let i = 0; i < techArr.length; i++) {
            stringtoPrint += `
            <div class="bioTech" class="col-3">
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