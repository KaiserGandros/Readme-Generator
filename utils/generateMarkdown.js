// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Academic': '[![License](https://img.shields.io/badge/License-Academic-blue.svg)](https://opensource.org/licenses/AFL-3.0)'
};

return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla': 'https://opensource.org/licenses/MPL-2.0',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GNU': 'https://www.gnu.org/licenses/gpl-3.0',
    'Academic': 'https://opensource.org/licenses/AFL-3.0'
};

return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (!license || license === 'None') {
     return '';
  }

    return `## License
This project is licensed under the ${license} license.
For more information, please visit ${renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

${renderLicenseSection(answers.license)}

## Tests
${answers.test}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).

GitHub: [${answers.username}](https://github.com/${answers.username})

`;
}

module.exports = generateMarkdown;
