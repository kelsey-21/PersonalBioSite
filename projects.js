// array of projects
// A good project description includes 'the what', 'the why', and 'the how'.
// Towards the latter part of the class, you will learn how to host your projects 
// until then, just use your GitHub link in this spot as well.
 
const projects = [
    {
        title: 'Cool Project', 
        screenshot: '', 
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


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const printProjectCards = (projectArr) => {
    let stringtoPrint = '';
    for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i].available === true) {
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

const navClick = (event) => {
    const navType = event.target.id;
    if (navType === 'navToBio') {
        return 'Bio'
    } else if (navType === 'navToTechnologies') {
        return 'Technologies'
    } else {
        printProjectCards(projects);        
    }
};