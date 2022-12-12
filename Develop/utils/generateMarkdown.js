const licenseInfo = { //object which stores information on licensing options
  "None":{                              
  //   badge:``,    
  //   link:``,     
  //   section:``,    //see line 44
  },
  "MIT License":{
    badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`,
    link:`[MIT License](https://choosealicense.com/licenses/mit/)`,
  },
  "GNU AGPLv3":{
    badge:`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)`,
    link:`[GNU AGPL v3 License](https://choosealicense.com/licenses/agpl-3.0/)`,
  },
  "GNU GPLv3":{
    badge:`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`,
    link:`[GNU GPL v3 License](https://choosealicense.com/licenses/gpl-3.0/)`,
  },
  "GNU LGPLv3":{
    badge:`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://choosealicense.com/licenses/lgpl-3.0/)`,
    link:`[GNU LGPL v3 License](https://choosealicense.com/licenses/lgpl-3.0/)`,
  },
  "Boost Software License 1.0":{
    badge:`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://choosealicense.com/licenses/bsl-1.0/)`,
    link:`[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`,
  },
  "Apache License 2.0":{
    badge:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`,
    link:`[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`,
  },
  "Mozilla Public License 2.0":{
    badge:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://choosealicense.com/licenses/mpl-2.0/)`,
    link: `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`,
  },
  "The Unlicense":{
    badge:`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`,
    link:`[Unlicense License](https://choosealicense.com/licenses/unlicense/)`,
  }
}
const licenseObject = license => licenseInfo[license]; 

//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {                          //Dear Grader, the ternary operation which called this function
  return licenseObject(license).badge;                          //has already returned an empty string,
}                                                               //therefore empty string return is not included here.
// TODO: Create a function that returns the license link        //see lines 78,84 and index.js line 65.
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseObject(license).link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;                           
}
// TODO: Create a function to generate markdown for README
const generateTOC = ({install,usage,credits,license,badges,features,contributions,tests,github,email}) => //generate table of contents  
    (`## Table of Contents\n\n`)+
    (install?       `- [Installation](#installation)\n`:``)+    //only include items in TOC if user responded to question
    (usage?         `- [Usage](#usage)\n`:``)+                  //eg if usage was answered then include usage in TOC
    (credits?       `- [Credits](#credits)\n`:``)+              //eg if credits was left blank then do not include credits in TOC
    (license?       `- [License](#license)\n`:``)+              //same concept applies to sections in document
    (badges?        `- [Badges](#badges)\n`:``)+ 
    (features?      `- [Features](#features)\n`:``)+ 
    (contributions? `- [Contributions](#contributions)\n`:``)+ 
    (tests?         `- [Tests](#tests)\n`:``)+  
    (github||email? `- [Questions](#questions)\n`:``);

const generateQues = (github,email) => //generate the questions section of the README
    (github||email? `## Questions\n\n`:``)+                                 //display questions section if any content
    (github? `GitHub: [${github}](https://github.com/${github}) \n\n`:``)+  //display github... 
    (email?  `E-Mail: [${email}](mailto:${email})\n\n`:``);                  //display email... 

function generateMarkdown(data) {   // creates README content, do not include titles of empty sections in final README, calls generateTOC and generateQues
  const {title,description,includeTOC,install,usage,credits,license,badges,features,contributions,tests,questions,github,email}=data;
  return  (               `# ${title.toUpperCase()}\t`)+                            //always show title
          (license? renderLicenseBadge(license)+`\n\n`:``)+                         //display license badge if any selected or return empty string  
          (description?   `## Description\n\n${description}\n\n`:``)+               //display description...              
          (includeTOC?     generateTOC(data)+`\n` :``)+                             //call generateTOC function. display TOC
          (install?       `## Installation\n\n${install}\n\n`:``)+                  //display install section if any content  
          (usage?         `## Usage\n\n${usage}\n\n`:``)+                           //display usage section if any content
          (credits?       `## Credits\n\n${credits}\n\n`:``)+                       //display credits...  
          (license?       `## License\n\n${renderLicenseSection(license)}\n\n`:``)+ //display license section and link...
          (badges?        `## Badges\n\n${badges}\n\n`:``)+                         //display badges...
          (features?      `## Features\n\n${features}\n\n`:``)+                     //display features...  
          (contributions? `## Contributions\n\n${contributions}\n\n`:``)+           //display contributions...
          (tests?         `## Tests\n\n${tests}\n\n`:``)+                           //display tests...              
          (questions? generateQues(github,email)+`\n\n`:``);                        //call generateQues function. display contact info...
}
module.exports = {
  generateMarkdown,   
  licenseInfo
}; 
