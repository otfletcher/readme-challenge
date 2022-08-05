const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license does this project use? Please select from the list.',
            choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'How can I install this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can I use this project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can I contribute to this project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How can I test this project?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail?'
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'What do you want to call this readme?'
        }
    ])};

function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

async function init() {
    let answers = await questions();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

init();
