
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
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  [${answers.credits}](https://github.com/${answers.gituser})

  ## Contribution
 ${answers.contribution}
  
  ## License 
  
  ![badge](https://img.shields.io/badge/LICENSE-${answers.license}-green)

`
};

module.exports = generateMarkdown;
