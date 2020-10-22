const validateLink = require('../src/validateLink.js');
const stats = require('../src/stats.js');
const process = require('process');
const path = require('path');
// const colors = require('colors');
// jest.mock('node-fetch'); manual
// fetch-mock


describe('Total Links: ', () => {
    it('should be a function', () => {
        expect(typeof validateLink.totalLinks).toBe('function');
    });

    it('Should return: href, path, text', () => {
        const result = ['/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md https://es.wikipedia.org/wiki/Markdown Markdown',
          '/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md https://nodejs.org/ Node.js'];
        return validateLink.totalLinks(path.join(process.cwd(),'testFileSeven.md')).then((resolve) => {
          expect(resolve).toEqual(result);
        });
    });
});


describe('Links validation: ', () => {
    it('should be a function', () => {
        expect(typeof validateLink.linksValidation).toBe('function');
    });

    it('Should return: path, href, statusText, status, text', () => {
        const result = ['/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md https://es.wikipedia.org/wiki/Markdown OK 200 Markdown',
        '/home/vero/proyectos/LIM013-fe-md-links/testFileSeven.md https://nodejs.org/ OK 200 Node.js'];
        return validateLink.linksValidation(path.join(process.cwd(),'testFileSeven.md')).then((resolve) => {
          expect(resolve).toEqual(result);
        });
    });

});


describe('Stats list: ', () => {
    it('should be a function', () => {
        expect(typeof stats.statsList).toBe('function');
    });

    it('Should return: Total and Unique', () => {
        const pathString = '/home/vero/proyectos/LIM013-fe-md-links/folderTests/testFileOne.md';
        const result = ['Total: 11', 'Unique: 10'];
        expect(stats.statsList(pathString)).toEqual(result);
    });
});


describe('Stats list broken: ', () => {
    it('should be a function', () => {
        expect(typeof validateLink.statsBroken).toBe('function');
    });

    it('Should return: Stats list broken:', () => {
        const pathString = '/home/vero/proyectos/LIM013-fe-md-links/folderTests/testFileOne.md';
        const result = ['Total: 11', 'Unique: 10', 'Broken: 4'];
        return validateLink.statsBroken(pathString).then((resolve) => {
            expect(resolve).toEqual(result);
          });
    });
});