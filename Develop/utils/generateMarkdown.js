// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
   return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license) \n`;
  }
  return"";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
    
        Licensed under the ${license} license.`
  }
  return"";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](description)
* [Requirements](requirements)
* [Usage](usage)
* [Contact-Me](#contact-Me)
* [Contributors](#contributors)
* [testing](#testing)
${renderLicenseLink(data.license)}
${data.description}
## Languages & Dependencies
${data.require}
## How to Use This Application:
${data.usage}
## Contact-me
* Name- ${data.name}
* Email- ${data.email}
* Github- [${data.creator}](https://github.com/${data.creator})
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).

`;
}
 

module.exports = generateMarkdown;
