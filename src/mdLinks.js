
const totalLinks = require('../src/auditPath.js');
const validate = require('../src/validateLink.js');

const mdLinks = (pathString, options) => new Promise ((resolve) => {
    if (options.validate === undefined) resolve(totalLinks.totalLinksArray(pathString));
    if (options.validate === true) resolve(validate.linksValitation(pathString));
});

module.exports = {
    mdLinks,
};