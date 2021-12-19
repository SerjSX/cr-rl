/* Sample:
ROMs[0] is for the name of the ROM.
ROMs[1] is for the rating, if there isn't a rating type "NA" instead. If there is already, calculate the average.
ROMs[2] is for the website, if there isn't a website link just type "nolink".
ROMs[3] is for the supported devices website, if there isn't a website link just type "nolink".
ROMs[4] is for the source code link, if there isn't a website link just type "nolink".

Add a , and insert yours.
*/

const ROMs = ["Name", "Rating", "Website", "Device List", "Source Code"]
ROMs[0] = ["LineageOS", "DotOS", "Pixel Experience", "ArrowOS", "Evolution X", "Paranoid Android", "HentaiOS", "AOSP", "AOKP", "BlissROMS", "SlimROMS", "CarbonROM", "AOSP Extended", "Pixel Extended", "HavocOS", "InfinityOS", "ProtonAOSP", "CipherOS", "Project Sakura", "Project Fluid", "MSM Extended", "AOSPK", "TheStyxProject", "BaikalOS", "OctaviOS", "StagOS", "KangOS", "SparkOS", "CelsiumOS", "SpiceOS", "AOSIP", "MoKee Open Source Project", "crDroid", "Pixel Plus UI", "LegionOS", "PixysOS", "AncientOS", "AICP", "Syberia Project", "RevengeOS", "ColtOS", "Potato Open Sauce Project", "CorvusOS", "CherisOS", "PalladiumOS", "KomodoOS", "The Xperience Project", "Project Awaken", "SuperiorOS", "FalconOS", "TenX-OS", "HyconOS", "ShapeShiftOS", "RohieOS", "Project 404", "WaveOS", "Derpfest", "Yet Another AOSP Project", "Project Radiant", "Nusantra Project", "Descendant"]
ROMs[1] = [10, 10, 9, 9, 8, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA]
ROMs[2] = ["https://lineageos.org/", "https://www.droidontime.com/", "https://download.pixelexperience.org/", "https://arrowos.net/", "https://evolution-x.org/", "https://paranoidandroid.co/", "https://wiki.newcentrix.helluvaos.com/", "https://source.android.com/", "https://aokp.co/", "https://blissroms.org/", "https://slimroms.org/", "https://carbonrom.org/", "https://aospextended.com/", "https://pixelextended.ninja/", "https://havoc-os.com/", nolink, "https://protonaosp.kdrag0n.dev/", "https://cipheros.github.io/", "https://projectsakura.xyz/", "https://projectfluid.org/", "https://project-xtended.org/", "https://aospk.org/", "https://styxproject.ml/", "https://baikalos.ru/", "http://www.octavi-os.com/", "https://stag-os.org/", "https://kangos.in/", "https://www.spark-os.live/", "https://cesiumos.xyz/", nolink, "http://aosip.weebly.com/", "https://www.mokeedev.com/en/", "https://crdroid.net/", "https://ppui.site/home", "https://legionos.org/", "https://pixysos.com/", "http://www.ancientrom.tech/", "https://www.aicp-rom.com/", "https://syberiaos.com/", "https://revengeos.com/", nolink, "https://potatoproject.co/", "https://www.corvusrom.com/", "https://cherishos.com/", "https://palladiumos.com/", "https://komodo-os.my.id/", "https://thexperienceproject.org/", nolink, "https://superioros.org/", "https://falconos.in/", nolink, "https://www.hyconos.in/#/", nolink, "https://rohieos.github.io/", "https://project404.us/", nolink, "https://derpfest.org/", "https://yaosp.dev/", nolink, "https://nusantaraproject.my.id/", "https://descendant.me/"]
ROMs[3] = ["https://wiki.lineageos.org/devices/", "https://www.droidontime.com/devices", "https://download.pixelexperience.org/devices", "https://arrowos.net/download", "https://evolution-x.org/download", "https://paranoidandroid.co/downloads", "https://github.com/hentaiOS-Devices", "https://aokp.co/devices/", "https://forum.xda-developers.com/", "https://downloads.blissroms.org/", "https://slimroms.org/#/download", "https://get.carbonrom.org/", "https://downloads.aospextended.com/", "https://sourceforge.net/projects/pixelextended/files/", "https://havoc-os.com/download", "https://sourceforge.net/projects/infinityosrom/files/", "https://protonaosp.kdrag0n.dev/getting-started/supported-devices", "https://cipheros.github.io/Downloads/", "https://projectsakura.xyz/download/", "https://projectfluid.org/downloads.html", "https://downloads.project-xtended.org/", "https://download.aospk.org/", "https://sourceforge.net/projects/styx-os/files/Athena/", "https://dl.baikalos.ru/", "https://octavi-os.com/downloads", "https://downloads.stag-os.org/", "https://try.kangos.in/download_kangos/", "https://downloads.spark-os.live/", "https://cesiumos.xyz/devices/", "https://sourceforge.net/projects/spiceos/files/", "https://aosip.dev/", "https://download.mokeedev.com/", "https://crdroid.net/dl.php", "https://ppui.site/download", "https://legionos.org/download/", "https://pixysos.com/devices", "http://www.ancientrom.tech/downloads.html", "https://dwnld.aicp-rom.com/", "https://syberiaos.com/downloads", "https://download.revengeos.com/", "https://sourceforge.net/projects/coltos/files/", "https://potatoproject.co/devices", "https://www.corvusrom.com/download.html", "https://downloads.cherishos.com/", "https://palladiumos.com/download", "https://komodo-os.my.id/downloads.html", "https://thexperienceproject.org/downloads/OTA/", "https://sourceforge.net/projects/project-awaken/files/", "https://downloads.superioros.org/", "https://falconos.in/Download.html", "https://sourceforge.net/projects/tenx-os/files/", "https://www.hyconos.in/#/downloads", "https://sourceforge.net/projects/shapeshiftos/files/", "https://rohieos.github.io/download.html", "https://downloads.project404.us/", nolink, "https://github.com/DerpFest-Devices/", "https://mirror.codebucket.de/yaap/", nolink, "https://nusantaraproject.my.id/downloads/", "https://downloads.descendant.me/"]
ROMs[4] = ["https://github.com/lineageos", "https://github.com/dotos", "https://github.com/PixelExperience", "https://github.com/arrowos", "https://github.com/Evolution-X", "https://github.com/AOSPA", "https://github.com/hentaiOS", "https://source.android.com/setup/build/downloading", "https://aokp.co/source/", "https://github.com/BlissRoms", "https://github.com/SlimRoms", "https://github.com/CarbonROM", "https://github.com/AospExtended", "https://github.com/PixelExtended", "https://github.com/Havoc-OS", "https://github.com/Infinity-OS", "https://github.com/ProtonAOSP", "https://github.com/CipherOS", "https://github.com/ProjectSakura", "https://github.com/Project-Fluid", "https://github.com/Project-Xtended", "https://github.com/AOSPK", "https://github.com/StyxProject", "https://github.com/baikalos/", "https://github.com/Octavi-OS", "https://github.com/StagOS", "https://github.com/Kang-OS-R", "https://github.com/Spark-Rom", "https://github.com/CesiumOS-org", "https://github.com/SpiceOS", "https://github.com/AOSiP", "https://github.com/MoKee", "https://github.com/crdroidandroid", "https://github.com/PixelPlusUI-Elle", "https://github.com/Project-LegionOS", "https://github.com/PixysOS", "https://github.com/Ancient-Lab", "https://github.com/AICP/", "https://github.com/syberia-project", "https://github.com/revengeos", "https://github.com/Colt-Enigma", "https://github.com/PotatoProject", "https://github.com/Corvus-ROM", "https://github.com/CherishOS", "https://github.com/Palladium-OS", "https://github.com/Komodo-OS-Rom", "https://github.com/xperience-aosp-lollipop", "https://github.com/Project-Awaken", "https://github.com/SuperiorOS-Devices", "https://github.com/Falcon-OS", "https://sourceforge.net/p/tenx-os/code/ref/master/", "https://github.com/HyconOS", "https://github.com/ShapeShiftOS", "https://github.com/RohieOS", "https://github.com/P-404", "https://github.com/Wave-Project", "https://github.com/DerpLab", "https://github.com/yaap", "https://github.com/ProjectRadiant", "https://github.com/NusantaraProject-ROM", "https://github.com/Descendant-xi"]


