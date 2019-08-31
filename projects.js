// array of projects
// A good project description includes 'the what', 'the why', and 'the how'.
// Towards the latter part of the class, you will learn how to host your projects 
// until then, just use your GitHub link in this spot as well.
 
const projects = [
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


const bio = [
    {
    title: 'Biography',
    bioContent: 'Originally from Birmingham, Alabama, Kelsey has lived in Nashville since 2010. She moved to Nashville for college, where she attended Vanderbilt University, graduating in 2014. After graduation, she began working at a healthcare technology as an Account Specialist. Over time and through different positions, she was exposed to more and more of the technology side at this company. She wanted to learn more and was excited to discover the opportunities NSS offered.',
    }
]

const technologiesUsed = [
    {
        technology: 'HTML'
    },
    {
        technology: 'CSS'
    },
    {
        technology: 'JavaScript'
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
            <div class="cards">
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

printProjectCards(projects);     

const printBio = (bioArr) => {
    let stringtoPrint = '';
    for (let i = 0; i < bioArr.length; i++) {
            stringtoPrint += `
            <div class="bioDiv">
            <h2>${bioArr[1].title}</h2>
            <p>${bioArr[i].bioContent}</p>
            </div>
            `
        } 
        printToDom(stringtoPrint, 'bioPage')
    }

const printTech = (techArr) => {
    let stringtoPrint = '';
    for (let i = 0; i < techArr.length; i++) {
            stringtoPrint += `
            <div class="bioTech">
            <h2>${techArr[1].title}</h2>
            <ul><li>${techArr[i].technology}</li></ul>
            </div>
            `
        } 
        printToDom(stringtoPrint, 'technologiesPage')
    }    

const navClick = (event) => {
    // const petCards = document.getElementById('petCards')
    // if (petCards.innerHTML === '') {    
    const navType = event.target.id;
    if (navType === 'navToBio') {
        if (document.getElementById('bioPage').innerHTML = '') {
            console.log(document.getElementById('bioPage').innerHTML)
            printBio(bio)
            newProjects = []
            printProjectCards(newProjects)
            newTech = []
            printTech(newTech)
        } 
    } else if (navType === 'navToTechnologies') {
        if (document.getElementById('technologiesPage').innerHTML = '') {
            printTech(technologiesUsed); 
            newProjects = [];
            printProjectCards(newProjects);
            newBio = [];
            printBio(newBio);
        }
    } else if (navType === 'navToProjects') {
        printProjectCards(projects);        
    }
};

document.getElementById('navToBio').addEventListener('click', navClick);
document.getElementById('navToTechnologies').addEventListener('click', navClick);
document.getElementById('navToProjects').addEventListener('click', navClick);