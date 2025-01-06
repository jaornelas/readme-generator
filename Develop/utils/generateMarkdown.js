function renderLicenseBadge(license) {
  if (!license) {
    return '';  // Return an empty string if there's no license
  }

  switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)';
    case 'Apache-2.0':
      return '![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
    case 'GPL-3.0':
      return '![GPL License](https://img.shields.io/badge/license-GPL%203.0-blue.svg)';
    case 'BSD-3-Clause':
      return '![BSD License](https://img.shields.io/badge/license-BSD%203--Clause-blue.svg)';
    case 'ISC':
      return '![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)';
    case 'Creative Commons':
      return '![Creative Commons License](https://img.shields.io/badge/license-Creative%20Commons-blue.svg)';
    default:
      return '![License](https://img.shields.io/badge/license-Unknown-lightgray.svg)';
  }
}


function renderLicenseLink(license) {
  // Check if license is undefined, null, or an empty string
  if (!license) {
    return '';  // Return an empty string if there's no license
  }

  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL-3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD-3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'Creative Commons':
      return 'https://creativecommons.org/licenses/';
    default:
      return 'https://opensource.org/licenses/Unlicense'; // Default URL for unknown licenses
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // Check if license is undefined, null, or an empty string
  if (!license) {
    return '';  // Return an empty string if there's no license
  }

  // Define the license badge, link, and description based on the license type
  let licenseBadge;
  let licenseLink;
  let licenseDescription;

  switch (license) {
    case 'MIT':
      licenseBadge = '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)';
      licenseLink = 'https://opensource.org/licenses/MIT';
      licenseDescription = 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
      break;
    case 'Apache-2.0':
      licenseBadge = '![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      licenseDescription = 'This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
      break;
    case 'GPL-3.0':
      licenseBadge = '![GPL License](https://img.shields.io/badge/license-GPL%203.0-blue.svg)';
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      licenseDescription = 'This project is licensed under the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0).';
      break;
    case 'BSD-3-Clause':
      licenseBadge = '![BSD License](https://img.shields.io/badge/license-BSD%203--Clause-blue.svg)';
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      licenseDescription = 'This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).';
      break;
    case 'ISC':
      licenseBadge = '![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)';
      licenseLink = 'https://opensource.org/licenses/ISC';
      licenseDescription = 'This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).';
      break;
    case 'Creative Commons':
      licenseBadge = '![Creative Commons License](https://img.shields.io/badge/license-Creative%20Commons-blue.svg)';
      licenseLink = 'https://creativecommons.org/licenses/';
      licenseDescription = 'This project is licensed under the [Creative Commons License](https://creativecommons.org/licenses/).';
      break;
    default:
      licenseBadge = '![License](https://img.shields.io/badge/license-Unknown-lightgray.svg)';
      licenseLink = '';
      licenseDescription = 'This project does not have a recognized license.';
      break;
  }

  // Return the formatted license section for the README
  return `
  ## License
  
  ${licenseDescription}
  
  ${licenseBadge}
    `;
}

// // Example usage:
// console.log(getLicenseSection('MIT'));             // Returns the MIT license section
// console.log(getLicenseSection('GPL-3.0'));         // Returns the GPL-3.0 license section
// console.log(getLicenseSection(''));                // Returns an empty string
// console.log(getLicenseSection(null));              // Returns an empty string
// console.log(getLicenseSection());                  // Returns an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to contact me at ${data.email}. You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}


export default generateMarkdown;
