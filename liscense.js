//required packages
var inquirer = require("inquirer");
var fs = require("fs");
fs;
inquirer;
return (
  inquirer
    //questions logged onto the terminal
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is the title of your project",
      },
      {
        type: "input",
        name: "description",
        message: "Please describe your project",
      },
      {
        type: "input",
        name: "table",
        message: "please enter the table of contents, separate each by comma",
      },
      {
        type: "input",
        name: "instalation",
        message: "please include any installations you used",
      },
      {
        type: "input",
        name: "usage",
        message: "how do you use your program",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please enter any licenses you have",
        choices: ["Apache", "MIT", "MOZILLA", "IBM"],
      },
      {
        type: "input",
        name: "Contributing",
        message: "Who contributed to this file",
      },
      {
        type: "input",
        name: "tests",
        message: "Program Test",
      },
      {
        type: "input",
        name: "questions",
        message: "Enter the github link to your project",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email adress",
      },
      {
        type: "input",
        name: "alternateContact",
        message: "What are other ways somone can reach you",
      },
    ])
    //logging the needed information
    .then((answers) => {
      function generateMarkdown(data) {
        return `# ${data}
        `;
      }

      const softwareLicenses = {
        MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        MOZILLA: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
        IBM: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
        Apache: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
      };