// array of projects
// A good project description includes 'the what', 'the why', and 'the how'.
// Towards the latter part of the class, you will learn how to host your projects 
// until then, just use your GitHub link in this spot as well.
 
const projects = [
    {
        title: '', 
        screenshot: '', 
        description: '', 
        technologiesUsed: '',
        available: true,
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
            <h3><a href="${projectArr[i].url}">${projectArr[i].title}</a></h3>
            <img src="${projectArr[i].screenshot}" alt="${projectArr[i].title}" />
            <h4>${projectArr[i].technologiesUsed}</h4>
            <p>${projectArr[i].description}</p>
            <footnote><a href="${projectArr[i].githubUrl}">${projectArr[i].githubUrl}</a></footnote>
            </div>
            `
        } 
        printToDom(stringtoPrint, 'projectsPage')
    }
}