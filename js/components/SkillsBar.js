export class SkillsBar {
  constructor(skill) {
    this.skill = skill;
  }

  render() {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";

    skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${this.skill.name}</span>
                <span class="skill-level">${this.skill.level}%</span></div>
            <div class="skill-bar">     <div class="skill-progress" style="--skill-width: ${this.skill.level}%"></div>
            </div>
        `;
    return skillItem;
  }

  static renderAll(skills, container) {
    if (!container) return;
    container.innerHTML = "";
    skills.forEach((skill) => {
      const skillBar = new SkillsBar(skill);
      container.appendChild(skillBar.render());
    });
  }

  static amimateSkills(container) {
    if (!container) return;
    const skillItems = container.querySelectorAll(".skill-item");
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animated");
      }, index * 100);
    });
  }
}