for (let i = 0; i < ROMs[0].length; i++) {
    const romTable = document.getElementById("custom-rom-table");

    const romName = ROMs[0][i];
    const romRating = ROMs[1][i];
    const romWebsite = ROMs[2][i];
    const romSupportedDevices = ROMs[3][i];
    const romSourceCode = ROMs[4][i];

    const createMain = document.createElement("tr");
    romTable.appendChild(createMain);

    const createName = document.createElement("td");
    createName.classList.add("table-content", "table-content-first", "table-inputs")
    createName.setAttribute("id", romName.toLowerCase() + "_name");
    createName.textContent = romName;
    createMain.appendChild(createName);

    const createRating = document.createElement("td");
    createRating.classList.add("table-content", "table-content-middle", "table-inputs")
    createRating.setAttribute("id", romName.toLowerCase() + "_rating");
    createRating.textContent = romRating;
    createMain.appendChild(createRating);

    const createLinks = document.createElement("td");
    createLinks.classList.add("table-content", "table-content-last", "table-inputs")
    createMain.appendChild(createLinks);

    const createLinksWebsite = document.createElement("a");
    if (romWebsite !== nolink) {
    createLinksWebsite.setAttribute("target", "_blank");
    }
    createLinksWebsite.setAttribute("id", romName.toLowerCase() + "_website");
    createLinksWebsite.setAttribute("href", romWebsite);
    createLinksWebsite.textContent = "Website";
    createLinks.appendChild(createLinksWebsite);

    const createBreak1 = document.createElement("br");
    createLinks.appendChild(createBreak1);

    const createLinksDevices = document.createElement("a");
    if (romSupportedDevices !== nolink) {
    createLinksDevices.setAttribute("target", "_blank");
    }
    createLinksDevices.setAttribute("id", romName.toLowerCase() + "_devices");
    createLinksDevices.setAttribute("href", romSupportedDevices);
    createLinksDevices.textContent = "Supported Devices";
    createLinks.appendChild(createLinksDevices);

    const createBreak2 = document.createElement("br");
    createLinks.appendChild(createBreak2);

    const createLinksSourceCode = document.createElement("a");
    if (romSourceCode !== nolink) {
    createLinksSourceCode.setAttribute("target", "_blank");
    }
    createLinksSourceCode.setAttribute("id", romName.toLowerCase() + "_sourcecode");
    createLinksSourceCode.setAttribute("href", romSourceCode);
    createLinksSourceCode.textContent = "Source Code";
    createLinks.appendChild(createLinksSourceCode);

}
