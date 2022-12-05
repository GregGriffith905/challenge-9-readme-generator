// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = {
    getTitle: "What is the title of this project?",
    getDesc: "Provide a short description explaining the what, why and how of this project.\nUse the following questions as a guide:\n\t-What was the motivation?\n\t-Why was this project built?\n\t-What problem does it solve?\n\t-What did you learn?",
    getContent: "Is a Table of Contents necessary for this project (Y/N)?",
    getInstall: "What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.",
    getUsage: "Provide instructions and examples for use. Include screenshots as needed.\nTo add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\nThen, using the relative filepath, add it to your README using the following syntax:\n\t```md\n\t![alt text](assets/images/screenshot.png)\n\t```",
    getCredits: "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution,\nlist the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.",
    getLicense: "The last section of a high-quality README file is the license.\nThis lets other developers know what they can and cannot do with your project.\nIf you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
    getFeatures:"If your project has a lot of features, list them here.",
    getContributions: "If you created an application or package and would like other developers to contribute it,\nyou can include guidelines for how to do so.\nThe [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard,\nbut you can always write your own if you'd prefer.",
    getTests: "Go the extra mile and write tests for your application. Then provide examples on how to run them here."
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(questions.getTitle);
    console.log(questions.getDesc);
    console.log(questions.getContent);
    console.log(questions.getInstall);
    console.log(questions.getUsage);
    console.log(questions.getCredits);
    console.log(questions.getLicense);
    console.log(questions.getFeatures);
    console.log(questions.getContributions);
    console.log(questions.getTests);
}

// Function call to initialize app
init();

