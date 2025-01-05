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
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
