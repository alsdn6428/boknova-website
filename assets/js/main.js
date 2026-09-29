/* BokNova — mobile navigation toggle (the site works without this script). */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (!toggle || !nav) {
    return;
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  var desktopQuery = window.matchMedia('(min-width: 721px)');

  function handleViewportChange(event) {
    if (event.matches) {
      setOpen(false);
    }
  }

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', handleViewportChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleViewportChange);
  }
})();
