export class ScrollAnimator {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
      ...options,
    };
    this.observer = null;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleInterSection(entries);
    }, this.options);
    this.observeElements();
  }

  handleInterSection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        if (entry.target.closest(".skills")) {
          this.animateSkills(entry.target);
        }
      } else {
        entry.target.classList.remove("animated");

        if (entry.target.closest(".skills")) {
          const skillBars = entry.target.querySelectorAll(".skill-item");
          skillBars.forEach((skillBar) => {
            skillBar.classList.remove("animated");
          });
        }
      }
    });
  }

  observeElements() {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      this.observer.observe(element);
    });
  }
  animateSkills(element) {
    const skillBars = element.querySelectorAll(".skill-item");
    skillBars.forEach((skillBar, index) => {
      setTimeout(() => {
        skillBar.classList.add("animated");
      }, index * 100);
    });
  }
  observeNewElements(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      if (!element.classList.contains("animated")) {
        this.observer.observe(element);
      }
    });
  }
  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
