// TODO: Include packages needed for this application
const inquirer = require('inquirer');        //CLI interface for node.js
const fs = require('fs');                    //file system module              

// TODO: Create an array of questions for user input
const questions = {
    getTitle: "What is the title of this project?\n>",
    getDesc: "Provide a short description explaining the what, why and how of this project.\n  Use the following questions as a guide:\n  \t-What was the motivation?\n  \t-Why was this project built?\n  \t-What problem does it solve?\n  \t-What did you learn?\n>",
    getTOC: "Include a Table of Contents for this project (Y/N)? \n>",
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
const generateTOC = (install,usage,credits,license,badges,features,contributions,tests) =>{ //generate table of contents
    var textOut = `\n## Table Of Contents\n\n`;
    if (install) textOut = textOut.concat(`\n - [Installation](#install)`);     //only include items in TOC if user responded to question
    if (usage) textOut = textOut.concat(`\n - [Usage](#usage)`);                //eg if usage was answered then include uaage in TOC
    if (credits) textOut = textOut.concat(`\n - [Credits](#credits)`); 
    if (license) textOut = textOut.concat(`\n - [License](#license)`); 
    if (badges) textOut = textOut.concat(`\n - [Badges](#badges)`); 
    if (features) textOut = textOut.concat(`\n - [Features](#features)`); 
    if (contributions) textOut = textOut.concat(`\n - [Contributions](#contributions)`); 
    if (tests) textOut = textOut.concat(`\n - [Tests](#tests)`);
    textOut = textOut.concat(`\n`);
    return (textOut);
}
const createReadMe = ({title,description,includeTOC,install,usage,credits,license,badges,features,contributions,tests})=>
// creates README content, do not include titles of empty sections in final README, calls generateTOC   
`# ${title.toUpperCase()}\n
## Description\n\n${description}\n
${includeTOC? generateTOC(install,usage,credits,license,badges,features,contributions,tests) :``} 
${install? `## Installation\n\n${install}`:``}\n
${usage? `## Usage\n\n${usage}`:``}\n
${credits? `## Credits\n\n${credits}`:``}\n
${license? `## License\n\n${license}`:``}\n
${badges? `## Badges\n\n${badges}`:``}\n
${features? `## Features\n\n${features}`:``}\n
${contributions? `## Contributions\n\n${contributions}`:``}\n
${tests? `## Tests\n\n${tests}`:``}\n`
//
function isChecked(array,value){    //checks if checkbox was selected
    var isItIn = false;
    if (array) array.forEach (element => {if (element==value) isItIn = true}); //check every element in array to see if ==value
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
      type: 'confirm',                  //ask user if table of contents should be included
      message: questions.getTOC,
      name: 'includeTOC',      
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
      when:  response => isChecked(response.detailList,"Badges"),         //only ask this question if badges was checked
    },
    {
      type: 'input',
      message: questions.getFeatures,
      name: 'features',
      when:  response => isChecked(response.detailList,"Features"),       //only ask this question if Features was checked
    },
    {
      type: 'input',
      message: questions.getContributions,
      name: 'contributions',
      when:  response => isChecked(response.detailList,"Contributions"),  //only ask this question if Contribution was checked
    },
    {
      type: 'input',
      message: questions.getTests,
      name: 'tests',
      when:  response => isChecked(response.detailList,"Tests"),    //only ask this question if Tests was checked
    },
  ])
  .then((response) =>{
    const readMeDoc = createReadMe(response);       //generate README
    writeToFile("README.md",readMeDoc);             //output README to file
    console.log(readMeDoc); 
    console.log(response);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 function init() {
 }

// Function call to initialize app
init();
