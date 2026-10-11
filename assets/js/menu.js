/* Progressive enhancement: every category remains visible without JavaScript. */
(function () {
  'use strict';
  var menu = document.getElementById('menu');
  var select = document.getElementById('menu-category');
  if (!menu || !select) return;
  menu.classList.add('menu-enhanced');
  select.addEventListener('change', function () {
    var target = document.getElementById(select.value);
    if (!target || !menu.contains(target)) return;
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
    history.replaceState(null, '', '#' + target.id);
  });
  // Respect the category bar when opening a menu deep link directly.
  function restoreCategoryPosition() {
    if (location.hash.indexOf('#menu-') !== 0) return;
    var target = document.getElementById(location.hash.slice(1));
    if (!target || !menu.contains(target)) return;
    if (window.jQuery) window.jQuery('html, body').stop(true);
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  window.addEventListener('load', restoreCategoryPosition);
  if (window.jQuery) window.jQuery(function () {
    window.requestAnimationFrame(restoreCategoryPosition);
  });
}());
