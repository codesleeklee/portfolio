/*
  theme.js: decides light or dark mode BEFORE the page is drawn.

  Why a separate tiny file? index.html loads it in the <head> without "defer",
  so it runs straight away. If we waited until the page had loaded, a visitor
  who prefers light mode would briefly see the dark theme flash first.

  The order of preference is:
    1. The choice the visitor made last time with the toggle (saved in localStorage)
    2. Otherwise, their device setting (the "prefers-color-scheme" media query)
    3. Otherwise, dark (the default in styles.css)
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

  // matchMedia lets JavaScript ask the same questions CSS media queries ask.
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  var theme = saved || (prefersLight ? "light" : "dark");

  // document.documentElement is the <html> tag. Setting data-theme="light"
  // switches on the light color variables in styles.css.
  document.documentElement.setAttribute("data-theme", theme);
})();
