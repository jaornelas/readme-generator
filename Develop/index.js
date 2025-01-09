//importing packages needed to run dependencies
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

//Creating an array of questions for user. 
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'what is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'what is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'please write a short description about your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what type of licence should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// Creating a function to write README file and using the path directory to join the current working directory with the new file created
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function to initialize app and prompt user with questions
function init() { 
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
