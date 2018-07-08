// An enum object for brother class
const BCLASS = Object.freeze({
    charter: "Charter",
    alpha: "Alpha",
    beta: "Beta",
    gamma: "Gamma",
    delta: "Delta",
    epsilon: "Epsilon",
    zeta: "Zeta",
    eta: "Eta",
    theta: "Theta",
    iota: "Iota"
});

// An enum for executive committee officer positions
const ECOFFICER = Object.freeze({
    alumni: "Alumni Relations",
    awards: "Vice President of Scholarships & Awards",
    chancellor: "Chancellor",
    finance: "Vice President of Finance",
    president: "President"
});

// An enum for fraternal status
const STATUS = Object.freeze({
    active: "Active",
    coop: "Co-op Status",
    inactive: "Inactive",
    alumni: "Alumni"
});

// An enum for search states
const SEARCHSTATE = Object.freeze({
    current: "only-current-brothers",
    alumni: "only-alumni-brothers",
    executive: "only-ec-members",
    // The following search states require a provided descriptor
    major: "search-by-major",
    dspclass: "search-by-class",
    string: "search-by-string"
});