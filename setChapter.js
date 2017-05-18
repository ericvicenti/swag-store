#!/usr/bin/env node

const chapterToDev = Number(process.argv[2]);

const join = require('path').join;
const fs = require('fs');
const util = require('./util');


const APP_NAMES = ['swag-store', 'swag'];

APP_NAMES.forEach(appName => {
  let highestChapterInApp = 0;

  const appDir = join(__dirname, 'dev', appName);
  const appSrcDir = join(appDir, 'src');

  util.setIndexToChapter(appDir, chapterToDev);
  console.log('Fixed index files');

  const sourceFiles = fs.readdirSync(appSrcDir);
  const fileChapterIndex = {};

  sourceFiles.forEach(srcFileName => {
    const nameWithoutExt = srcFileName.split('.js')[0];
    const name = nameWithoutExt.slice(0, -1);
    const chapter = Number(nameWithoutExt.substr(-1));
    if (chapter > highestChapterInApp) {
      highestChapterInApp = chapter;
    }
    const chapterIndex = fileChapterIndex[name] || (fileChapterIndex[name] = []);
    chapterIndex[chapter] = srcFileName;
  });

  console.log('index is ', fileChapterIndex);

  sourceFiles.forEach(srcFileName => {
    const fullFilePath = join(appSrcDir, srcFileName);
    const origFile = fs.readFileSync(fullFilePath, {encoding: 'utf8'});
    const lines = origFile.split('\n');
    const newFile = lines.map(line => {
      if (line.split('from "./').length < 2) {
        return line;
      }
      const importLineOtherThanFrom = line.split('from "./');
      const importRefToEndOfLine = importLineOtherThanFrom[1];
      const importRef = importRefToEndOfLine.split('"')[0];
      const name = importRef.slice(0, -1);
      const chapterIndex = fileChapterIndex[name];
      let selectedChapter = null;
      let chapterI = chapterToDev;
      while (!selectedChapter && chapterI > 0) {
        if (chapterIndex[chapterI]) {
          selectedChapter = chapterI;
        }
        chapterI -= 1;
      }
      if (!selectedChapter) {
        selectedChapter = 0;
      }
      console.log('For file '+srcFileName+' selecting '+name+' at chapter '+selectedChapter);
      return importLineOtherThanFrom[0] + 'from "./' + name + selectedChapter + '";';
    }).join('\n');
    fs.writeFileSync(fullFilePath, newFile);
  });

});

console.log('Developing chapter '+chapterToDev);
