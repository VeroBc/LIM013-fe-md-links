
const auditPath = require('../src/auditPath.js');

describe('Is File: ', () => {
    it('should be a function', () => {
        expect(typeof auditPath.isFile).toBe('function');
    });
    it('should return false', () => {
        expect(auditPath.isFile('/home/vero/proyectos/LIM013-fe-md-links')).toBe(false);
    });
    it('should return true', () => {
        expect(auditPath.isFile('/home/vero/proyectos/LIM013-fe-md-links/testFileSix.md')).toBe(true);
    });
});

describe('Is .md File: ', () => {
    it('should be a function', () => {
        expect(typeof auditPath.isMdFile).toBe('function');
    });
    it('should return false', () => {
        expect(auditPath.isMdFile('/home/vero/proyectos/LIM013-fe-md-links')).toBe(false);
    });
    it('should return true', () => {
        expect(auditPath.isMdFile('/home/vero/proyectos/LIM013-fe-md-links/testFileSix.md')).toBe(true);
    });
});

describe('Is Directory: ', () => {
    it('should be a function', () => {
        expect(typeof auditPath.isDirectory).toBe('function');
    });
    it('should return true', () => {
        expect(auditPath.isDirectory('/home/vero/proyectos/LIM013-fe-md-links')).toBe(true);
    });
    it('should return false', () => {
        expect(auditPath.isDirectory('/home/vero/proyectos/LIM013-fe-md-links/testFileSix.md')).toBe(false);
    });
});

describe('Array of .md Files: ', () => {
    it('should be a function', () => {
        expect(typeof auditPath.mdFilesArray).toBe('function');
    });
    it('should return a .md files array', () => {
        const pathString = '/home/vero/proyectos/LIM013-fe-md-links/folderTests';
        const filesArray = [ '/home/vero/proyectos/LIM013-fe-md-links/folderTests/testFileOne.md',
        '/home/vero/proyectos/LIM013-fe-md-links/folderTests/testFileThree.md', 
        '/home/vero/proyectos/LIM013-fe-md-links/folderTests/testFileTwo.md' ];
        expect(auditPath.mdFilesArray(pathString)).toEqual(filesArray);
    });
});

describe('Array of links in one File: ', () => {
    it('should be a function', () => {
        expect(typeof auditPath.linksArray).toBe('function');
    });
    it('should return links array', () => {
        const pathString = '/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md';
        const linksArray =  [ { href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        path: '/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md' },
      { href: 'https://nodejs.org/',
        text: 'Node.js',
        path: '/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md' } ];
        expect(auditPath.linksArray(pathString)).toEqual(linksArray);
    });
});

describe('Array of links in one Directory: ', () => {
    it('should be a function', () => {
        expect(typeof auditPath.totalLinksArray).toBe('function');
    });
    it('should return links array of one Directory', () => {
        const pathString = '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo';
        const totalLinksArray =  [ { href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
           text: '<code>import</code>',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFive.md' },
         { href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
           text: '<code>export</code>',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFive.md' },
         { href:
            'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
           text: 'Uso de callbacks.',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFive.md' },
         { href:
            'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
           text: 'Consumo de Promesas.',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFive.md' },
         { href:
            'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
           text: 'Creación de Promesas.',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFive.md' },
         { href: 'https://es.wikipedia.org/wiki/Markdown',
           text: 'Markdown',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFour.md' },
         { href: 'https://nodejs.org/',
           text: 'Node.js',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFour.md' },
         { href: 'https://nodejs.org/es/',
           text: 'Node.js',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFour.md' },
         { href: 'https://developers.google.com/v8/',
           text: 'motor de JavaScript V8 de Chrome',
           path:
            '/home/vero/proyectos/LIM013-fe-md-links/folderTests/folderTestLevelTwo/testFileFour.md' } ];
        expect(auditPath.totalLinksArray(pathString)).toEqual(totalLinksArray);
    });
});




