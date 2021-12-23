const romsHeading = document.getElementById("table-heading-rom-js");
const recoveriesHeading = document.getElementById("table-heading-recovery-js");

Recoveries.sort(function (a, b) {
    if (a.rating === NA) {
        return 1
    } else if (b.rating === NA) {
        return -1
    } else {
        return b.rating - a.rating;
    };
  });

  ROMs.sort(function (a, b) {
    if (a.rating === NA) {
        return 1
    } else if (b.rating === NA) {
        return -1
    } else {
        return b.rating - a.rating;
    };
  });

  for (let i = 0; i < ROMs.length; i++) {
    const romTable = document.getElementById("append-here-roms");
    const searchbarContent = document.getElementById("searchbar-content");

    const romName = ROMs[i]["name"];
    const romRating = ROMs[i]["rating"];
    const romWebsite = ROMs[i]["website"];
    const romSupportedDevices = ROMs[i]["supported_devices"];
    const romSourceCode = ROMs[i]["source_code"];

    const createMain = document.createElement("tr");
    createMain.setAttribute("id", romName.toLowerCase());
    romTable.appendChild(createMain);

    const createName = document.createElement("td");
    createName.classList.add("table-content", "table-content-first", "table-inputs")
    createName.setAttribute("id", romName.toLowerCase() + "_name");
    if (romRating > 8) {
    createName.textContent = romName + " " + "-" + " " + "🌟";
    } else if (romRating > 6) {
        createName.textContent = romName + " " + "-" + " " + "⭐";
    } else {
        createName.textContent = romName;
    }
    createMain.appendChild(createName);

    const createRating = document.createElement("td");
    createRating.classList.add("table-content", "table-content-middle", "table-inputs")
    createRating.setAttribute("id", romName.toLowerCase() + "_rating");
    createRating.textContent = romRating;
    createMain.appendChild(createRating);

    const createLinks = document.createElement("td");
    createLinks.classList.add("table-content", "table-content-last", "table-inputs")
    createMain.appendChild(createLinks);

    if (romWebsite !== "nolink") {
    const createLinksWebsite = document.createElement("a");
    createLinksWebsite.setAttribute("target", "_blank");
    createLinksWebsite.setAttribute("id", romName.toLowerCase() + "_website");
    createLinksWebsite.setAttribute("href", romWebsite);
    createLinksWebsite.textContent = "Website";
    createLinks.appendChild(createLinksWebsite);

    const createBreak1 = document.createElement("br");
    createLinks.appendChild(createBreak1);
    }

    if (romSupportedDevices !== "nolink") {
    const createLinksDevices = document.createElement("a");
    createLinksDevices.setAttribute("target", "_blank");
    createLinksDevices.setAttribute("id", romName.toLowerCase() + "_devices");
    createLinksDevices.setAttribute("href", romSupportedDevices);
    createLinksDevices.textContent = "Supported Devices";
    createLinks.appendChild(createLinksDevices);

    const createBreak2 = document.createElement("br");
    createLinks.appendChild(createBreak2);
    }

    if (romSourceCode !== "nolink") {
    const createLinksSourceCode = document.createElement("a");
    createLinksSourceCode.setAttribute("target", "_blank");
    createLinksSourceCode.setAttribute("id", romName.toLowerCase() + "_sourcecode");
    createLinksSourceCode.setAttribute("href", romSourceCode);
    createLinksSourceCode.textContent = "Source Code";
    createLinks.appendChild(createLinksSourceCode);
    }

    const addToSearch = document.createElement("li");
    const addToSearchLinkWrap = document.createElement("a")

    addToSearch.setAttribute("class", "section");
    addToSearch.setAttribute("id", "section-js");
    addToSearch.setAttribute("role", "option");
    addToSearch.textContent = romName;

    addToSearchLinkWrap.setAttribute("href", "#" + romName.toLowerCase());
    addToSearchLinkWrap.setAttribute("class", "exception");

    searchbarContent.appendChild(addToSearchLinkWrap);
    addToSearchLinkWrap.appendChild(addToSearch);

    romsHeading.textContent = "Custom ROMs";
}



  for (let i = 0; i < Recoveries.length; i++) {
    const recoveryTable = document.getElementById("append-here-recoveries");
    const searchbarContent = document.getElementById("searchbar-content");

    const recoveryName = Recoveries[i]["name"];
    const recoveryRating = Recoveries[i]["rating"];
    const recoveryWebsite = Recoveries[i]["website"];
    const recoverySupportedDevices = Recoveries[i]["supported_devices"];
    const recoverySourceCode = Recoveries[i]["source_code"];

    const createMain = document.createElement("tr");
    createMain.setAttribute("id", recoveryName.toLowerCase());
    recoveryTable.appendChild(createMain);

    const createName = document.createElement("td");
    createName.classList.add("table-content", "table-content-first", "table-inputs")
    createName.setAttribute("id", recoveryName.toLowerCase() + "_name");
    if (recoveryRating > 8) {
        createName.textContent = recoveryName + " " + "-" + " " + "🌟";
        } else if (recoveryRating > 6) {
            createName.textContent = recoveryName + " " + "-" + " " + "⭐";
        } else {
            createName.textContent = recoveryName;
        }
    createMain.appendChild(createName);

    const createRating = document.createElement("td");
    createRating.classList.add("table-content", "table-content-middle", "table-inputs")
    createRating.setAttribute("id", recoveryName.toLowerCase() + "_rating");
    createRating.textContent = recoveryRating;
    createMain.appendChild(createRating);

    const createLinks = document.createElement("td");
    createLinks.classList.add("table-content", "table-content-last", "table-inputs")
    createMain.appendChild(createLinks);

    if (recoveryWebsite !== "nolink") {
    const createLinksWebsite = document.createElement("a");
    createLinksWebsite.setAttribute("target", "_blank");
    createLinksWebsite.setAttribute("id", recoveryName.toLowerCase() + "_website");
    createLinksWebsite.setAttribute("href", recoveryWebsite);
    createLinksWebsite.textContent = "Website";
    createLinks.appendChild(createLinksWebsite);

    const createBreak1 = document.createElement("br");
    createLinks.appendChild(createBreak1);
    }

    if (recoverySupportedDevices !== "nolink") {
    const createLinksDevices = document.createElement("a");
    createLinksDevices.setAttribute("target", "_blank");
    createLinksDevices.setAttribute("id", recoveryName.toLowerCase() + "_devices");
    createLinksDevices.setAttribute("href", recoverySupportedDevices);
    createLinksDevices.textContent = "Supported Devices";
    createLinks.appendChild(createLinksDevices);

    const createBreak2 = document.createElement("br");
    createLinks.appendChild(createBreak2);
    }

    if (recoverySourceCode !== "nolink") {
    const createLinksSourceCode = document.createElement("a");
    createLinksSourceCode.setAttribute("target", "_blank");
    createLinksSourceCode.setAttribute("id", recoveryName.toLowerCase() + "_sourcecode");
    createLinksSourceCode.setAttribute("href", recoverySourceCode);
    createLinksSourceCode.textContent = "Source Code";
    createLinks.appendChild(createLinksSourceCode);
    }

    const addToSearch = document.createElement("li");
    const addToSearchLinkWrap = document.createElement("a")

    addToSearch.setAttribute("class", "section");
    addToSearch.setAttribute("id", "section-js");
    addToSearch.setAttribute("role", "option");
    addToSearch.textContent = recoveryName;

    addToSearchLinkWrap.setAttribute("href", "#" + recoveryName.toLowerCase());
    addToSearchLinkWrap.setAttribute("class", "exception");

    searchbarContent.appendChild(addToSearchLinkWrap);
    addToSearchLinkWrap.appendChild(addToSearch);

    recoveriesHeading.textContent = "Custom Recoveries";
}
