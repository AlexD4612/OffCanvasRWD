// Get Elements
const menuButton = document.querySelector("a.toggle-nav");
const mainContent = document.querySelector("main");



//Date info
const curDate = new Date();
const year = curDate.getFullYear();
const yearH = document.querySelector("span.year");
yearH.innerHTML = year;


//Media Queries
const subtitle = document.querySelector("h2");
const holiday = document.querySelector("span.holiday");
const device = document.querySelector("span.device");
var mobile = window.matchMedia("screen and (min-width:0) and (max-width:26em)");
var tablet = window.matchMedia("screen and (min-width: 26em) and (max-width:72em)");
var desktop = window.matchMedia("screen and (min-width: 72em)");


function mobileQ(mobile) {
    if (mobile.matches) {
        subtitle.innerHTML = "Christmas";
        device.innerHTML = "Mobile";
        holiday.innerHTML = "Christmas";



    }
}

function tabletQ(tablet) {
    if (tablet.matches) {
        subtitle.innerHTML = "Thanksgiving";
        device.innerHTML = "Tablet";
        holiday.innerHTML = "Thanksgiving";


    }
}

function desktopQ(desktop) {
    if (desktop.matches) {
        subtitle.innerHTML = "Halloween";
        device.innerHTML = "Desktop";
        holiday.innerHTML = "Halloween";
        // Listen for clicks on `menuButton`
        menuButton.addEventListener("click", function() {
            // Toggle classes on `mainContent`
            mainContent.classList.toggle("open");

            // If opened, change change text
            if (mainContent.classList.contains("open")) {
                menuButton.innerHTML = `<img src="assets/pumpkin-svgrepo-com.svg" /> Close`;
            } else {
                menuButton.innerHTML = `<img src="assets/pumpkin-svgrepo-com.svg" /> Menu`;
            }
        });

    }
}


mobileQ(mobile);
tabletQ(tablet);
desktopQ(desktop);
mobile.addListener(mobileQ);
tablet.addListener(tabletQ);
desktop.addListener(desktopQ);