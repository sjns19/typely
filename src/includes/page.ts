import type { Page } from "../types.g";

const Page: Page = {
	browserHeader: <HTMLMetaElement>document.getElementById("browser-header"),
	themeToggler: <HTMLLIElement>document.querySelector(".js-theme-btn"),
	themeTogglerIcon: <HTMLElement>document.getElementById("theme-icon"),

	applyTheme: function (save = false) {
		if (!this.themeToggler)
			return;

		const root = document.documentElement;

		root.classList.toggle("theme-dark");

		const themeStatus = root.classList.contains("theme-dark");

		this.themeTogglerIcon.setAttribute("d", themeStatus ? "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" : "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z");
		this.browserHeader.setAttribute("content", themeStatus ? "#000" : "#fff");
		this.themeToggler.dataset.tooltip = `Switch to ${themeStatus ? "light" : "dark"} theme`;

		/**
		 * When the save argument is false, the applyTheme method just applies the
		 * theme // called to load the theme upon DOMContentLoaded. If passed as true
		 * save the theme in the localStorage
		 */
		if (save === true) {
			localStorage.setItem("sjn-wpm-theme", themeStatus.toString());
		}
	},

	loadTheme: function () {
		if (!this.themeToggler)
			return;

		const themeStatus = localStorage.getItem("sjn-wpm-theme");

		if (themeStatus !== null && themeStatus === "true") {
			return this.applyTheme(false);
		}

		this.themeToggler.dataset.tooltip = "Switch to dark theme";
	},
};

export default Page;