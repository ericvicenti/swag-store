
const fs = require('fs');
const join = require('path').join;

function setIndexToChapter(appDir, chapter) {
  [
    join(appDir, 'index.ios.js'),
    join(appDir, 'index.android.js'),
  ].forEach(indexFileName => {
    const origFile = fs.readFileSync(indexFileName, {encoding: 'utf8'});
    const lines = origFile.split('\n');
    lines.splice(4, 1, 'import App from "./src/App'+chapter+'";');
    const newFile = lines.join('\n');
    fs.writeFileSync(indexFileName, newFile);
  });
}

function normalizeNames(input) {
  return input
    .split('\n')
    .map(line => {
      const importLineOtherThanFrom = line.split('from "./');
      if (importLineOtherThanFrom.length < 2) {
        return line;
      }
      const importRefToEndOfLine = importLineOtherThanFrom[1];
      const importRef = importRefToEndOfLine.split('"')[0];
      const name = importRef.slice(0, -1);
      return importLineOtherThanFrom[0] + 'from "./' + name + '";';
    })
    .join("\n");
}

const MAIN_DIR = join(__dirname, "dev");
function scanMain() {
  const appNames = fs.readdirSync(MAIN_DIR).filter(name => name.indexOf('swag') === 0);
  let highestChapterInMain = 0;
  const apps = appNames.map(appName => {
    const appDir = join(MAIN_DIR, appName);
    const srcDir = join(appDir, 'src');
    let lowestChapter = null;
    const sourceFiles = fs.readdirSync(srcDir).map(srcFileName => {
      if (srcFileName.split(".js").length < 2) return null;
      const nameWithoutExt = srcFileName.split(".js")[0];
      const name = nameWithoutExt.slice(0, -1);
      const chapter = Number(nameWithoutExt.substr(-1));
      if (lowestChapter === null || lowestChapter > chapter) {
        lowestChapter = chapter;
      }
      if (highestChapterInMain < chapter) {
        highestChapterInMain = chapter;
      }
      if (chapter == null) return null;
      return {
        fileName: srcFileName,
        chapter: chapter,
        baseName: name,
        path: join(srcDir, srcFileName),
      };
    }).filter(f => !!f);
    return {
      lowestChapter: lowestChapter,
      name: appName,
      path: appDir,
      src: sourceFiles,
    };
  });
  return {
    highestChapterInMain: highestChapterInMain,
    apps: apps,
  };
}

module.exports = {
  setIndexToChapter: setIndexToChapter,
  normalizeNames: normalizeNames,
  scanMain: scanMain,
};
