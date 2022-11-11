// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = '';
        if(license === 'MIT') {
            licenseBadge = '![License: MIT (https://img.shields.io/badge/License-MIT-yellow.svg)]'
        } else if(license === 'GNU GPLv3') {
            licenseBadge = '![License: GPL v3 (https://img.shields.io/badge/License-GPLv3-blue.svg)'
        } else if(license === 'Apache') {
            licenseBadge = '![License: Apache 2.0 (https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
        } else {
            licenseBadge = '';
        }
        return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
        if(license === 'MIT') {
            licenseLink = 'https://choosealicense.com/licenses/mit/'
        } else if(license === 'GNU GPLv3') {
            licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
        } else if(license === 'Apache') {
            licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
        } else {
            licenseLink = '';
        }
        return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = '';
    if(license === 'No License') {
        licenseSection = ''
    } else {
        licenseSection = 'License';
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, installation, usage, contribution, license, test, github, email) {
  return `# ${title}
${renderLicenseBadge(license)} 
## Description
### ${description}

## Installation
### ${installation}

## Usage
### ${usage}

## Contributors
###${contribution}

## ${renderLicenseSection(license)} 
### ${renderLicenseLink(license)}

## Tests
###${test}

## Questions
### If you have any questions about this program please refer to the links below.
### Github: (https://github.com/${github}) 
### Email: [${email}](mailto:${email})

## Table Of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contibutors](#Contributors)
- [License](#License)
- [Tests](#Tests)
- [Questions](#Questions)
`;
}

module.exports = {
    generateMarkdown
};