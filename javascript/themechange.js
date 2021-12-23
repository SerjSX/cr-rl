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
const bottomText = document.getElementById("bottom-info-js");
const githubLogo = document.getElementById("github-logo-js");
const externalLinks = document.getElementById("external-links-color-js");
const searchBarList = document.getElementById("searchbar-content");
const searchBarSections = document.querySelectorAll(".section");
const searchBar = document.getElementById("search-bar-js");
const searchBarCloseIMG = document.getElementById("closeimg-js");
const searchBarSearchIMG = document.getElementById("searchimg-js");

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
        bottomText.style.backgroundColor = "#555353";
        githubLogo.setAttribute("src", "media/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png");
        githubLogo.classList.add("darkbutton-noback");
        document.getElementById("external-link-1").classList.add("darklink");
        document.getElementById("external-link-2").classList.add("darklink");
        searchBarList.classList.add("list-dark");
        searchBarSections.forEach(el => el.classList.add('dark-section'))
        searchBar.classList.add("dark-searchbar");
        searchBarCloseIMG.classList.add("dark-searchbar-icons");
        searchBarCloseIMG.setAttribute("src", "media/close/round_close_white_24dp.png");
        searchBarSearchIMG.classList.add("dark-searchbar-icons");
        searchBarSearchIMG.setAttribute("src", "media/search/round_search_white_24dp.png");
        themeState = "dark";
        localStorage.clear();
        localStorage.setItem("themeState", themeState);
        savedThemeState = localStorage.getItem("themeState");
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
        bottomText.style.backgroundColor = "#d8d0d0";
        githubLogo.setAttribute("src", "media/GitHub-Mark/PNG/GitHub-Mark-32px.png");
        githubLogo.classList.remove("darkbutton-noback");
        document.getElementById("external-link-1").classList.remove("darklink");
        document.getElementById("external-link-2").classList.remove("darklink");
        searchBarList.classList.remove("list-dark");
        searchBarSections.forEach(el => el.classList.remove('dark-section'))
        searchBar.classList.remove("dark-searchbar");
        searchBarCloseIMG.classList.remove("dark-searchbar-icons");
        searchBarCloseIMG.setAttribute("src", "media/close/round_close_black_24dp.png");
        searchBarSearchIMG.classList.remove("dark-searchbar-icons");
        searchBarSearchIMG.setAttribute("src", "media/search/round_search_black_24dp.png");
        themeState = "light";
        localStorage.clear();
        localStorage.setItem("themeState", themeState);
        savedThemeState = localStorage.getItem("themeState");
    }
}

var savedThemeState = localStorage.getItem("themeState");

function savedTheme() {
    if (savedThemeState === "dark") {
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
        bottomText.style.backgroundColor = "#555353";
        githubLogo.setAttribute("src", "media/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png");
        githubLogo.classList.add("darkbutton-noback");
        document.getElementById("external-link-1").classList.add("darklink");
        document.getElementById("external-link-2").classList.add("darklink");
        searchBarList.classList.add("list-dark");
        searchBarSections.forEach(el => el.classList.add('dark-section'))
        searchBar.classList.add("dark-searchbar");
        searchBarCloseIMG.classList.add("dark-searchbar-icons");
        searchBarCloseIMG.setAttribute("src", "media/close/round_close_white_24dp.png");
        searchBarSearchIMG.classList.add("dark-searchbar-icons");
        searchBarSearchIMG.setAttribute("src", "media/search/round_search_white_24dp.png");
        themeState = "dark";
        localStorage.clear();
        localStorage.setItem("themeState", themeState);
        savedThemeState = localStorage.getItem("themeState");
    } else if (savedThemeState === "light") {
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
        bottomText.style.backgroundColor = "#d8d0d0";
        githubLogo.setAttribute("src", "media/GitHub-Mark/PNG/GitHub-Mark-32px.png");
        githubLogo.classList.remove("darkbutton-noback");
        document.getElementById("external-link-1").classList.remove("darklink");
        document.getElementById("external-link-2").classList.remove("darklink");
        searchBarList.classList.remove("list-dark");
        searchBarSections.forEach(el => el.classList.remove('dark-section'))
        searchBar.classList.remove("dark-searchbar");
        searchBarCloseIMG.classList.remove("dark-searchbar-icons");
        searchBarCloseIMG.setAttribute("src", "media/close/round_close_black_24dp.png");
        searchBarSearchIMG.classList.remove("dark-searchbar-icons");
        searchBarSearchIMG.setAttribute("src", "media/search/round_search_black_24dp.png");
        themeState = "light";
        localStorage.clear();
        localStorage.setItem("themeState", themeState);
        savedThemeState = localStorage.getItem("themeState");
    }
}

savedTheme()
