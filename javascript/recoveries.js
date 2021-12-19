/* Sample:
Recoveries[0] is for the name of the recovery.
Recoveries[1] is for the rating, if there isn't a rating type "NA" instead. If there is already, calculate the average.
Recoveries[2] is for the website, if there isn't a website link just type "nolink".
Recoveries[3] is for the supported devices website, if there isn't a website link just type "nolink".
Recoveries[4] is for the source code link, if there isn't a website link just type "nolink".

Add a , and insert yours.
*/

const Recoveries = ["Name", "Rating", "Website", "Device List", "Source Code"]
Recoveries[0] = ["TWRP", "SkyHawk", "OrangeFox", "LineageOS Recovery", "Pterodon"]
Recoveries[1] = [10, 10, 9.5, 1.5, 1]
Recoveries[2] = ["https://twrp.me/", "https://skyhawkrecovery.github.io/", "https://orangefox.download/", "https://lineageos.org/", nolink]
Recoveries[3] = ["https://twrp.me/Devices/", "https://sourceforge.net/projects/shrp/files/", "https://orangefox.download/", "https://wiki.lineageos.org/devices/", nolink]
Recoveries[4] = ["https://github.com/TeamWin", "https://github.com/SHRP", "https://gitlab.com/OrangeFox/infrastructure/dsite", "https://github.com/lineageos", "https://github.com/PterodonRecovery"]


for (let i = 0; i < Recoveries[0].length; i++) {
    const recoveryTable = document.getElementById("custom-recovery-table");

    const recoveryName = Recoveries[0][i];
    const recoveryRating = Recoveries[1][i];
    const recoveryWebsite = Recoveries[2][i];
    const recoverySupportedDevices = Recoveries[3][i];
    const recoverySourceCode = Recoveries[4][i];

    const createMain = document.createElement("tr");
    recoveryTable.appendChild(createMain);

    const createName = document.createElement("td");
    createName.classList.add("table-content", "table-content-first", "table-inputs")
    createName.setAttribute("id", recoveryName.toLowerCase() + "_name");
    createName.textContent = recoveryName;
    createMain.appendChild(createName);

    const createRating = document.createElement("td");
    createRating.classList.add("table-content", "table-content-middle", "table-inputs")
    createRating.setAttribute("id", recoveryName.toLowerCase() + "_rating");
    createRating.textContent = recoveryRating;
    createMain.appendChild(createRating);

    const createLinks = document.createElement("td");
    createLinks.classList.add("table-content", "table-content-last", "table-inputs")
    createMain.appendChild(createLinks);

    const createLinksWebsite = document.createElement("a");
    if (recoveryWebsite !== nolink) {
    createLinksWebsite.setAttribute("target", "_blank");
    }
    createLinksWebsite.setAttribute("id", recoveryName.toLowerCase() + "_website");
    createLinksWebsite.setAttribute("href", recoveryWebsite);
    createLinksWebsite.textContent = "Website";
    createLinks.appendChild(createLinksWebsite);

    const createBreak1 = document.createElement("br");
    createLinks.appendChild(createBreak1);

    const createLinksDevices = document.createElement("a");
    if (recoverySupportedDevices !== nolink) {
    createLinksDevices.setAttribute("target", "_blank");
    }
    createLinksDevices.setAttribute("id", recoveryName.toLowerCase() + "_devices");
    createLinksDevices.setAttribute("href", recoverySupportedDevices);
    createLinksDevices.textContent = "Supported Devices";
    createLinks.appendChild(createLinksDevices);

    const createBreak2 = document.createElement("br");
    createLinks.appendChild(createBreak2);

    const createLinksSourceCode = document.createElement("a");
    if (recoverySourceCode !== nolink) {
    createLinksSourceCode.setAttribute("target", "_blank");
    }
    createLinksSourceCode.setAttribute("id", recoveryName.toLowerCase() + "_sourcecode");
    createLinksSourceCode.setAttribute("href", recoverySourceCode);
    createLinksSourceCode.textContent = "Source Code";
    createLinks.appendChild(createLinksSourceCode);

}
