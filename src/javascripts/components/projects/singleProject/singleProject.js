const singleProjectCard = (project) => {
  const domString = `
  <div class="mdc-card">
  <div class="mdc-card__primary-action">
    <div class="mdc-card__media mdc-card__media--square">
      <div class="mdc-card__media-content">${project.title}</div>
    </div>
    <!-- ... additional primary action content ... -->
  </div>
  <div class="mdc-card__actions">
    <div class="mdc-card__action-buttons">
      <a href="${project.url}" class="mdc-button mdc-card__action mdc-card__action--button">
        <span class="mdc-button__label">See More</span>
      </a>
      <a href="${project.githubUrl}" class="mdc-button mdc-card__action mdc-card__action--button">
        <span class="mdc-button__label">see Github</span>
      </a>
    </div>
  </div>
</div>
  `;
  return domString;
};

export default { singleProjectCard };
