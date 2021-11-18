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
    return writeToFile(fileName, data)
}



// TODO: Create a function to initialize app
//prompting user to answer questions
async function init() {
    try {
        userResponse = await inquirer.prompt(questions);
        console.log("Your response",userResponse);
    // Populate markedown content from answers
        const fileContent = generateMarkdown(answers);
    
        
// Markdown content created in Readme file
        await writeToFile ("./output/README.md", fileContent);
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(generateMarkdown);
// File has been created and completed
        console.log("README.md has been created in output folder!");
// User error
    
    } catch (err) {
        console
        console.error("Error creating README. File not created.");
        console.log(err);
};

// Function call to initialize app
init()
};
