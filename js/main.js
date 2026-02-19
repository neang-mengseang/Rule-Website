// Minimal JS: mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  var navLinks = siteNav ? siteNav.querySelectorAll('a') : [];

  // Mobile nav toggle with aria support
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      siteNav.classList.toggle('open');
    });
  }

  // Highlight active link based on current filename
  try {
    var path = window.location.pathname.split('/').pop();
    if (!path) path = 'index.html';
    navLinks.forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      // normalize
      var name = href.split('/').pop();
      if (name === path || (name === 'index.html' && (path === '' || path === 'index.html'))) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  } catch (e) {
    // ignore
  }
});
