#!/usr/bin/env node

console.log("Exporting all steps..");

let exportChapter = 0;
let doesChapterHaveContent = true;
const join = require("path").join;
const fs = require("fs");
const exec = require("child_process").execFileSync;
const util = require("./util");

const APP_NAMES = ["swag", "swag-store", "swag-checkout-flow"];
const MAIN_DIR = join(__dirname, "dev");
const PRESO_DATA_PATH = join(__dirname, "slides", "code-data.json");

const scan = util.scanMain();

const exportDir = join(__dirname, "chapters");
exec("rm", ["-rf", exportDir]);

const standardFilesToCopy = [
  "assets",
  ".babelrc",
  ".buckconfig",
  ".flowconfig",
  ".gitattributes",
  ".gitignore",
  "app.json",
  "index.ios.js",
  "index.android.js",
  "package.json"
];

const codeData = {};

for (var chapterI = 0; chapterI <= scan.highestChapterInMain; chapterI++) {
  console.log("Exporting Chapter " + chapterI);
  const chapterDest = join(exportDir, "chapter-" + chapterI);
  exec("mkdir", ["-p", chapterDest]);
  const appsInChapter = scan.apps.filter(app => app.lowestChapter <= chapterI);
  appsInChapter.forEach(app => {
    const appDest = join(chapterDest, app.name);
    exec("mkdir", ["-p", appDest]);
    standardFilesToCopy.forEach(fileToCopy => {
      try {
        exec("cp", [
          "-r",
          join(app.path, fileToCopy),
          join(appDest, fileToCopy)
        ]);
      } catch (e) {}
    });
    const srcDir = join(appDest, "src");
    exec("mkdir", [srcDir]);
    const filesToCopy = [];
    app.src.forEach(sourceFile => {
      if (
        sourceFile.chapter <= chapterI &&
        filesToCopy.indexOf(sourceFile.baseName) === -1
      ) {
        filesToCopy.push(sourceFile.baseName);
      }
    });

    filesToCopy.forEach(fileBaseName => {
      const eligible = app.src
        .filter(
          sourceFile =>
            sourceFile.baseName === fileBaseName &&
            sourceFile.chapter <= chapterI
        )
        .sort((a, b) => {
          return a.chapter < b.chapter;
        });
      const fileToExport = eligible[0];
      if (fileToExport) {
        const moduleContent = fs.readFileSync(fileToExport.path, { encoding: "utf8" });
        const destFile = join(srcDir, fileToExport.baseName + ".js");
        const newModuleContent = util.normalizeNames(moduleContent);
        codeData[
          app.name + "-" + fileToExport.baseName + fileToExport.chapter
        ] = newModuleContent;
        if (app.name === "swag") {
          codeData[fileToExport.baseName + fileToExport.chapter] = newModuleContent;
        }
        fs.writeFileSync(destFile, newModuleContent);
      }
    });
  });
}

fs.writeFileSync(PRESO_DATA_PATH, JSON.stringify(codeData));

// console.log("Scan data:", JSON.stringify(scan, null, 2));

console.log("Done exporting");
