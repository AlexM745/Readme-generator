// import inquirer files
const inquirer = require("inquirer");
// import the file system module
const fs = require('fs');
//call to import the generateMarkdown JS file
const generateMarkdown = require("./utils/generateMarkdown");

// const for the questions that will be prompted to the user.
const prompts = () => {
    return inquirer.prompt([
        {
            type: "Input",
            name: "projecttitle",
            message: "What is the title of your project?"
        },

        {
            type: "Input",
            name: "description",
            message: "Write a description of your project?"
        },

        {
            type: "Input",
            name: "installation",
            message: "Describe how to install project."
        },

        {
            type: "Input",
            name: "usage",
            message: "What is this project used for?"
        },

        {
            type: "Input",
            name: "credits",
            message: "Who contributed to this project?"
        },

        {
            type: "Input",
            name: "contribution",
            message: "How can others contribute to your project?"
        },

        {
            type: "list",
            name: "license",
            message: "Choose the correct license for this project?",
            choices: [
                "MIT",
                "Apache",
                "GPL3",
                "Mozilla",
                "BSD 3-Clause"
            ]
        },


    ])

};



// function to initialize app
function init() {
    prompts()
        // the answers promise 
        .then((answers) => {
            // the readme content is the answers
            const ReadmeContent = generateMarkdown(answers);

            // this is so that the README.md file is generated with thr user input using a conditional ternary operator.
            fs.writefile (".//README.md", ReadmeContent, (err) => {
                // condition ? expression if true: expression if false
                err ? console.log(err) : console.log("Successfully created new README.md")
            })
        })

}

// calls the init function to initialize the application
init();
