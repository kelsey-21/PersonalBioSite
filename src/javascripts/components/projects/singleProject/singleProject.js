const singleProjectCard = (project) => {
  const domString = `
  <div class="card single-project border-0">
  <div class="row no-gutters">
    <div class="col-md-7">
      <iframe src="${project.video}" frameborder="0" allowfullscreen scrolling="no"></iframe>
      </iframe>
    </div>
    <div class="col-md-5">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <a href="${project.url}" class="btn btn-outline"><i class="fas fa-globe"></i></a>
        <a href="${project.githubUrl}" class="btn btn-outline"><i class="fab fa-github"></i></a>
      </div>
    </div>
  </div>
</div>
  `;
  return domString;
};

export default { singleProjectCard };
