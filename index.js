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
            name: 'install-Instruct',
            message: 'Installation instructions:  ',
        },
        {
            type: 'input',
            name: 'usage-info',
            message: 'Usage information:  ',
        },
        {
            type: 'input',
            name: 'contribution-guide',
            message: 'Contribution guidelines:  ',
        },
        {
            type: 'input',
            name: 'test-Instruct',
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
            name: 'user-name',
            message: 'Github username:  ',
        },
        {
            type: 'input',
            name: 'email-add',
            message: 'Email address:  ',
        },
    ])
    .then((data) => {
        //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );

        const fileContent =
            `Project Title:  ${data.title}

        Description:  ${data.description}

                        Table of Contents
        
        
        `;


        const file = `${data.title.toLowerCase().split(' ').join('')} README.md`;
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
