import utilities from '../helpers/utilities.js'

const projects = [
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
        screenshot: 'images/pet-adoption.png', 
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

const printProjectCards = () => {
    let stringtoPrint = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available) {
            stringtoPrint += `
            <div class="cards col-sm-">
            <h2><a href="${projects[i].url}">${projects[i].title}</a></h2>
            <img src="${projects[i].screenshot}" alt="${projects[i].title}" />
            <h5>${projects[i].technologiesUsed}</h5>
            <p>${projects[i].description}</p>
            <p><a href="${projects[i].githubUrl}">${projects[i].githubUrl}</a></p>
            </div>
            `
        } 
        utilities.printToDom(stringtoPrint, 'projectsPage')
    }
};    


// document.getElementById('bio').addEventListener('click', navClick);
// document.getElementById('technologies').addEventListener('click', navClick);
// document.getElementById('projects').addEventListener('click', navClick);

export default { printProjectCards }