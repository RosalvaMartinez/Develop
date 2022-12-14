//using require to be able to use objects from licenseSections file in renderLicenseSection function
const licenseSections = require('./licenseSections.js')
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  console.log(license)
  //passing in license user chose from multiple choice
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Zlib':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    // If there is no license, return an empty string
    case 'None':
      return ''
  }
}

renderLicenseBadge()
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  //passing in license user chose from multiple choice
  switch (license) {
    case 'Apache':
      return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)'
    case 'Eclipse':
      return '[https://opensource.org/licenses/EPL-1.0](https://opensource.org/licenses/EPL-1.0)'
    case 'MIT':
      return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)'
    case 'Zlib':
      return '[https://opensource.org/licenses/Zlib](https://opensource.org/licenses/Zlib)'
    case 'WTFPL':
      return '[http://www.wtfpl.net/about/](http://www.wtfpl.net/about/)'
    case 'The Unlicense':
      return '[http://unlicense.org/](http://unlicense.org/)'
    // If there is no license, return an empty string
    case 'None':
      return ''
  }
}

renderLicenseLink()
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  //passing in license user chose from multiple choice
  switch (license) {
    //Using Apache object from licenseSections file
    case 'Apache':
      return licenseSections.Apache
    //Using Boost object from licenseSections file
    case 'Boost':
      return licenseSections.Boost
    //Using MIT object from licenseSections file
    case 'MIT':
      return licenseSections.MIT
    //Using Zlib object from licenseSections file
    case 'Zlib':
      return licenseSections.Zlib
    //Using WTFPL object from licenseSections file
    case 'WTFPL':
      return licenseSections.WTFPL
    //Using theUnlicense object from licenseSections file
    case 'The Unlicense':
      return licenseSections.theUnlicense
    // If there is no license, return an empty string
    case 'none':
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //variables represent functions with correct items passed in 
  var licenseBadge = renderLicenseBadge(data.license)
  var licenseLink = renderLicenseLink(data.license)
  var licenseSection = renderLicenseSection(data.license)
  console.log(licenseBadge, licenseLink)
  return `
  # ${data.projectTitle}
  \n${licenseBadge}

  
  ## Description

  \n${data.descriptionWhat}
  ${data.descriptionWhy}
  ${data.descriptionSolution}
  ${data.descriptionLearn}


  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  \n${data.installation}

  ## Usage

  \n${data.usage}
  \n${data.screenshot}


  ## Credits

  \n${data.creditThirdPartyAssets}
  \n${data.creditTutorials}

  ## License

  \n${licenseLink}
  \n${licenseSection}


  ## Features

  \n${data.features}

  ## Contributions

  \n${data.creditCollaborators}
  \n${data.howToContribute}

  ## Tests

  \n${data.tests}

  ## Questions

  Reach me with additional questions here:
  \nGithub: ${data.githubUsername} ${data.githubProfileLink}
  \nEmail: ${data.email}
`;
}

module.exports = generateMarkdown;


