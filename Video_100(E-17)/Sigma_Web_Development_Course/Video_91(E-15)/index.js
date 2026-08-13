// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders. 

// 1.  name.jpg
// 2.  name.png
// 3.  this.pdf
// 4.  harry.zip
// 5.  rohan.zip
// 6.  cat.jpg
// 7.  dog.png

// this 
// jpg/name.jpg, jpg/cat.jpg
// png/name.png png/dog.png
// pdf/this.pdf 
// zip/harry.zip zip/rohan.zip

const fs = require("fs");
const path = require("path");

// change this to your target directory
const dirPath = "./files"; 

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);

        // Skip directories
        if (fs.lstatSync(fullPath).isDirectory()) return;

        // Get file extension (without dot)
        const ext = path.extname(file).slice(1);

        if (!ext) return; // skip files without extension

        const folderPath = path.join(dirPath, ext);

        // Create folder if not exists
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Move file into its folder
        const newPath = path.join(folderPath, file);
        fs.renameSync(fullPath, newPath);

        console.log(`Moved: ${file} -> ${ext}/`);
    });
});