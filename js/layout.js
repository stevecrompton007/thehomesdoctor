(function () {
  var base = window.SITE_BASE || '';
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length) || '/';
  }

  var navItems = [
    { href: base + '/about/', label: 'About', match: '/about' },
    { href: base + '/services/', label: 'Services', match: '/services' },
    { href: base + '/how-it-works/', label: 'How It Works', match: '/how-it-works' },
    { href: base + '/case-studies/', label: 'Case Studies', match: '/case-studies' },
    { href: base + '/blog/', label: 'Blog', match: '/blog' },
    { href: base + '/estate-agents/', label: 'For Estate Agents', match: '/estate-agents' }
  ];

  function isActive(match) {
    if (match === '/' && (path === '/' || path === '')) return true;
    return path.indexOf(match) === 0;
  }

  var navLinks = navItems
    .map(function (item) {
      var cls = isActive(item.match) ? ' class="is-active"' : '';
      return '<a href="' + item.href + '"' + cls + '>' + item.label + '</a>';
    })
    .join('');

  var header =
    '<header class="site-header">' +
    '<div class="container header-inner">' +
    '<a href="' + base + '/" class="logo-link">' +
    '<img src="' + base + '/images/logo.png" alt="The Home\'s Doctor" width="120" height="44">' +
    '<span class="logo-text">The Home\'s Doctor<span>Property advice</span></span>' +
    '</a>' +
    '<button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false">' +
    '<span></span><span></span><span></span>' +
    '</button>' +
    '<nav class="site-nav" aria-label="Main navigation">' +
    navLinks +
    '<div class="header-cta-mobile">' +
    '<a href="' + base + '/get-quote/" class="btn btn-primary">Get a Quote</a>' +
    '<a href="' + base + '/contact/" class="btn btn-outline">Contact</a>' +
    '</div>' +
    '</nav>' +
    '<div class="header-cta">' +
    '<a href="' + base + '/get-quote/" class="btn btn-primary">Get a Quote</a>' +
    '<a href="' + base + '/contact/" class="btn btn-outline">Contact</a>' +
    '</div>' +
    '</div>' +
    '</header>';

  var footer =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<div class="footer-grid">' +
    '<div>' +
    '<img src="' + base + '/images/logo.png" alt="" class="footer-logo" width="120" height="40">' +
    '<p>Helping homeowners make smart, human decisions about their property — whether selling, downsizing, renovating, or simply wanting clarity.</p>' +
    '</div>' +
    '<div>' +
    '<h4>Services</h4>' +
    '<ul>' +
    '<li><a href="' + base + '/selling-your-home/">Selling Your Home</a></li>' +
    '<li><a href="' + base + '/downsizing/">Downsizing &amp; Bereavement</a></li>' +
    '<li><a href="' + base + '/home-improvement/">Home Improvement</a></li>' +
    '<li><a href="' + base + '/renovation-guidance/">Renovation Guidance</a></li>' +
    '</ul>' +
    '</div>' +
    '<div>' +
    '<h4>Contact</h4>' +
    '<ul>' +
    '<li><a href="tel:07903679900">07903 679900</a></li>' +
    '<li><a href="mailto:info@thehomesdoctor.com">info@thehomesdoctor.com</a></li>' +
    '</ul>' +
    '<p class="footer-cta"><a href="' + base + '/contact/" class="btn btn-gold">Book a Consultation</a></p>' +
    '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
    '<p>&copy; ' + new Date().getFullYear() + ' The Home\'s Doctor. All rights reserved.</p>' +
    '<p><a href="' + base + '/contact/">Privacy &amp; enquiries</a></p>' +
    '</div>' +
    '</div>' +
    '</footer>';

  var headerEl = document.querySelector('[data-site-header]');
  var footerEl = document.querySelector('[data-site-footer]');
  if (headerEl) headerEl.outerHTML = header;
  if (footerEl) footerEl.outerHTML = footer;
})();
