const auditPath = require('../src/auditPath.js');

// -------- Getting stats of all links ----------

const statsList = (pathString) => {
    const totalLinks = auditPath.totalLinksArray(pathString);
    const statsList = [];
    
    totalLinks.forEach(element => {
        if(!statsList.includes(element.href))
            statsList.push(element.href);
    });
    const total = totalLinks.length;
    const unique = statsList.length;

    return [`Total: ${total}` ,`Unique: ${unique}`];
};

module.exports = {
    statsList,
};


// console.log(linksValitation(folderPath));