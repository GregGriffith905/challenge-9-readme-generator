// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = {
    getTitle: "What is the title of this project?\n>",
    getDesc: "Provide a short description explaining the what, why and how of this project.\n  Use the following questions as a guide:\n  \t-What was the motivation?\n  \t-Why was this project built?\n  \t-What problem does it solve?\n  \t-What did you learn?\n>",
    getContent: "Is a Table of Contents necessary for this project (Y/N)? \n>",
    getInstall: "What are the steps required to install this project?\n  Provide a step-by-step description of how to get the development environment running. \n>",
    getUsage: "Provide instructions and examples for use. Include screenshots as needed.\n  To add a screenshot, create an `assets/images` folder in the repository and upload any screenshots to it.\n  Then, using the relative filepath, add it to the README using the following syntax:\n  \t```md\n  \t![alt text](assets/images/screenshot.png)\n  \t```\n>",
    getCredits: "List the collaborators, if any, with links to their GitHub profiles.\n  If any third-party assets that require attribution were used,\n  list the creators with links to their primary web presence in this section.\n  If any tutorials were followed, include links to those here as well.\n>",
    getLicense: "The last section of a high-quality README file is the license.\n  This lets other developers know what they can and cannot do with the project.\n  For help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n>",
    getFeatures:"If the project has a lot of features, list them here.\n>",
    getContributions: "If other developers are allowed to contribute to this application,\n  include guidelines for how to do so.\n  The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard,\n  but you can always write your own if you'd prefer.\n>",
    getTests: "Go the extra mile and write tests for this application. Then provide examples on how to run them here.\n>"
}

inquirer
  .prompt([
    {
      type: 'input',
      message: questions.getTitle,
      name: 'title',
    },
    {
      type: 'input',
      message: questions.getDesc,
      name: 'description',
    },
    {
      type: 'input',
      message: questions.getContent,
      name: 'content',
    },
    {
      type: 'input',
      message: questions.getInstall,
      name: 'install',
    },
    {
      type: 'input',
      message: questions.getUsage,
      name: 'usage',
    },
    {
      type: 'input',
      message: questions.getCredits,
      name: 'credits',
    },
    {
      type: 'input',
      message: questions.getLicense,
      name: 'license',
    },
    {
      type: 'input',
      message: questions.getFeatures,
      name: 'features',
    },
    {
      type: 'input',
      message: questions.getContributions,
      name: 'contributions',
    },
    {
      type: 'input',
      message: questions.getTests,
      name: 'tests',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 function init() {
//     console.log(questions.getTitle);
//     console.log(questions.getDesc);
//     console.log(questions.getContent);
//     console.log(questions.getInstall);
//     console.log(questions.getUsage);
//     console.log(questions.getCredits);
//     console.log(questions.getLicense);
//     console.log(questions.getFeatures);
//     console.log(questions.getContributions);
//     console.log(questions.getTests);
 }

// Function call to initialize app
init();

