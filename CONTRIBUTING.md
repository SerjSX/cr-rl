<b>This document allows you to understand how to contribute to this project, and its guidlines.</b>

This document consists of the following sections:
1. <a href="#allowedcontributions">Allowed Contributions</a>
2. <a href="#forbiddencontributions">Forbidden Contributions</a>
3. <a href="#pullrequests">Pull Requests</a>
4. <a href="#colorcontribution">Contributing to Colors</a>
5. <a href="#wordandreferenceusage">Word and Reference Usage</a>

---

### <a id="allowedcontributions">1. Allowed Contributions</a>
You aren't permitted to change everything from the code, you can change only these parts of the project:
- javascript/recoveries.js: contributing to this file is permitted for adding new custom recoveries on the project.
- javascript/roms.js: contributing to this file is permitted for adding new custom ROMs on the project.
- javascript/generalignorable.js: contributing to this file is permitted for adding variables that are going to be used in both of the following files: javascript/recoveries.js, javascript/roms.js. This way it wouldn't get messed up with the list of recoveries and ROMs, add the variables at the top of the code, preferable with const.
- colors.txt: contributing to this file is permitted only for suggesting new colors, check <a href="#colorscontribution">this</a> for more information.

### <a id="forbiddencontributions">2. Forbidden Contributions</a>
You are prohibited to change anything from the following codes:
- css/main.css: contributing to this file is prohibited to prevent unexpected errors.
- index.html: contributing to this file is prohibited to prevent unexpected errors with the native code.
- javascript/automation.js: contributing to this file is prohibited to prevent unexpected errors.
Any contribution to either of these files should be first accepted by the owner (SerjSX) through either email (https://github.com/SerjSX) or filing an issue (https://github.com/SerjSX/cr-rl/issues) both with explaining for what purpose you want to change these files.

### <a id="pullrequests">3. Pull requests</a>
After adding your changes to the project, create a pull request, unless you want to keep it for personal use. You can read this to learn more on how to create a pull request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

### <a id="colorcontribution">4. Contributing to Colors</a>
Contributing to the colors.txt file is mainly for suggesting new colors. After forking the project and opening the text file, at the bottom add this:
[Color Suggestion]<br>
Light Theme:<br>
Primary: #<br>
P - Light: # <br>
P - Dark: #<br>

Secondary: #<br>
S - Light: #<br>
S - Dark: #<br>

Text on P: #<br>
Text on S: #<br>

Dark Theme: <br>
Background: #<br>
Primary: #<br>
[End]<br>
And fill in the code hex of the colors that you want to suggest. If you want to directly change the colors from css/main.css, check <a id="forbiddencontributions">Forbidden Contributors</a>.

### <a id="wordandreferenceusage">5. Word and Reference Usage</a>
Words and references with illegal, inappropriate, cyberbullying, hating and offending connections are forbidden and the pull request will get denied. Please be aware of what you are inserting in the fork of this project. The user sending the pull request might get reported to Github if the content inserted is very sensitive.

---

End of Document - Please follow these before starting to contribute the project, any questions feel free to email SerjSX (https://github.com/SerjSX) or file an issue (https://github.com/SerjSX/cr-rl/issues). If you haven't followed these guidelines, your pull request will immediately get denied.
