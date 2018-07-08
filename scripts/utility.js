// Contains all of the various functions that fall into the category of 'general usage' throughout the website

// Responsible for importing templates to the page from which its called
function renderTemplate(template, target) {
    // Process Handlebars template
    var tmpl = Handlebars.templates[template];
    var html = document.createElement('div');
    html.innerHTML = tmpl();

    var type = target.substring(0, 1);
    // Determine type of target, locate it, then append the template html
    if (type === '.') {
        document.getElementsByClassName(target)[0].appendChild(html);
    } else if (type === '#') {
        document.getElementById(target).appendChild(html);
    } else {
        document.getElementsByTagName(target)[0].appendChild(html)
    }
}

// Creates a date object where the month is not zero-based
function birthday(year, month, day) {
    return new Date(year, month - 1, day);
}