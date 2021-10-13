/* Sample:
const CustomRecovery = ["Custom Recovery Name", Rating Number, "Website Link", "Devices Link", "Source Code Link"]
document.getElementById("customrecovery_name").textContent = CustomRecovery[0];
document.getElementById("customrecovery_rating").textContent = CustomRecovery[1];
document.getElementById("customrecovery_website").setAttribute("href", CustomRecovery[2]);
document.getElementById("customrecovery_devices").setAttribute("href", CustomRecovery[3]);
document.getElementById("customrecovery_sourcecode").setAttribute("href", CustomRecovery[4]);

Read Wiki on Github to view in more detail (the meaning of everything and etc) or do it according to the ones below.
*/

const TWRP = ["TWRP", 10, "https://twrp.me/", "https://twrp.me/Devices/", "https://github.com/TeamWin"]
document.getElementById("twrp_name").textContent = TWRP[0];
document.getElementById("twrp_rating").textContent = TWRP[1];
document.getElementById("twrp_website").setAttribute("href", TWRP[2]);
document.getElementById("twrp_devices").setAttribute("href", TWRP[3]);
document.getElementById("twrp_sourcecode").setAttribute("href", TWRP[4]);

const SkyHawk = ["SkyHawk", 10, "https://skyhawkrecovery.github.io/", "https://sourceforge.net/projects/shrp/files/", "https://github.com/SHRP"]
document.getElementById("skyhawk_name").textContent = SkyHawk[0];
document.getElementById("skyhawk_rating").textContent = SkyHawk[1];
document.getElementById("skyhawk_website").setAttribute("href", SkyHawk[2]);
document.getElementById("skyhawk_devices").setAttribute("href", SkyHawk[3]);
document.getElementById("skyhawk_sourcecode").setAttribute("href", SkyHawk[4]);

const OrangeFox = ["OrangeFox", 9.5, "https://orangefox.download/", "https://orangefox.download/", "https://gitlab.com/OrangeFox/infrastructure/dsite"]
document.getElementById("orangefox_name").textContent = OrangeFox[0];
document.getElementById("orangefox_rating").textContent = OrangeFox[1];
document.getElementById("orangefox_website").setAttribute("href", OrangeFox[2]);
document.getElementById("orangefox_devices").setAttribute("href", OrangeFox[3]);
document.getElementById("orangefox_sourcecode").setAttribute("href", OrangeFox[4]);

const Pterodon = ["Pterodon", 1, "https://github.com/PterodonRecovery", "https://github.com/PterodonRecovery", "https://github.com/PterodonRecovery"]
document.getElementById("pterodon_name").textContent = Pterodon[0];
document.getElementById("pterodon_rating").textContent = Pterodon[1];
document.getElementById("pterodon_website").setAttribute("href", Pterodon[2]);
document.getElementById("pterodon_devices").setAttribute("href", Pterodon[3]);
document.getElementById("pterodon_sourcecode").setAttribute("href", Pterodon[4]);