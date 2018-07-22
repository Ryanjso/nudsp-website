(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- A simple fixed navbar that is imported to website pages -->\r\n\r\n<nav class=\"navbar fixed-top navbar-expand-xl navbar-custom\">\r\n    <!-- Navbar Logo & Heading Here -->\r\n    <div class=\"navbar-brand\" href=\"#\">\r\n        <img class=\"navbarLogo\" src=\"images/logos/navbarlogo.png\" width=\"128\" height=\"128\"  alt=\"DSP Coat of Arms\">\r\n        <header class=\"h4 navbarHeading\">&Delta;&Sigma;&Pi; - Sigma Omega</header>\r\n    </div>\r\n    <!-- Collapsed Navbar Link Button Here -->\r\n    <button class=\"navbar-toggler toggler-custom collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\r\n            aria-controls=\"navbarToggler\" aria-expanded=\"false\" aria-label=\"Toggle Navigation\">\r\n        <!-- Hamburger Menu Lines -->\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n    </button>\r\n    <!-- Navbar Links Here -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\r\n        <ul class=\"navbar-nav navbar-right ml-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"index.html\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">About</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"brothers.html\">Brothers</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Careers</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Contact</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>";
},"useData":true});
})();