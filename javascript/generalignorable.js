const customromButton = document.getElementById("custom-rom-button");
const customromTable = document.getElementById("custom-rom-table");
const bottomInfo = document.getElementById("bottom-info-js");
customromButton.addEventListener("click", customromOpen);

function customromOpen() {
    customromTable.classList.add("add");
    customrecoveryTable.classList.remove("show");
    customrecoveryTable.classList.add("hide");
    customromButton.classList.add("buttononclick");
    customrecoveryButton.classList.remove("buttononclick");
    bottomInfo.classList.add("hide");
    window.setTimeout(customromOpen2, 100);
}

function customromOpen2() {
    customromTable.classList.add("show");
    customrecoveryTable.classList.remove("add");
    customrecoveryTable.classList.add("remove");
    bottomInfo.classList.add("remove");
}

const customrecoveryButton = document.getElementById("custom-recovery-button");
const customrecoveryTable = document.getElementById("custom-recovery-table");
customrecoveryButton.addEventListener("click", customrecoveryOpen);

function customrecoveryOpen() {
    customrecoveryTable.classList.add("add");
    customromTable.classList.remove("show");
    customromTable.classList.add("hide");
    customrecoveryButton.classList.add("buttononclick");
    customromButton.classList.remove("buttononclick");
    bottomInfo.classList.add("hide");
    window.setTimeout(customrecoveryOpen2, 100);
}

function customrecoveryOpen2() {
    customrecoveryTable.classList.add("show");
    customromTable.classList.remove("add");
    customromTable.classList.add("remove");
    bottomInfo.classList.add("remove");
}

const themebutton = document.getElementById("theme-img-js");
themebutton.addEventListener("click", changeTheme);

var themeState = "light";
const pageBackground = document.getElementById("background-js");
const topMenu = document.getElementById("topmenu-js");
const welcomeBox = document.getElementById("welcome-js");
const choiceBox = document.getElementById("choice-js");

function changeTheme() {
    if (themeState === "light") {
        pageBackground.style.backgroundColor = "#212121";
        topMenu.style.backgroundColor = "#000000";
        topMenu.style.color = "#ffffff";
        welcomeBox.style.backgroundColor = "#484848";
        welcomeBox.style.color = "#ffffff";
        choiceBox.style.backgroundColor = "#484848";
        choiceBox.style.color = "#ffffff";
        themebutton.classList.add("darkbutton");
        themebutton.setAttribute("src", "media/theme/round_light_mode_white_24dp.png");
        customromButton.classList.add("darkbuttonlight");
        customrecoveryButton.classList.add("darkbuttonlight");
        customromTable.style.color = "#ffffff";
        customrecoveryTable.style.color = "#ffffff";
        bottomInfo.style.color = "#e4d7d7";
        themeState = "dark";
    } else if (themeState === "dark") {
        pageBackground.style.backgroundColor = "#ffffff";
        topMenu.style.backgroundColor = "#c7c7c7";
        topMenu.style.color = "black";
        welcomeBox.style.backgroundColor = "#dad8d8b4";
        welcomeBox.style.color = "black";
        choiceBox.style.backgroundColor = "#dad8d8b4";
        choiceBox.style.color = "black";
        themebutton.classList.remove("darkbutton");
        themebutton.setAttribute("src", "media/theme/round_dark_mode_black_24dp.png");
        customromButton.classList.remove("darkbuttonlight");
        customrecoveryButton.classList.remove("darkbuttonlight");
        customromTable.style.color = "black";
        customrecoveryTable.style.color = "black";
        bottomInfo.style.color = "#black";
        themeState = "light";
    }
}