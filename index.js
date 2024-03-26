// call for inquirer files
const inquirer = require("inquirer");
const fs = require('fs');
//call to import the generateMarkdown JS file
const generateMarkdown = require("./utils/generateMarkdown");

// questions that will be prompted to the user.
inquirer
    .prompts([
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
            message: "What is the title of your project?"
        },

        {
            type: "Input",
            name: "usage",
            message: "What is the title of your project?"
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
            choices:[
                "MIT",
                "Apache",
                "GPL3",
                "Mozilla",
                "BSD 3-Clause"
            ]
        },


    ])
// the answers promise 
    .then((answers) => {
        const answersReadME = generateMarkdown(answers);
    })
// this is so that the README.md file is generated with thr user input using a conditional ternary operator.
fs.writefile(".//README.md", answersReadME, (err) => {
    // condition ? expression if true: expression if false
    err ? console.log(err) : console.log("Successfully created new README.md")
})

// TODO: Create a function to initialize app
function init() { 


}

// Function call to initialize app
init();
