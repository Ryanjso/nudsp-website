// A collection of scripts that are used on the brothers page

// Renders profiles on the brothers page based on given criteria
function renderProfiles(constraints, descriptor, key) {
    var addedToRow = 0;
    var totalRows = 0;
    var brothersToRender = [];

    // If a constraint was provided, filter the brothers based on that constraint
    if (constraints !== undefined) {
        if (constraints === SEARCHSTATE.string) {
            var regx = /^[A-Za-z]+$/;
            if ((!regx.test(descriptor) && !(key === 8 || key === 46)) || ((key === 8 || key === 46) && prevDescriptor === "")) {
                return;
            }
            prevDescriptor = descriptor;
        }
        brothersToRender = filterBrothers(constraints, descriptor);
    }

    // If the profiles section doesn't exist (was deleted) then re-create it
    if (document.getElementsByClassName("brother-profiles")[0] === undefined) {
        var profilesSection = document.createElement('div');
        profilesSection.className = "brother-profiles container";
        document.body.appendChild(profilesSection);
    } else {
        // If it does exist, wipe it and rebuild it
        /*
        $(".brother-profiles").fadeOut(500, function () {
            document.getElementsByClassName("brother-profiles")[0].remove();
        });
        */

        document.getElementsByClassName("brother-profiles")[0].remove();

        //setTimeout(function () {
        var profilesSection = document.createElement('div');
        profilesSection.className = "brother-profiles container";
        document.body.appendChild(profilesSection);
        $(".brother-profiles").css("display", "none");
        //}, 500);
    }

    brothersToRender.forEach(function(brother) {
        // Only four profiles per row, if this has been hit, create a new row
        if (addedToRow === 4) {
            addedToRow = 0;
        }
        // Id we need a new row, create it and begin populating it
        if (addedToRow === 0) {
            totalRows++;

            var profileRow = document.createElement('div');
            profileRow.className = "row" + totalRows.toString();

            var profile = renderProfile(brother);
            profileRow.appendChild(profile);

            $(".brother-profiles").append(profileRow);
        } else {
            var profile = renderProfile(brother);
            $(".row" + totalRows.toString()).append(profile);

        }

        //engageListeners();
        addedToRow++;
    });

    $(".brother-profiles").fadeIn(1000);
    /*
    setTimeout(function () {
        $(".brother-profiles").fadeIn(500);
    }, 500);
    */

    if (constraints !== SEARCHSTATE.string) {
        currentlyRenderedBrothers = brothersToRender;
    }
}

// Responsible for rendering a single profile on the brothers page
function renderProfile(brother) {
    // Get the template for the profile
    var tmpl = Handlebars.templates['profile'];
    var html = document.createElement('div');
    html.className = "profile-wrapper col-lg-3 col-md-6 col-sm-12";
    html.innerHTML = tmpl();

    // Set the id to the respective index of the brother being rendered
    html.getElementsByClassName("profile-description")[0].id = brothers.indexOf(brother);

    headshots = "images/headshots/";
    //brotherName = brother.firstName + brother.lastName;

    // Set the source for the profile picture, if none present, use the generic one
    $.get(headshots + brother.firstName + brother.lastName + ".jpg")
        .done(function () {
            html.getElementsByClassName("profile-picture")[0].src = headshots + brother.firstName + brother.lastName + ".jpg";
        }).fail(function () {
        html.getElementsByClassName("profile-picture")[0].src = headshots + "noheadshot.jpg";
    });

    if (brother.ecPosition !== null ) {
        html.getElementsByClassName("ecposition")[0].append(brother.ecPosition);
    }
    html.getElementsByClassName("name")[0].append(brother.firstName + " " +  brother.lastName);
    var i = 0;
    brother.majors.forEach(function (major) {
        if (brother.majors[i + 1] === undefined) {
            html.getElementsByClassName("major")[0].append(major);
        } else {
            html.getElementsByClassName("major")[0].append(major + ", ");
        }
        i++;
    });
    html.getElementsByClassName("class")[0].append(brother.class);
    html.getElementsByClassName("hometown")[0].append(brother.origin);
    html.getElementsByClassName("gradyear")[0].append(brother.gradYear);

    return html;
}


// Filters brothers based on provided criteria
function filterBrothers(constraint, descriptor) {
    var brothersToRender = [];

    // Check each possible case that the constraint can be
    if (constraint === SEARCHSTATE.current) {
        brothersToRender = brothers.filter(function (brother) {
            return brother.status === STATUS.active || brother.status === STATUS.coop;
        });
    } else if (constraint === SEARCHSTATE.executive) {
        brothersToRender = brothers.filter(function (brother) {
            return brother.ecPosition !== null;
        });
    } else if (constraint === SEARCHSTATE.coop) {
        brothersToRender = brothers.filter(function (brother) {
            return brother.status === STATUS.coop;
        });
    } else if (constraint === SEARCHSTATE.alumni) {
        brothersToRender = brothers.filter(function (brother) {
            return brother.status === STATUS.alumni;
        });
    } else if (constraint === SEARCHSTATE.major) {
        brothersToRender = brothers.filter(function (brother) {
            return brother.majors.contains(descriptor);
        });
    } else if (constraint === SEARCHSTATE.dspclass) {
        brothersToRender = brothers.filter(function (brother) {
            return brother.class === descriptor;
        });
    } else {
        currentlyRenderedBrothers.forEach(function (brother) {
            var stringLength = descriptor.length;
            var currentFirst = brother.firstName.substring(0, stringLength);
            var currentLast = brother.lastName.substring(0, stringLength);

            if (descriptor.toLowerCase() === currentFirst.toLowerCase() || descriptor.toLowerCase() === currentLast.toLowerCase()) {
                brothersToRender.push(brother);
            }
        });
    }

    return brothersToRender;
}

function engageProfileListeners() {
    $(function() {
        $("div.brother-profile").on("click", function(e){
            generateModal(e.target.id);
            $('#exampleModal').modal('toggle');
            e.preventDefault(); //to prevent any other unwanted behavior clicking the div might cause
        });
    });
}

function generateModal(brotherId) {

    var currentBrother = brothers[brotherId];

    if ($(".modal-content")) {
        $(".modal-content").remove();
    }

    var tmpl = Handlebars.templates['detailedprofile'];
    var html = document.createElement('div');
    html.className = "modal-content container";
    html.innerHTML = tmpl(currentBrother);

    $(".modal-dialog").append(html);

    var profilePicture = document.createElement('img');
    profilePicture.className = "profile-picture";
    profilePicture.setAttribute('alt', currentBrother.firstName + " " + currentBrother.lastName + "'s Profile");
    profilePicture.setAttribute('ondragstart', "return false;");

    headshots = "images/headshots/";
    brotherName = currentBrother.firstName + currentBrother.lastName;

    $.get(headshots + brotherName + ".jpg")
        .done(function () {
            profilePicture.src = headshots + brotherName + ".jpg";
        }).fail(function () {
        profilePicture.src = headshots + "noheadshot.jpg";
    });

    $('.profile-picture-area').append(profilePicture);


    $('#exampleModal').on('show.bs.modal', function () {
        testAnim('zoomIn');
    });
    $('#exampleModal').on('hide.bs.modal', function () {
        testAnim('zoomOut');
    });
}

function testAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated' + ' modal-lg');
}
