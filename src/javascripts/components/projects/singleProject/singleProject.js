const singleProjectCard = (project) => {
  const domString = `
  <div class="single-card d-flex flex-row">
      <a href="${project.url}" class="btn btn-outline" target="_blank">
        <img src="${project.img1}" class="card-img" alt="..." />
      </a>
    <div class="single-card-title">
        <h3 class="single-card-title">${project.title}</h3>
          <p class="single-card-text">${project.description}</p>
    </div>
  </div>
  `;
  return domString;
};

export default { singleProjectCard };
