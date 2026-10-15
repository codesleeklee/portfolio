/*
  theme.js: decides light or dark mode BEFORE the page is drawn.

  Why a separate tiny file? index.html loads it in the <head> without "defer",
  so it runs straight away. If we waited until the page had loaded, a visitor
  who chose dark mode last time would briefly see the light theme flash first.

  The order of preference is:
    1. The choice the visitor made last time with the toggle (saved in localStorage)
    2. Otherwise, light: every first-time visitor starts on the light theme

  Want to follow the visitor's device setting instead? Replace "light" below with:
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
*/

// An IIFE ("immediately invoked function expression"): a function that runs
// as soon as it's defined. It keeps our variables private so they don't
// clash with anything else on the page.
(function () {
  var saved = null;

  // localStorage can throw an error in some private-browsing modes,
  // so we wrap it in try/catch and simply carry on without it.
  try {
    saved = localStorage.getItem("theme");
  } catch (error) {
    saved = null;
  }

  // "||" means "or": use the saved choice if there is one, otherwise "light".
  var theme = saved || "light";

  // document.documentElement is the <html> tag. Setting data-theme="light"
  // switches on the light color variables in styles.css.
  document.documentElement.setAttribute("data-theme", theme);
})();
