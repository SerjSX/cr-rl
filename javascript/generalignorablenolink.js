const themebutton = document.getElementById("theme-img-js");
themebutton.addEventListener("click", changeTheme);

var themeState = "light";
const pageBackground = document.getElementById("background-js");
const topMenu = document.getElementById("topmenu-js");
const nolinkBox = document.getElementById("nolink-js");

function changeTheme() {
    if (themeState === "light") {
        pageBackground.style.backgroundColor = "#212121";
        topMenu.style.backgroundColor = "#000000";
        topMenu.style.color = "#ffffff";
        nolinkBox.style.backgroundColor = "#484848";
        nolinkBox.style.color = "#ffffff";
        themebutton.classList.add("darkbutton");
        themebutton.setAttribute("src", "media/theme/round_light_mode_white_24dp.png");
        themeState = "dark";
    } else if (themeState === "dark") {
        pageBackground.style.backgroundColor = "#ffffff";
        topMenu.style.backgroundColor = "#c7c7c7";
        topMenu.style.color = "black";
        nolinkBox.style.backgroundColor = "#dad8d8b4";
        nolinkBox.style.color = "black";
        themebutton.classList.remove("darkbutton");
        themebutton.setAttribute("src", "media/theme/round_dark_mode_black_24dp.png");
        themeState = "light";
    }
}