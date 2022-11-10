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
    /* {
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
        message: '',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Are there any instructions on how to test this project?',
    }, */
];

inquirer.prompt(questions).then(({ title }) => {
    console.log('title :>> ', title);

    const markdown = generateMarkdown(title);
    console.log(markdown);

    fs.writeFile('README.md', markdown, (err) => err ?
    console.error(err) : console.log('README generated')
    );
});


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
