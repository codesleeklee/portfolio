/*
  main.js: the small interactive parts of the site.

    1. The light/dark mode toggle button
    2. The mobile menu (hamburger) button
    3. The current year in the footer

  This file is loaded with "defer", so by the time it runs, all the HTML
  exists and document.querySelector can find every element.
*/

/* ---------------------------------------------------------
   1. LIGHT / DARK MODE TOGGLE
   --------------------------------------------------------- */

// querySelector finds the FIRST element that matches a CSS selector.
const root = document.documentElement; // the <html> tag
const themeToggle = document.querySelector(".theme-toggle");

// Updates the button's label so screen readers say what clicking will do.
function updateToggleLabel(theme) {
  const next = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", "Switch to " + next + " mode");
}

// theme.js already set data-theme, so read it to label the button correctly on load.
updateToggleLabel(root.getAttribute("data-theme"));

// addEventListener("click", ...) runs the function every time the button is clicked.
themeToggle.addEventListener("click", function () {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  // Changing this one attribute makes the CSS swap all the color variables.
  root.setAttribute("data-theme", next);
  updateToggleLabel(next);

  // Remember the choice for the next visit. (try/catch for private browsing, as in theme.js.)
  try {
    localStorage.setItem("theme", next);
  } catch (error) {
    // Nothing to do: the theme still changes, it just won't be remembered.
  }
});

/* ---------------------------------------------------------
   2. MOBILE MENU
   On small screens the menu is hidden behind the hamburger button.
   We toggle a CSS class ("is-open") that shows or hides it.
   --------------------------------------------------------- */

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

function setMenuOpen(isOpen) {
  // classList.toggle(name, force) adds the class when force is true and removes it when false.
  nav.classList.toggle("is-open", isOpen);

  // aria-expanded tells screen readers whether the menu is open.
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click", function () {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen); // "!" flips true to false and false to true
});

// Close the menu after a link is tapped, so it doesn't cover the section you jumped to.
// querySelectorAll returns ALL matches; forEach runs the function once for each one.
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenuOpen(false);
  });
});

// Close the menu with the Escape key too (a keyboard-accessibility nicety).
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

/* ---------------------------------------------------------
   3. FOOTER YEAR
   new Date().getFullYear() gives the current year, e.g. 2026.
   --------------------------------------------------------- */

document.querySelector("#year").textContent = new Date().getFullYear();
