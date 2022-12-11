const licenseInfo = { //object which stores information on licensing options
  // "None":{                              
  //   badge:``,    
  //   link:``,     
  //   brief:``,    //see line 52
  // },
  "MIT License":{
    badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`,
    link:`[The MIT License](https://choosealicense.com/licenses/mit/)`,
    brief:`A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`,
  },
  "GNU AGPLv3":{
    badge:`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)`,
    link:`[GNU AGPL v3 License](https://choosealicense.com/licenses/agpl-3.0/)`,
    brief:`Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`,
  },
  "GNU GPLv3":{
    badge:`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`,
    link:`[GNU GPL v3 License](https://choosealicense.com/licenses/gpl-3.0/)`,
    brief:`Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`,
  },
  "GNU LGPLv3":{
    badge:`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://choosealicense.com/licenses/lgpl-3.0/)`,
    link:`[GNU LGPL v3 License](https://choosealicense.com/licenses/lgpl-3.0/)`,
    brief:`Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`,
  },
  "Boost Software License 1.0":{
    badge:`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://choosealicense.com/licenses/bsl-1.0/)`,
    link:`[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`,
    brief:`A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`,
  },
  "Apache License 2.0":{
    badge:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`,
    link:`[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`,
    brief:`A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`,
  },
  "Mozilla Public License 2.0":{
    badge:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://choosealicense.com/licenses/mpl-2.0/)`,
    link: `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`,
    brief:`Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`,
  },
  "The Unlicense":{
    badge:`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`,
    link:`[The Unlicense License](https://choosealicense.com/licenses/unlicense/)`,
    brief:`A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`,
  }
}
const licenseObject = license => licenseInfo[license]; 

//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {                        //Dear Grader, the ternary operation which called this function
  return licenseObject(license).badge;                        //has already returned an empty string,
}                                                             //therefore empty string return is not included here.
// TODO: Create a function that returns the license link      //see lines 87,93,94 and index.js line 65.
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseObject(license).link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return licenseObject(license).brief;
}

// TODO: Create a function to generate markdown for README
const generateTOC = ({install,usage,credits,license,badges,features,contributions,tests,github,email}) => //generate table of contents  
    (`## Table of Contents\n\n`)+
    (install? `- [Installation](#installation)\n`:``)+     //only include items in TOC if user responded to question
    (usage? `- [Usage](#usage)\n`:``)+                     //eg if usage was answered then include usage in TOC
    (credits? `- [Credits](#credits)\n`:``)+               //eg if credits was left blank then do not include credits in TOC
    (license? `- [License](#license)\n`:``)+               //same concept applies to sections in document
    (badges? `- [Badges](#badges)\n`:``)+ 
    (features? `- [Features](#features)\n`:``)+ 
    (contributions? `- [Contributions](#contributions)\n`:``)+ 
    (tests? `- [Tests](#tests)\n`:``)+  
    (github||email? `- [Questions](#questions)\n`:``);
 
const generateQues = (github,email) => //generate the questions section of the README
    (github||email? `## Questions\n\n`:``)+                                 //display questions section if any content
    (github? `GitHub: [${github}](https://github.com/${github}) \n\n`:``)+  //display github... 
    (email? `E-Mail: [${email}](mailto:${email})\n\n`:``);                  //display email... 

function generateMarkdown(data) {   // creates README content, do not include titles of empty sections in final README, calls generateTOC and generateQues
  const {title,description,includeTOC,install,usage,credits,license,badges,features,contributions,tests,questions,github,email}=data;
  return  (`# ${title.toUpperCase()}\n\n`)+                                  //always show title
          (license? renderLicenseBadge(license)+`\n\n`:``)+                  //display license badge if any selected or return empty string  
          (description? `## Description\n\n${description}\n\n`:``)+          //display description...              
          (includeTOC? generateTOC(data)+`\n` :``)+                          //call generateTOC function. display TOC
          (install? `## Installation\n\n${install}\n\n`:``)+                 //display install section if any content  
          (usage? `## Usage\n\n${usage}\n\n`:``)+                            //display usage section if any content
          (credits? `## Credits\n\n${credits}\n\n`:``)+                      //display credits...  
          (license? `## License\n\n${renderLicenseLink(license)+             //display license link...
            `: `+renderLicenseSection(license)}\n\n`:``)+                    //display license info...
          (badges? `## Badges\n\n${badges}\n\n`:``)+                         //display badges...
          (features? `## Features\n\n${features}\n\n`:``)+                   //display features...  
          (contributions? `## Contributions\n\n${contributions}\n\n`:``)+    //display contributions...
          (tests? `## Tests\n\n${tests}\n\n`:``)+                            //display tests...              
          (questions? generateQues(github,email)+`\n\n`:``);                 //call generateQues function. display contact info...
}
module.exports = {
  generateMarkdown,
  licenseInfo
}; 
