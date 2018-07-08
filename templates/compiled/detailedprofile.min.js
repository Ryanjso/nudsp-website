(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detailedprofile'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <p class=\"infoRow\"><span class=\"infoLabel\">EC Position: </span>"
    + container.escapeExpression(((helper = (helper = helpers.ecPosition || (depth0 != null ? depth0.ecPosition : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ecPosition","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <li class=\"major-item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"infoBlock coopInformation\"><span class=\"infoLabel\">Minors(s):</span>\r\n                    <ul class=\"mainor-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.minors : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\r\n                </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                            <li class=\"minor-item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                    <li class=\"coop-item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"infoBlock coopInformation\"><span class=\"infoLabel\">Study Abroad(s):</span>\r\n                <ul class=\"studyabroad-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.studyAbroads : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                        <li class=\"studyabroad-item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"infoBlock coopInformation\"><span class=\"infoLabel\">Funfacts:</span>\r\n                <ul class=\"funfact-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.funfacts : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                        <li class=\"funfact-item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"infoBlock coopInformation\"><span class=\"infoLabel\">Hobbies:</span>\r\n                <ul class=\"hobbies-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hobbies : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "                        <li class=\"hobby-item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- Template for the modal view that appears when clicking on a brother profile -->\r\n\r\n<i class=\"fa fa-times-circle fa-lg close-button\" data-dismiss=\"modal\" aria-hidden=\"true\"></i>\r\n<div class=\"row\">\r\n    <div class=\"col-12 profile-title-area\">\r\n        <h4 class=\"profile-title\">"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"profile-picture-area col-lg-4 col-md-6 col-sm-12 profileColumn\">\r\n    </div>\r\n    <div class=\"infoRowOne col-4 profileColumn\">\r\n        <div class=\"generalInformation\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ecPosition : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <p class=\"infoRow\"><span class=\"infoLabel\">Class: </span>"
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p class=\"infoRow\"><span class=\"infoLabel\">Graduation Year: </span>"
    + alias4(((helper = (helper = helpers.gradYear || (depth0 != null ? depth0.gradYear : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gradYear","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <div class=\"infoBlock coopInformation\"><span class=\"infoLabel\">Major(s):</span>\r\n                <ul class=\"major-list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.majors : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.minor : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <p class=\"infoRow\"><span class=\"infoLabel\">Hometown: </span>"
    + alias4(((helper = (helper = helpers.hometown || (depth0 != null ? depth0.hometown : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hometown","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"infoBlock coopInformation\"><span class=\"infoLabel\">Co-op(s):</span>\r\n            <ul class=\"coop-list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.coops : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"infoRowTwo col-4 profileColumn\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.studyAbroads : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.funfacts : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hobbies : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"contactBlock linkInformation\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();