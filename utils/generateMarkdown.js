// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return
  `
  # ${answers.projecttitle}

  ## Description
    ${answers.description}
  
  ## Table of Contents
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
    ${answers.installion}
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.credits}

  ## Contribution
  ${answers.constribution}
  
  ## License 
  
  ![badge](https://img.shields,io/badge/license-${answers.license}-brightblue)



`;
}

module.exports = generateMarkdown;
