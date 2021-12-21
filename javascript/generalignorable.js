const nolink = "nolink.html";
const NA = "N/A";

const themebutton = document.getElementById("theme-img-js");
themebutton.addEventListener("click", changeTheme);

var themeState = "light";
const pageBackground = document.getElementById("background-js");
const topMenu = document.getElementById("topmenu-js");
const welcomeBox = document.getElementById("welcome-js");
const customROMs = document.getElementById("customroms");
const customRecoveries = document.getElementById("customrecoveries");
const backUpButton = document.getElementById("back-up-js");
const tableChoiceButtonONE = document.getElementById("table-choice-button-one-js");
const tableChoiceButtonTWO = document.getElementById("table-choice-button-two-js");

function changeTheme() {
    if (themeState === "light") {
        pageBackground.style.backgroundColor = "#212121";
        topMenu.style.backgroundColor = "#000000";
        topMenu.style.color = "#ffffff";
        welcomeBox.style.backgroundColor = "#484848";
        welcomeBox.style.color = "#ffffff";
        themebutton.classList.add("darkbutton");
        themebutton.setAttribute("src", "media/theme/round_light_mode_white_24dp.png");
        customROMs.style.color = "#ffffff";
        customRecoveries.style.color = "#ffffff";
        backUpButton.classList.add("darkbutton");
        backUpButton.setAttribute("src", "media/arrowup/white-24dp/1x/round_arrow_upward_white_24dp.png");
        tableChoiceButtonONE.classList.add("darkbutton");
        tableChoiceButtonTWO.classList.add("darkbutton");
        document.getElementById("bottom-info-js").style.color = "#ffffff";
        themeState = "dark";
    } else if (themeState === "dark") {
        pageBackground.style.backgroundColor = "#ffffff";
        topMenu.style.backgroundColor = "#c7c7c7";
        topMenu.style.color = "black";
        welcomeBox.style.backgroundColor = "#dad8d8b4";
        welcomeBox.style.color = "black";
        themebutton.classList.remove("darkbutton");
        themebutton.setAttribute("src", "media/theme/round_dark_mode_black_24dp.png");
        customROMs.style.color = "#000000";
        customRecoveries.style.color = "#000000";
        backUpButton.classList.remove("darkbutton");
        backUpButton.setAttribute("src", "media/arrowup/black-24dp/1x/round_arrow_upward_black_24dp.png");
        tableChoiceButtonONE.classList.remove("darkbutton");
        tableChoiceButtonTWO.classList.remove("darkbutton");
        document.getElementById("bottom-info-js").style.color = "#000000";
        themeState = "light";
    }
}