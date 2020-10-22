const fs = require('fs');
const path = require('path');
const marked = require('marked');

// -------- Resolving pathString----------

const isFile = (pathString) => fs.lstatSync(pathString).isFile();
const isMdFile = (pathString) => path.parse(pathString).ext == '.md';
const readDirectory = (pathString) => fs.readdirSync(pathString);
const isDirectory = (pathString) => fs.statSync(pathString).isDirectory();


// -------- Extracting Array of files in a Directory  SYNC METHOD----------

const mdFilesArray = (pathString) => {
        let arrayFiles = [];
        let arrayMdFiles = [];
        if (isDirectory(pathString)){
            arrayFiles = (readDirectory(pathString).map(fileName => {
                return path.join(pathString, fileName);
            }).filter(isFile));
            arrayMdFiles = (arrayFiles.filter(pathString => isMdFile(pathString)));
        } 
        else if (isFile(pathString) && isMdFile(pathString)) {
            arrayMdFiles.push(pathString);
        }
        return arrayMdFiles;
};


// -------- Getting array of links of a File  SYNC METHOD----------

const readFile = (pathString) => (fs.readFileSync(pathString, 'utf-8')).trim();
const linksArray = (pathString) => {
    const renderer = new marked.Renderer();
    const fileReading = readFile(pathString);
    let links = [];
    renderer.link = (href, file, text) => {
      links = links.concat([{ href, text, path: pathString }]);
    };
  
    marked(fileReading, { renderer });
  
    return links;
  };


// -------- Getting array of links of a File  SYNC METHOD----------

const totalLinksArray = (pathString) => {
    let totalLinks = [];
    const arrayMdFiles = mdFilesArray(pathString);
    arrayMdFiles.forEach((pathString) => {
        totalLinks = totalLinks.concat(linksArray(pathString));
    });
    return totalLinks;
};


module.exports = {
    isDirectory,
    readDirectory,
    isFile,
    isMdFile,
    mdFilesArray,
    readFile,
    linksArray,
    totalLinksArray,
    
};



// console.log(totalLinksArray(folderPath));


// const getLinksArray = (pathString) => {
//     let liksArray = [];
//     const allLinks = totalLinksArray(pathString);
//     allLinks.forEach(e => {
//         if (!liksArray.includes(e.href))
//             liksArray.push(e.href); 
//     });
//     return liksArray;
// };
// console.log(getLinksArray(folderPath));



// const validateLinks = (pathString) => {
//     const links = totalLinksArray(pathString);
    
//     const valitating = links.map((link)=> {
//         const object = {};
//         return fetch(link.href)
//         .then ((resolve) => {
//             object.href = link.href;
//             object.text = link.text;
//             object.file = link.file;
//             object.status = resolve.status;
//             object.statusText = resolve.statusText;
//             if ((resolve.status >= 200) && (resolve.status < 400)) {
//                 object.message = 'OK';
//             } 
//             object.message = 'ERROR';
//         })
//     .catch((err) => console.lo(err));
//     });
//     return Promise.all(valitating);
// };

// console.log(validateLinks(folderPath));

// -------- Verifying if it's a File or a Directory ASYNC METHOD ----------

// const getStat = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.stat(fileName, (err, stats) => {
//       if (err) {
//         reject (err);  
//         return;
//       }
//         resolve(stats);
//     });
//   });
// };
// getStat(folderPath)
// .then(stats => console.log('is file? ASYNC', stats.isFile()))
// .catch(err => console.error(err));

// getStat(folderPath)
// .then(stats => console.log('is directory? ASYNC', stats.isDirectory()))
// .catch(err => console.error(err));

// module.exports = getStat;





// module.exports = () => {
// // ...
// };

// module.exports.log = function (msg) { 
//     console.log(msg);
// };


// -------- Verifying if it's a Directory  SYNC METHOD----------

// const isDirectory = (pathString) => {
//     if (fs.statSync(pathString).isDirectory() === true){
//     return true;
//     } else
//     return false;
// };
// console.log('is Directory? SYNC', isDirectory(folderPath));


// -------- Verifying if it's a .md File  SYNC METHOD----------

