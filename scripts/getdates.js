// Get the current year
const currentYear = new Date().getFullYear();

// Update the current year in the footer
document.getElementById('currentyear').textContent = `${currentYear}`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the last modified date in the footer
const lastModifiedParagraph = document.querySelector('.lastModified');
lastModifiedParagraph.textContent = `Last edit: ${lastModifiedDate}`;