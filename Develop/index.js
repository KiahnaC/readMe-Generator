// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    message: "What is the GitHub user name?",
    name: "username"
},
{
    type: "input",
    message: "email address?",
    name: "email"
},
{
    type: "input",
    message: "Project's title?",
    name: "title"
},
{
    type: "input",
    message: "Description of the project.",
    name: "description"
},
{
    type: "list",
    message: "Does your project have a license?",
    name: "license",
    choices: [
        "MIT",
        "Unlicense",
        "Apache 2.0",
        "GNU v3",
        "BSD 3-Clause",
        "Mozilla Public License 2.0"
    ]
},

{
    type: "input",
    message: "Describe what the user should know about this application?",
    name: "usage"
},
]


// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>{
    return fs.writeFileSync(fileName, data)
}



// TODO: Create a function to initialize app
//prompting user to answer questions
function init() {
     
       inquirer.prompt(questions).then(answers=> {
           console.log(answers)
           const fileContent = generateMarkdown(answers);
             writeToFile ("./README.md", fileContent);
             console.log("README.md has been created in output folder!");
       })
    
// Function call to initialize app
};
init()