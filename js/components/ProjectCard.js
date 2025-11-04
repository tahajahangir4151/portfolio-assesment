// ProjectCard Component Class
export class ProjectCard {
  constructor(project, index) {
    this.project = project;
    this.index = index;
  }

  render() {
    const card = document.createElement("div");
    card.className = "project-card animate-on-scroll";
    card.setAttribute("data-animation", "fade-up");
    card.setAttribute("data-delay", (this.index % 3) + 1);

    card.innerHTML = `
<div class="project-image">${this.project.icon}</div>
<h3 class="project-title">${this.project.title}</h3>
<p class="project-description">${this.project.description}</p>
<div class="project-tags"> ${this.project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}</div>
<div class="project-links"><a href="${this.project.liveUrl}" target="_blank" class="project-link">Live Demo</a><a href="${this.project.githubUrl}" target="_blank" class="project-link secondary">GitHub</a></div>
        `;

    return card;
  }

  static renderAll(projects, container) {
    if (!container) return;

    container.innerHTML = "";

    projects.forEach((project, index) => {
      const card = new ProjectCard(project, index);
      container.appendChild(card.render());
    });
  }
}
