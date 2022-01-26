// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

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
            type: 'checkbox',
            message: 'License type?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public Licens v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Publice License 2.0', 'GNU Affero General Publice License v3.0', 'GNU Affero General Publice License v2.0', 'GNU Affero General Publice License v2.1', 'Mozilla Public Llicese 2.0', 'The Unlicense'],
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
        //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );

        const fileContent =
            `#${data.title.toUpperCase()}\n
Description:  ${data.description}\n\n
\t\t\t\tTABLE OF CONTENTS:\n
Installation:    ${data.installInstruct}\n
Usage:  ${data.usageInfo}\n
Contributing:  ${data.contributionGuide}\n
Tests:  ${data.testInstruct}\n
License:  ${data.license}\n
Questions:\n
\tGithub:  [${data.userName}](https://github.com/${data.userName})\n
\tEmail:   [${data.emailAdd}](mailto:${data.emailAdd})
        `;


        const file = `${data.title.toUpperCase().split(' ').join('')}_README.md`;
        //fs.writeFile(file, JSON.stringify(data, null, '\t'), (err) =>
        fs.writeFile(file, fileContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );


    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
