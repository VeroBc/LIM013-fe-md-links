
const validateLink = require('../src/validateLink.js');
const stats = require('../src/stats.js');

const mdLinks = (pathString, options) => new Promise ((resolve) => {
    
    let result = [];
    
    if (options.validate === true && options.stats === undefined){
        result = validateLink.linksValidation(pathString);

    } else if (options.validate === undefined && options.stats === true) {
        result = stats.statsList(pathString);

    } else if (options.validate === undefined && options.stats === undefined){
        result = validateLink.totalLinks(pathString);

    } else if (options.validate === true && options.stats === true) {
        result = validateLink.statsBroken(pathString);

    } 
    
    resolve(result);
  
});


module.exports = {
    mdLinks,
};

