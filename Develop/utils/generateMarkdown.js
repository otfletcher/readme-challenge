const licenseArr = ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"];
function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
  } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license===licenseArr[2]){
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } else if (license===licenseArr[3]){
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license===licenseArr[4]){
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license===licenseArr[5]){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license===licenseArr[6]){
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license===licenseArr[7]){
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
  } else if (license===licenseArr[8]){
    return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
  } else if (license===licenseArr[9]){
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  } else if (license===licenseArr[10]){
    return "[![License: ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-lightgrey.svg)](https://opensource.org/licenses/ECL-2.0)"
  } else if (license===licenseArr[11]){
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license===licenseArr[12]){
    return "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
  } else if (license===licenseArr[13]){
    return "[![License: EUPL-1.1](https://img.shields.io/badge/License-EUPL--1.1-lightgrey.svg)](https://choosealicense.com/licenses/eupl-1.1/)"
  } else if (license===licenseArr[14]){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license===licenseArr[15]){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license===licenseArr[16]){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license===licenseArr[17]){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)"
  } else if (license===licenseArr[18]){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  } else if (license===licenseArr[19]){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (license===licenseArr[20]){
    return "[![License: LPPL-1.3c](https://img.shields.io/badge/License-LPPL--1.3c-lightgrey.svg)](https://spdx.org/licenses/LPPL-1.3c.html)"
  } else if (license===licenseArr[21]){
    return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-lightgrey.svg)](https://opensource.org/licenses/MS-PL)"
  } else if (license===licenseArr[22]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[23]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license===licenseArr[24]){
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)"
  } else if (license===licenseArr[25]){
    return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
  } else if (license===licenseArr[26]){
    return "[![License: NCSA](https://img.shields.io/badge/License-NCSA-lightgrey.svg)](https://opensource.org/licenses/NCSA)"
  } else if (license===licenseArr[27]){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else if (license===licenseArr[28]){
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  } else {
    return ""
  }
};

function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/AFL-3.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/Artistic-2.0)`
  } else if (license===licenseArr[3]){
    return `[${licenseArr[3]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license===licenseArr[4]){
    return `[${licenseArr[4]}](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license===licenseArr[5]){
    return `[${licenseArr[5]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license===licenseArr[6]){
    return `[${licenseArr[6]}](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license===licenseArr[7]){
    return `[${licenseArr[7]}](https://creativecommons.org/licenses/by/4.0/)`
  } else if (license===licenseArr[8]){
    return `[${licenseArr[8]}](https://creativecommons.org/licenses/by-sa/4.0/)`
  } else if (license===licenseArr[9]){
    return `[${licenseArr[9]}](http://www.wtfpl.net/about/)`
  } else if (license===licenseArr[10]){
    return `[${licenseArr[10]}](https://opensource.org/licenses/ECL-2.0)`
  } else if (license===licenseArr[11]){
    return `[${licenseArr[11]}](https://opensource.org/licenses/EPL-1.0)`
  } else if (license===licenseArr[12]){
    return `[${licenseArr[12]}](https://opensource.org/licenses/EPL-2.0)`
  } else if (license===licenseArr[13]){
    return `[${licenseArr[13]}](https://choosealicense.com/licenses/eupl-1.1/)`
  } else if (license===licenseArr[14]){
    return `[${licenseArr[14]}](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license===licenseArr[15]){
    return `[${licenseArr[15]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license===licenseArr[16]){
    return `[${licenseArr[16]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license===licenseArr[17]){
    return `[${licenseArr[17]}](https://www.gnu.org/licenses/lgpl-2.1)`
  } else if (license===licenseArr[18]){
    return `[${licenseArr[18]}](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license===licenseArr[19]){
    return `[${licenseArr[19]}](https://opensource.org/licenses/ISC)`
  } else if (license===licenseArr[20]){
    return `[${licenseArr[20]}](https://spdx.org/licenses/LPPL-1.3c.html)`
  } else if (license===licenseArr[21]){
    return `[${licenseArr[21]}](https://opensource.org/licenses/MS-PL)`
  } else if (license===licenseArr[22]){
    return `[${licenseArr[22]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[23]){
    return `[${licenseArr[23]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license===licenseArr[24]){
    return `[${licenseArr[24]}](https://opensource.org/licenses/OSL-3.0)`
  } else if (license===licenseArr[25]){
    return `[${licenseArr[25]}](https://opensource.org/licenses/OFL-1.1)`
  } else if (license===licenseArr[26]){
    return `[${licenseArr[26]}](https://opensource.org/licenses/NCSA)`
  } else if (license===licenseArr[27]){
    return `[${licenseArr[27]}](http://unlicense.org/)`
  } else if (license===licenseArr[28]){
    return `[${licenseArr[28]}](https://opensource.org/licenses/Zlib)`
  } else {
    return ""
  }
};

function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else if (license===licenseArr[4]){
    return `Read more about ${licenseArr[4]} here:`
  } else if (license===licenseArr[5]){
    return `Read more about ${licenseArr[5]} here:`
  } else if (license===licenseArr[6]){
    return `Read more about ${licenseArr[6]} here:`
  } else if (license===licenseArr[7]){
    return `Read more about ${licenseArr[7]} here:`
  } else if (license===licenseArr[8]){
    return `Read more about ${licenseArr[8]} here:`
  } else if (license===licenseArr[9]){
    return `Read more about ${licenseArr[9]} here:`
  } else if (license===licenseArr[10]){
    return `Read more about ${licenseArr[10]} here:`
  } else if (license===licenseArr[11]){
    return `Read more about ${licenseArr[11]} here:`
  } else if (license===licenseArr[12]){
    return `Read more about ${licenseArr[12]} here:`
  } else if (license===licenseArr[13]){
    return `Read more about ${licenseArr[13]} here:`
  } else if (license===licenseArr[14]){
    return `Read more about ${licenseArr[14]} here:`
  } else if (license===licenseArr[15]){
    return `Read more about ${licenseArr[15]} here:`
  } else if (license===licenseArr[16]){
    return `Read more about ${licenseArr[16]} here:`
  } else if (license===licenseArr[17]){
    return `Read more about ${licenseArr[17]} here:`
  } else if (license===licenseArr[18]){
    return `Read more about ${licenseArr[18]} here:`
  } else if (license===licenseArr[19]){
    return `Read more about ${licenseArr[19]} here:`
  } else if (license===licenseArr[20]){
    return `Read more about ${licenseArr[20]} here:`
  } else if (license===licenseArr[21]){
    return `Read more about ${licenseArr[21]} here:`
  } else if (license===licenseArr[22]){
    return `Read more about ${licenseArr[22]} here:`
  } else if (license===licenseArr[23]){
    return `Read more about ${licenseArr[23]} here:`
  } else if (license===licenseArr[24]){
    return `Read more about ${licenseArr[24]} here:`
  } else if (license===licenseArr[25]){
    return `Read more about ${licenseArr[25]} here:`
  } else if (license===licenseArr[26]){
    return `Read more about ${licenseArr[26]} here:`
  } else if (license===licenseArr[27]){
    return `Read more about ${licenseArr[27]} here:`
  } else if (license===licenseArr[28]){
    return `Read more about ${licenseArr[28]} here:`
  } else {
    return ""
  }
};

function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Contact](#contact)

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribute 
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Contact me: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}
`;
}

module.exports = generateMarkdown;
