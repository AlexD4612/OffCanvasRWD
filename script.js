// Get Elements
const menuButton = document.querySelector("a.toggle-nav");
const mainContent = document.querySelector("main");

const holiday = document.querySelector("span.holiday");
const device = document.querySelector("span.device");
const origin = document.querySelector("span.origin");
const tradition = document.querySelector("p.tradition");

var mobile = window.matchMedia("screen and (min-width:0) and (max-width:26em)");
var tablet = window.matchMedia("screen and (min-width: 26em) and (max-width:72em)");
var desktop = window.matchMedia("screen and (min-width: 72em)");

// Listen for clicks on `menuButton`
menuButton.addEventListener("click", function() {
    // Toggle classes on `mainContent`
    mainContent.classList.toggle("open");

    // If opened, change change text
    if (mainContent.classList.contains("open") && desktop.matches) {
        menuButton.innerHTML = `<img src="assets/pumpkin-svgrepo-com.svg" /> Close`;
    } else if (!mainContent.classList.contains("open") && desktop.matches) {
        menuButton.innerHTML = `<img src="assets/pumpkin-svgrepo-com.svg" /> Menu`;
    } else if (mainContent.classList.contains("open") && tablet.matches) {
        menuButton.innerHTML = `<img src="assets/turkey-svgrepo-com.svg" /> Close`;
    } else if (!mainContent.classList.contains("open") && tablet.matches) {
        menuButton.innerHTML = `<img src="assets/turkey-svgrepo-com.svg" /> Menu`;
    } else if (mainContent.classList.contains("open") && mobile.matches) {
        menuButton.innerHTML = `<img src="assets/santa-claus-svgrepo-com.svg" /> Close`;
    } else if (!mainContent.classList.contains("open") && mobile.matches) {
        menuButton.innerHTML = `<img src="assets/santa-claus-svgrepo-com.svg" /> Menu`;
    }


});

//Date info
const curDate = new Date();
const year = curDate.getFullYear();
const yearH = document.querySelector("span.year");
yearH.innerHTML = year;


//Media Queries
function mobileQ(mobile) {
    if (mobile.matches) {
        if (origin) {
            origin.innerHTML = "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration by billions of people around the world.";
        }
        if (mainContent.classList.contains("open")) {
            menuButton.innerHTML = `<img src="assets/santa-claus-svgrepo-com.svg" /> Close`;
        } else if (!mainContent.classList.contains("open")) {
            menuButton.innerHTML = `<img src="assets/santa-claus-svgrepo-com.svg" /> Menu`;
        }
        if (device) {
            device.innerHTML = "Mobile";
        }
        if (holiday) {
            holiday.innerHTML = "Christmas";
        }
        if (tradition) {
            tradition.innerHTML = "Christmas traditions include a variety of customs, religious practices, rituals, and folklore associated with the celebration of Christmas. Many of these traditions vary by country or region, while others are universal and practiced in a virtually ubiquitous manner across the world."
        }


    }
}

function tabletQ(tablet) {
    if (tablet.matches) {
        if (origin) {
            origin.innerHTML = "In 1621, the Plymouth colonists and Wampanoag Native Americans shared an autumn harvest feast that is acknowledged today as one of the first Thanksgiving celebrations in the colonies.";
        }


        if (mainContent.classList.contains("open")) {
            menuButton.innerHTML = `<img src="assets/turkey-svgrepo-com.svg" /> Close`;
        } else if (!mainContent.classList.contains("open")) {
            menuButton.innerHTML = `<img src="assets/turkey-svgrepo-com.svg" /> Menu`;
        }

        if (device) {
            device.innerHTML = "Tablet";
        }
        if (holiday) {
            holiday.innerHTML = "Thanksgiving";
        }
        if (tradition) {
            tradition.innerHTML = "In many American households, the Thanksgiving celebration has lost much of its original religious significance; instead, it now centers on cooking and sharing a bountiful meal with family and friends. Turkey, a Thanksgiving staple so ubiquitous it has become all but synonymous with the holiday, may or may not have been on offer when the Pilgrims hosted the inaugural feast in 1621. "
        }

    }
}

function desktopQ(desktop) {
    if (desktop.matches) {
        if (origin) {
            origin.innerHTML = "Halloween had its origins in the festival of Samhain among the Celts of ancient Britain and Ireland. On the day corresponding to November 1 on contemporary calendars, the new year was believed to begin.";
        }
        if (device) {
            device.innerHTML = "Desktop";
        }
        if (holiday) {
            holiday.innerHTML = "Halloween";
        }

        if (tradition) {
            tradition.innerHTML = "Over time, Halloween evolved into a day of activities like trick-or-treating, carving jack-o-lanterns, festive gatherings, wearing costumes and eating treats."
        }
        if (mainContent.classList.contains("open") && desktop.matches) {
            menuButton.innerHTML = `<img src="assets/pumpkin-svgrepo-com.svg" /> Close`;
        } else if (!mainContent.classList.contains("open") && desktop.matches) {
            menuButton.innerHTML = `<img src="assets/pumpkin-svgrepo-com.svg" /> Menu`;
        }

    }
}


mobileQ(mobile);
tabletQ(tablet);
desktopQ(desktop);
mobile.addListener(mobileQ);
tablet.addListener(tabletQ);
desktop.addListener(desktopQ);