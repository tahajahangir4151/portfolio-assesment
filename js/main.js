import { projects, skills } from "../data/projects.js";
import { ProjectCard } from "./components/ProjectCard.js";
import { SkillsBar } from "./components/SkillsBar.js";
import { ScrollAnimator } from "./utils/observer.js";
import { Theme } from "./utils/theme.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    console.log("Portfolio App Initiliazed");

    this.theme = new Theme();

    this.renderProjects();
    this.renderSkills();
    this.scrollAnimator = new ScrollAnimator({
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    setTimeout(() => {
      this.scrollAnimator.observeNewElements(".project-card");
    }, 100);
  }

  renderProjects() {
    const projectsContainer = document.querySelector(
      '[data-component="projects-grid"]'
    );
    if (projectsContainer) {
      ProjectCard.renderAll(projects, projectsContainer);
      console.log("Projects rendered");
    }
  }
  renderSkills() {
    const skillsContainer = document.querySelector(
      '[data-component="skill-bars"]'
    );
    if (skillsContainer) {
      SkillsBar.renderAll(skills, skillsContainer);
      console.log(skills);
      console.log("Skills rendered");
    }
  }
}

const app = new App();
