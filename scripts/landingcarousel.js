// Contains all of the Javascript functions responsible for maintaining and altering the landing page carousel

// Checks to see if there is only one slide in the carousel, if so, remove the carousel controls
function clearIfSingle() {
    var landingIndicators = document.getElementsByClassName("carousel-slides")[0];
    if (landingIndicators.children.length === 1) {
        document.getElementsByClassName("carousel-indicators")[0].remove();
        document.getElementsByClassName("carousel-control-prev")[0].remove();
        document.getElementsByClassName("carousel-control-next")[0].remove();
    }
}

// Birthday Slide Functions Here
// Compiles a list of brothers whose birthdays are today
function checkBrotherBirthdays() {
    var currentBirthdays = [];
    var today = new Date();

    // Check each brother's birthday against the current date, only add them if they're active or on co-op
    brothers.forEach(function(brother){
        if(sameDate(brother.birthday, today) && (brother.status === STATUS.active || brother.status === STATUS.coop)) {
            currentBirthdays.push(brother);
        }
    });
    // If there are any birthdays today, render the birthday slide
    if (currentBirthdays.length !== 0) {
        renderBirthdaySlide(currentBirthdays);
    }
}

// Responsible for creating the birthday message string that is shown on the birthday slide
function getBirthdayMessage(brothers) {
    var birthdayText = "Happy Birthday Brother";

    // Add the names of all current birthdays to the birthdayText string
    if (brothers.length === 1) {
        birthdayText = birthdayText + " " + brothers[0].firstName + "!";
    } else if (brothers.length === 2) {
        birthdayText = birthdayText + "s " + brothers[0].firstName + " & " + brothers[1].firstName + "!";
    } else {
        var counter = 1;
        // If there are more than 2 birthday's today, enter loop to render text for each one
        brothers.forEach(function (brother) {
            if (counter === 1) {
                birthdayText = birthdayText + "s " + brother.firstName;
                counter++;
            } else if (counter === brothers.length) {
                birthdayText = birthdayText + ", and " + brother.firstName + "!";
            } else {
                birthdayText = birthdayText + ", " + brother.firstName;
                counter++;
            }
        });
    }
    return birthdayText;
}

// Renders & inserts the birthday slide for all of the brother's whose birthdays are today
function renderBirthdaySlide(currentBirthdays) {
    // Get the template for the birthday slide
    var tmpl = Handlebars.templates['birthdayslide'];
    var html = document.createElement('div');
    html.className = "birthday-slide carousel-item";
    html.innerHTML = tmpl();

    // TODO: Determine video resolution based on screen size
    html.getElementsByClassName("vidmp4")[0].src = "videos/backgrounds/birthdayfireworks720.mp4";
    html.getElementsByClassName("vidweb")[0].src = "videos/backgrounds/birthdayfireworks720.webm";
    // Create the birthday message string and insert it into the template
    html.getElementsByClassName("birthday-message")[0].append(getBirthdayMessage(currentBirthdays));

    // Add an extra carousel indicator for the additional slide
    var carouselIndicator = document.createElement("li");
    var carouselIndicatorList = document.getElementsByClassName("carousel-indicators")[0];
    var introslide = document.getElementsByClassName("primary-indicator");
    carouselIndicator.setAttribute("data-target", "#carouselExampleIndicators");
    carouselIndicator.setAttribute("data-slide-to", carouselIndicatorList.children.length.toString());
    introslide[0].parentNode.insertBefore(carouselIndicator, introslide.nextSibling);

    // Insert the birthday slide into the carousel
    var landing = document.getElementsByClassName("carousel-slides")[0];
    landing.appendChild(html);
}

// Checks a given date against today's date see if they're equal (doesn't check year equality)
function sameDate(date, currentDate) {
    return date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate();
}