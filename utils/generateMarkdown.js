
// function to generate markdown for README
function generateMarkdown(answers) {
  return `
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
  ${answers.contribution}
  
  ## License 
  
  ![badge](https://img.shields,io/badge/license-${answers.license}-green)

`
};

module.exports = generateMarkdown;
