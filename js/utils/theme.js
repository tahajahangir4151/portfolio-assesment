export class Theme {
  constructor() {
    this.theme = this.getStoredItem();
    this.toggleButton = document.getElementById("themeToggle");
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.setupToggle();
  }

  getStoredItem() {
    return localStorage.getItem("theme") || "light";
  }

  applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    this.updateToggleIcon(theme);
  }
  updateToggleIcon(theme) {
    if (!this.toggleButton) return;
    const icon = this.toggleButton.querySelector(".theme-icon");
    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }
  saveTheme(theme) {
    localStorage.setItem("theme", theme);
  }
  toggle() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(this.theme);
    this.saveTheme(this.theme);

    if (this.toggleButton) {
      this.toggleButton.classList.add("pulse");
      setTimeout(() => {
        this.toggleButton.classList.remove("pulse");
      }, 500);
    }
  }
  setupToggle() {
    if (!this.toggleButton) return;

    this.toggleButton.addEventListener("click", () => {
      this.toggle();
    });
  }
}
