

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

var tableContents = []
const getContent = (badges,features,contributions,tests) =>{
    var textOut = '\n## Table Of Contents\n\n - [Installation](#installation)\n - [Usage](#usage)\n - [Credits](#credits)\n - [License](#license)';
    if (badges!=null) textOut = textOut.concat(`\n - [Badges](#badges)`); 
    if (features!=null) textOut = textOut.concat(`\n - [Features](#features)`); 
    if (contributions!=null) textOut = textOut.concat(`\n - [Contributions](#contributions)`); 
    if (tests!=null) textOut = textOut.concat(`\n - [Tests](#tests)`);
    textOut = textOut.concat(`\n`);
    return (textOut);
}

const createReadMe = ({title,description,content,install,usage,credits,license,badges,features,contributions,tests})=>
`## README: ${title}\n
## Description\n\n${description}\n${content? getContent(badges,features,contributions,tests) :``} 
## Installation\n\n${install}\n
## Usage\n\n${usage}\n
## Credits\n\n${credits}\n
## License\n\n${license}\n
## Badges\n\n${badges}\n
## Features\n\n${features}\n
## Contributions\n\n${contributions}\n
## Tests\n\n${tests}\n`

// TODO: Create an array of questions for user input
const questions = {
    getTitle: "What is the title of this project?\n>",
    getDesc: "Provide a short description explaining the what, why and how of this project.\n  Use the following questions as a guide:\n  \t-What was the motivation?\n  \t-Why was this project built?\n  \t-What problem does it solve?\n  \t-What did you learn?\n>",
    getContent: "Include a Table of Contents for this project (Y/N)? \n>",
    getInstall: "What are the steps required to install this project?\n  Provide a step-by-step description of how to get the development environment running. \n>",
    getUsage: "Provide instructions and examples for use. Include screenshots as needed.\n  To add a screenshot, create an `assets/images` folder in the repository and upload any screenshots to it.\n  Then, using the relative filepath, add it to the README using the following syntax:\n  \t```md\n  \t![alt text](assets/images/screenshot.png)\n  \t```\n>",
    getCredits: "List the collaborators, if any, with links to their GitHub profiles.\n  If any third-party assets that require attribution were used,\n  list the creators with links to their primary web presence in this section.\n  If any tutorials were followed, include links to those here as well.\n>",
    getLicense: "The last section of a high-quality README file is the license.\n  This lets other developers know what they can and cannot do with the project.\n  For help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n>",
    getDetails: "Basic README form is complete, Add more details?\n>",
    getDetailList: "Select options:",
    getBadges: "Badges aren't necessary, per se, but they demonstrate street cred.\n  Badges let other developers know that you know what you're doing.\n  Check out the badges hosted by [shields.io](https://shields.io/).\n  You may not understand what they all represent now, but you will in time.\n>",
    getFeatures: "If the project has a lot of features, list them here.\n>",
    getContributions: "If other developers are allowed to contribute to this application, include guidelines for how to do so.\n  The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard,\n  but you can always write your own if you'd prefer.\n>",
    getTests: "Go the extra mile and write tests for this application. Then provide examples on how to run them here.\n>"
}
function isChecked(array,value){
    var isItIn = false;
    if (array!=null) array.forEach (element => {if (element==value) isItIn = true}); 
    return isItIn;
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
      type: 'confirm',
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
      type: 'confirm',
      message: questions.getDetails,
      name: 'details',
    },
    {
      type: 'checkbox',
      message: questions.getDetailList,
      choices: ["Badges","Features","Contributions","Tests"],
      name: 'detailList',
      when: response => response.details == true,
    },
    {
      type: 'input',
      message: questions.getBadges,
      name: 'badges',
      when:  response => isChecked(response.detailList,"Badges"),  
    },
    {
      type: 'input',
      message: questions.getFeatures,
      name: 'features',
      when:  response => isChecked(response.detailList,"Features"),
    },
    {
      type: 'input',
      message: questions.getContributions,
      name: 'contributions',
      when:  response => isChecked(response.detailList,"Contributions"),
    },
    {
      type: 'input',
      message: questions.getTests,
      name: 'tests',
      when:  response => isChecked(response.detailList,"Tests"),
    },
  ])
  .then((response) =>{
    const readMeDoc = createReadMe(response)
    console.log(readMeDoc); 
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 function init() {
 }

// Function call to initialize app
init();
