const auditPath = require('../src/auditPath.js');
const fetch = require('node-fetch');
const colors = require('colors');


// -------- Getting list of all links without validation of a File  SYNC METHOD----------

const totalLinks = (pathString) => {
    const totalLinks = auditPath.totalLinksArray(pathString);
    const list = totalLinks.map((element) => {
        return (`${element.path} ${element.href} ${element.text}`);
    });
    return Promise.all(list);
};


// -------- Getting validation of all links ----------

const linksValidation = (pathString) => {
    const totalLinks = auditPath.totalLinksArray(pathString);
    const validate = totalLinks.map((element) => {
        return fetch(element.href)
            .then((result) => {
                return colors.green(`${element.path} ${element.href} ${result.statusText} ${result.status} ${element.text}`);
            })
            .catch(error => {
                error =  colors.red(`Broken: ${element.path} ${element.href} ${element.text}`);
                return error;
            });
    });
    return Promise.all(validate);
};


const statsBroken = (pathString) => {
 
    const statsList = [];
    auditPath.totalLinksArray(pathString).forEach(element => {
        if(!statsList.includes(element.href))
            statsList.push(element.href);
    });
    const unique = statsList.length;

    return linksValidation(pathString).then( validatedLinksArray => {
        const brokenLinkCount = validatedLinksArray
                .filter(s => s.includes('Broken'))
                .length;
        const total = validatedLinksArray.length;
       
        return [`Total: ${total}`, `Unique: ${unique}`,`Broken: ${brokenLinkCount}`];        
    });
};



module.exports = {
    totalLinks,
    linksValidation,
    statsBroken,
};



// -------- Getting status code for each link ----------

// function getStatusCodeResult(link) {
//     return new Promise((resolve, reject) => {
//         https.get(link, (res) => {
//             let statusCode = res.statusCode;
//             if (statusCode >= 200 && statusCode < 400) {
//                 resolve(`Success: ${link}  Status: ${statusCode}`);
//             } else if (statusCode >= 400 && statusCode <= 500) {
//                 resolve(`Client Error: ${link}  Status: ${statusCode}`);
//             } else if (statusCode < 200) {
//                 resolve (`Informational Error: ${link}  Status: ${statusCode}`);
//             } else if (statusCode > 500) {
//                 // https.get()
//                 resolve (`Server Error: ${link}  Status: ${statusCode}`);
//             }
//             reject;
//         });
//     });
// }