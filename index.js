// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('node:fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of the application.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'List the steps inorder to install it.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the use for this application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for the project: ',
        name: 'license',
        choices: [
            'MIT',
            'Mozilla',
            'Apache',
            'GNU',
            'Academic',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'What is the Github username of the author?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the email address of the author?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Was there any tests run on the application?',
        name: 'test',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err
        
        console.log ('README.md has been generated!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers);
        console.log(readmeContent);
        writeToFile('README.md', readmeContent)
    });
};

// Function call to initialize app
init();
