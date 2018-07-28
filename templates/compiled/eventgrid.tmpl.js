(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['eventgrid'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- A template that will render a rotating grid of event objects -->\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row eventsrow1 eventsrow\">\r\n        <div class=\"event1 event col-4\">\r\n        </div>\r\n        <div class=\"event2 event col-4\">\r\n        </div>\r\n        <div class=\"event3 event col-4\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row eventsrow2 eventsrow\">\r\n        <div class=\"event4 event col-4\">\r\n        </div>\r\n        <div class=\"event5 event col-4\">\r\n        </div>\r\n        <div class=\"event6 event col-4\">\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();