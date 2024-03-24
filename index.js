// call for inquirer files
const inquirer = require("./inquirer");
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

    .then((answers) => {
        const answersReadME = generateMarkdown(answers);
    })
    .catch((error) => {
        if (error.isTtyError){

    } else {
        
    }
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
