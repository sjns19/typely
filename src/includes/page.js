const Page = {
  root: document.documentElement,
  theme: {
    browserHeader: document.getElementById("browser-header"),
    toggler: document.querySelector(".js-theme-btn"),
    icons: {
      light: document.getElementById("theme-icon-light"),
      dark: document.getElementById("theme-icon-dark"),
    },
    colors: {
      light: "#ffffff",
      dark: "#000000",
    },
  },
  home: document.getElementById("section-home"),
  test: document.getElementById("section-test"),
  footer: document.querySelector(".js-footer"),

  toggle: function (name) {
    if (name === "test") {
      this.home.classList.remove("is-active");
      this.test.classList.add("is-active");
    } else if (name === "home") {
      this.home.classList.add("is-active");
      this.test.classList.remove("is-active");
    }
    this.footer.style.display = name === "test" ? "none" : "flex";
  },

  applyTheme: function (save = false) {
    this.root.classList.toggle("theme-dark");

    let theme = this.theme;
    let themeStatus = this.root.classList.contains("theme-dark");
    let color = themeStatus ? theme.colors.dark : theme.colors.light;

    theme.icons.dark.style.display = themeStatus ? "none" : "inline-block";
    theme.icons.light.style.display = themeStatus ? "inline-block" : "none";
    theme.browserHeader.setAttribute("content", color);
    theme.toggler.dataset.tooltip = `Toggle ${
      themeStatus ? "Light" : "Dark"
    } Mode`;

    if (save === true) {
      localStorage.setItem("sjn-wpm-theme", themeStatus);
    }
  },

  loadTheme: function () {
    let themeStatus = localStorage.getItem("sjn-wpm-theme");
    if (themeStatus !== null && themeStatus === "true") {
      return this.applyTheme();
    }
    this.theme.icons.light.style.display = "none";
    this.theme.toggler.dataset.tooltip = "Toggle Dark Mode";
  },
};

export default Page;
