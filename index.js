// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project TITLE:  ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project DESCRIPTION:  ',
        },
        {
            type: 'input',
            name: 'installInstruct',
            message: 'Installation instructions:  ',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Usage information:  ',
        },
        {
            type: 'input',
            name: 'contributionGuide',
            message: 'Contribution guidelines:  ',
        },
        {
            type: 'input',
            name: 'testInstruct',
            message: 'Test instructions:  ',
        },
        {
            type: 'list',
            message: 'License type?',
            name: 'license',
            choices: ['The MIT License', 'The Unlicense', 'WTFPL'],
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Github username:  ',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'Email address:  ',
        },
    ])
    .then((data) => {
        const badge = generateMarkdown.renderLicenseBadge(data.license);
        //console.log(badge);
        const licenseLink = generateMarkdown.renderLicenseLink(data.license);
        //console.log(licenseLink);
        const licenseSec = generateMarkdown.renderLicenseSection(data.license);
        //console.log(licenseSec);

        const fileContent =
            
`${badge}\n
# ${data.title.toUpperCase()}\n

### Description:  
${data.description} \n\n

## TABLE OF CONTENTS:\n
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

\n
### Installation:    
${data.installInstruct}\n
### Usage:  
${data.usageInfo}\n
### Contributing:  
${data.contributionGuide}\n
### Tests:  
${data.testInstruct}\n
### License:  
${data.license}\n
\t${licenseSec}\n
${licenseLink}\n
### Questions: \n
Github:  [${data.userName}](https://github.com/${data.userName})\n
Email:   [${data.emailAdd}](mailto:${data.emailAdd})

        `;
        writeToFile(data.title, fileContent);
        console.log(fileContent);

    });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const file = `${fileName.toUpperCase().split(' ').join('')}_README.md`;
    //fs.writeFile(file, JSON.stringify(data, null, '\t'), (err) =>
    fs.writeFile(file, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
// function init(fileContent) {
//     console.log(fileContent);

// }
// Function call to initialize app
// init();





