(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Template for the un-expanded profile on the brothers page -->\r\n\r\n<div class=\"brother-profile hoverbox\">\r\n    <div class=\"profile-description hoverbox-text\">\r\n        <p class=\"ecposition\"></p>\r\n        <h3 class=\"profileitem name\"></h3>\r\n        <p class=\"profileitem class\">Class: </p>\r\n        <p class=\"profileitem major\">Major(s): </p>\r\n        <p class=\"profileitem hometown\">Hometown: </p>\r\n        <p class=\"profileitem gradyear\">Graduation Year: </p>\r\n        <p class=\"profileitem moreinfo\">- Click for more info -</p>\r\n    </div>\r\n    <img class=\"profile-picture hoverbox-image\" src=\"\">\r\n</div>";
},"useData":true});
})();