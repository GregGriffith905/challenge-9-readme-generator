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
const generateTOC = (install,usage,credits,license,badges,features,contributions,tests) => //generate table of contents  
    `${`## Table of Contents\n`}`+
    `${install? `\n - [Installation](#install)`:``}`+     //only include items in TOC if user responded to question
    `${usage? `\n - [Usage](#usage)`:``}`+                //eg if usage was answered then include usage in TOC
    `${credits? `\n - [Credits](#credits)`:``}`+ 
    `${license? `\n - [License](#license)`:``}`+ 
    `${badges? `\n - [Badges](#badges)`:``}`+ 
    `${features? `\n - [Features](#features)`:``}`+ 
    `${contributions? `\n - [Contributions](#contributions)`:``}`+ 
    `${tests? `\n - [Tests](#tests)`:``}`;
 
const createReadMe = ({title,description,includeTOC,install,usage,credits,license,badges,features,contributions,tests})=>
// creates README content, do not include titles of empty sections in final README, calls generateTOC   
    `${`# ${title.toUpperCase()}\n\n`}`+
    `${`## Description\n\n${description}\n\n`}`+                          //always show description header              
    `${includeTOC? generateTOC(install,usage,credits,license,badges,features,contributions,tests)+`\n\n` :``}`+ //generateTOC function
    `${install? `## Installation\n\n${install}\n\n`:``}`+                 //display install section if any content  
    `${usage? `## Usage\n\n${usage}\n\n`:``}`+                            //display usage section if any content
    `${credits? `## Credits\n\n${credits}\n\n`:``}`+                      //display credits...  
    `${license? `## License\n\n${license}\n\n`:``}`+                      //display license...
    `${badges? `## Badges\n\n${badges}\n\n`:``}`+                         //display badges...
    `${features? `## Features\n\n${features}\n\n`:``}`+                   //display features...  
    `${contributions? `## Contributions\n\n${contributions}\n\n`:``}`+    //display contributions
    `${tests? `## Tests\n\n${tests}\n\n`:``}`;                            //display tests              

function isChecked(array,value){    //checks if checkbox was selected
    var isItIn = false;
    if (array) array.forEach (element => {if (element==value) isItIn = true}); //check every element in array to see if ==value
    return isItIn;
    }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions.getTitle,               //ask user for title
      name: 'title',
    },
    {
      type: 'input',
      message: questions.getDesc,                //ask user for description
      name: 'description',
    },
    {
      type: 'confirm',                           //ask user if table of contents should be included
      message: questions.getTOC,
      name: 'includeTOC',      
    },
    {
      type: 'input',
      message: questions.getInstall,             //ask user for installation instruction
      name: 'install',
    },
    {
      type: 'input',
      message: questions.getUsage,               //ask user how software works
      name: 'usage',
    },
    {
      type: 'input',
      message: questions.getCredits,             //ask user about colaborators, 3rd party api, etc
      name: 'credits',
    },
    {
      type: 'input',
      message: questions.getLicense,             //ask user about licenses
      name: 'license',
    },
    {
      type: 'confirm',
      message: questions.getDetails,             //ask user if to stop readme now or ask more questions
      name: 'details',
    },
    {
      type: 'checkbox',
      message: questions.getDetailList,                                   //ask user to select choices from list
      choices: ["Badges","Features","Contributions","Tests"],
      name: 'detailList',
      when: response => response.details == true,                         //only ask this if user selected 'Y' for add more details
    },
    {
      type: 'input',
      message: questions.getBadges,                                       //ask user about badges
      name: 'badges',
      when:  response => isChecked(response.detailList,"Badges"),         //only ask this question if badges was checked
    },
    {
      type: 'input',
      message: questions.getFeatures,                                     //ask user about program features                       
      name: 'features',
      when:  response => isChecked(response.detailList,"Features"),       //only ask this question if Features was checked
    },
    {
      type: 'input',
      message: questions.getContributions,                                //ask user how other can contribute              
      name: 'contributions',
      when:  response => isChecked(response.detailList,"Contributions"),  //only ask this question if Contribution was checked
    },
    {
      type: 'input',
      message: questions.getTests,                                        //ask user how to test software
      name: 'tests',
      when:  response => isChecked(response.detailList,"Tests"),          //only ask this question if Tests was checked
    },
  ])
  .then((response) =>{
    const readMeDoc = createReadMe(response);       //generate README
    writeToFile("README.md",readMeDoc);             //output README to file
    console.log(readMeDoc); 
    console.log("The following information was written to README file:");
    console.log(response);
  });

 }

// Function call to initialize app
init();
