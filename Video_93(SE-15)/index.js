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

import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

const baseDir = 'C:\\Sigma Web_Development\\Sigma_Web_Development_Course\\Video_93'

let files = await fs.readdir(baseDir)

for (const item of files) {
    console.log("Processing file:", item)
    let ext = item.split('.')[item.split('.').length - 1]
    if (ext != 'js' && ext != 'json' && item.split('.').length > 1) {

        if (fsn.existsSync(path.join(baseDir, ext))) {
            //move the file to that directory
            fs.rename(path.join(baseDir, item), path.join(baseDir, ext, item))
        } else {
            fs.mkdir(ext)
            fs.rename(path.join(baseDir, item), path.join(baseDir, ext, item))
        }
    }
}
