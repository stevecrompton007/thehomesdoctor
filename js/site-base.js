(function () {
  var path = location.pathname;
  if (path.indexOf('/thehomesdoctor') === 0) {
    window.SITE_BASE = '/thehomesdoctor';
  } else {
    window.SITE_BASE = '';
  }
})();
