(function () {
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  var navItems = [
    { href: '/about/', label: 'About', match: '/about' },
    { href: '/services/', label: 'Services', match: '/services' },
    { href: '/how-it-works/', label: 'How It Works', match: '/how-it-works' },
    { href: '/case-studies/', label: 'Case Studies', match: '/case-studies' },
    { href: '/blog/', label: 'Blog', match: '/blog' },
    { href: '/estate-agents/', label: 'For Estate Agents', match: '/estate-agents' }
  ];

  function isActive(match) {
    if (match === '/' && path === '/') return true;
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
    '<a href="/" class="logo-link">' +
    '<img src="/images/logo.png" alt="The Home\'s Doctor" width="120" height="44">' +
    '<span class="logo-text">The Home\'s Doctor<span>Property advice</span></span>' +
    '</a>' +
    '<button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false">' +
    '<span></span><span></span><span></span>' +
    '</button>' +
    '<nav class="site-nav" aria-label="Main navigation">' +
    navLinks +
    '<div class="header-cta-mobile">' +
    '<a href="/get-quote/" class="btn btn-primary">Get a Quote</a>' +
    '<a href="/contact/" class="btn btn-outline">Contact</a>' +
    '</div>' +
    '</nav>' +
    '<div class="header-cta">' +
    '<a href="/get-quote/" class="btn btn-primary">Get a Quote</a>' +
    '<a href="/contact/" class="btn btn-outline">Contact</a>' +
    '</div>' +
    '</div>' +
    '</header>';

  var footer =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<div class="footer-grid">' +
    '<div>' +
    '<img src="/images/logo.png" alt="" class="footer-logo" width="120" height="40">' +
    '<p>Helping homeowners make smart, human decisions about their property — whether selling, downsizing, renovating, or simply wanting clarity.</p>' +
    '</div>' +
    '<div>' +
    '<h4>Services</h4>' +
    '<ul>' +
    '<li><a href="/selling-your-home/">Selling Your Home</a></li>' +
    '<li><a href="/downsizing/">Downsizing &amp; Bereavement</a></li>' +
    '<li><a href="/home-improvement/">Home Improvement</a></li>' +
    '<li><a href="/renovation-guidance/">Renovation Guidance</a></li>' +
    '</ul>' +
    '</div>' +
    '<div>' +
    '<h4>Contact</h4>' +
    '<ul>' +
    '<li><a href="tel:07903679900">07903 679900</a></li>' +
    '<li><a href="mailto:info@thehomesdoctor.com">info@thehomesdoctor.com</a></li>' +
    '</ul>' +
    '<p style="margin-top:1rem"><a href="/contact/" class="btn btn-gold">Book a Consultation</a></p>' +
    '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
    '<p>&copy; ' + new Date().getFullYear() + ' The Home\'s Doctor. All rights reserved.</p>' +
    '<p><a href="/contact/">Privacy &amp; enquiries</a></p>' +
    '</div>' +
    '</div>' +
    '</footer>';

  var headerEl = document.querySelector('[data-site-header]');
  var footerEl = document.querySelector('[data-site-footer]');
  if (headerEl) headerEl.outerHTML = header;
  if (footerEl) footerEl.outerHTML = footer;
})();
