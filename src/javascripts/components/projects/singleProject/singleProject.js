const singleProjectCard = (project) => {
  const domString = `
  <div class="card col-sm-5 single-project">
  <img src="${project.img1}" class="card-img-top" alt="...">
  <div class="card-body hide">
    <h5 class="card-title">${project.title}</h5>
    <a href="${project.url}" class="btn btn-primary">See More</a>
    <a href="${project.githubUrl}" class="btn btn-primary">See Github</a>
  </div>
  </div>
  `;
  return domString;
};

export default { singleProjectCard };
