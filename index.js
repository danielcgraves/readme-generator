// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
     {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What needs to be installed for the project to run?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any screenshots or videos you would like to add for this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does this project use?',
        choices: ['No License', 'Apache', 'MIT', 'GNU GPLv3'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'Are there any instructions on how to test this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?'    
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to initialize app

inquirer.prompt(questions).then(({ title, description, installation, usage, contribution, license, test, github, email}) => {

    const markdown = generateMarkdown(title, description, installation, usage, contribution, license, test, github, email);
    console.log(markdown);

    fs.writeFile('README.md', markdown, (err) => err ?
    console.error(err) : console.log('README generated')
    );
});