// const isMdFile = (pathString) => {
//     if (fs.statSync(pathString).isFile() === true && path.parse(pathString).ext === '.md'){
//     return true;
//     } else
//     return false;
// };
// console.log('is .md File? SYNC', isMdFile(folderPath));








// const parser = path.parse(folderPath);
// const extension = parser.ext;
// console.log(extension);


// let fs = require('fs');
// const path = require('path');

// console.log(path.isAbsolute('/pruebados.md')); 

// fs.readFile('pruebados.md', 'utf-8', (err, data) => {
//   if(err) {
//     console.log('error: no lee el archivo ', err);
//   } else {
//     console.log(data);
//   }
// });
// console.log('esto se ejecuta antes que esté el archivo');


// const fs = require('fs');
// const path = require('path');
// console.log(path.isAbsolute('/pruebados.md')); 

// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         reject (err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return;        // and we don't want to go any further
//       }
//       resolve(data.toString('utf8'));
//     });
//   });
// };

// getFile('pruebados.md')
// .then(data => console.log(data))
// .catch(err => console.error(err));


// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.stat(fileName, (err, data) => {
//       if (err) {
//         reject (err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return;        // and we don't want to go any further
//       }
//       resolve(data);
//     });
//   });
// };

// getFile(folderPath)
// .then(data => console.log(data))
// .catch(err => console.error(err));



// fs.readdir(folderPath, function (err, files) {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     files.forEach(function (file) {
//         console.log(file); 
//     });
// });



// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.stat(fileName, (err, data) => {
//       if (err) {
//         reject (err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return;        // and we don't want to go any further
//       }
//       resolve(data);
//     });
//   });
// };

// getFile('../LIM013-fe-md-links/README.md')
// .then(data => console.log(data))
// .catch(err => console.error(err));



// fs.stat(folderPath, (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   stats.isFile(); //true
//   stats.isDirectory(); //false
// });


// const getTrue = (route) => {
//     let  isAbsolutePath = (path.isAbsolute(route));  
//     if (isAbsolutePath == true) {
//         let  isDirectory = (fs.stats.isDirectory()(route));  
//         if (isDirectory == true) {
//             const isFile = fileName => {
//                 return fs.lstatSync(fileName).isFile();
//             };
//             fs.readdirSync(folderPath).map(fileName => {
//                 return path.join(folderPath, fileName);
//             })
//             .filter(isFile);
//             console.log(isFile);
//         } else
//         console.log('no es directorio');    
//     } else
//     console.log('no es absoluto');
// };
// getTrue(folderPath);

// console.log(path.basename(folderPath));
// console.log(path.extname(folderPath));



// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.stat(fileName, (err, data) => {
//       if (err) {
//         reject (err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return;        // and we don't want to go any further
//       }
//       resolve(data);
//     });
//   });
// };

// getFile('../LIM013-fe-md-links/README.md')
// .then(data => console.log(data))
// .catch(err => console.error(err));




// let done = true;

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Here is the thing I built';
//     resolve(workDone);
//   } else {
//     const why = 'Still working on something else';
//     reject(why);
//   }
// });


// const isItDoneYet = new Promise(/* ... as above ... */)
// //...

// const checkIfItsDone = () => {
//   isItDoneYet
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }



// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);
// stat('.').then((stats) => {
//   // Do something with `stats`
// }).catch((error) => {
//   // Handle the error.
// });

// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);

// async function callStat() {
//   const stats = await stat('.');
//   console.log(`This directory is owned by ${stats.uid}`);
// }



// const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }
  
//   const json = response => response.json()
  
//   fetch('/todos.json')
//     .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
//     .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
//     .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
//       console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//       console.log('Request failed', error)
//     })




// const validateLinks = (pathString) => {
//     const links = totalLinksArray(pathString);
//     const valitating = links.map((link)=> 
//         fetch(link.href)
//         .then ((resolve) => ({
//             href: link.href,
//             text: link.text,
//             file: link.file,
//             status: resolve.status,
//             statusText: resolve.statusText,
//         }))
//     .catch((err) => console.lo(err)));
//     return Promise.all(valitating);
// };

// console.log(validateLinks(folderPath));


// const urlExistsPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         urlExists(url, (err, exists) => {
//             err ? reject(err) : resolve(exists);
//         });
//   });
// };

//     urlExistsPromise(url).then(exists => console.log(exists));