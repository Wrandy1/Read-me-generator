// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

  {
    type:"input",
    name:"title",
    message:"Name your Project",
  },
  {
    type:"input",
    name:"description",
    message:"Describe the purpose and functionality",
  },
  
  {
    type:"checkbox",
    name:"license",
    message:"Choose a license you would like to choose",
    choices:["MIT","APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]

  },
  {
    type:"input",
    name:"require",
    message:"List project dependcies"
  },
  {
    type:"input",
    name:"usage",
    message:"please enter languages or technologies used",
  },
  {
    type:"input",
    name:"creator",
    message:"Enter your github username",
  },
  {
    type:"input",
    name:"name",
    message:"Enter your name",
  },
  {
    type:"input",
    name:"email",
    message:"Provide an email",
  },
  {
    type:"input",
    name:"contributors",
    message:"List any contributors",
  },
  {
    type:"input",
    name:"test",
    message:"State any required tests",
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('creating README.md file...');
    writeToFile("/dist/README.md", generateMarkdown({...responses }));
    });
}

// Function call to initialize app
init();
