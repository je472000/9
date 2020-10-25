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