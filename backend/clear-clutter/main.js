// reference:https://www.w3schools.com/nodejs/nodejs_filesystem.asp

const fs = require("fs").promises
const path = require("path")
async function clutter_folder() {
    const files = await fs.readdir('C:\\web dev\\JavaScript-Backend\\backend\\clear-clutter\\new-folder') //accessing all files
    for (let file of files) {
        async function moveFile() {
            const sourceFile = path.join("C:\\web dev\\JavaScript-Backend\\backend\\clear-clutter\\new-folder",file);
            const targetDir = path.join("C:\\web dev\\JavaScript-Backend\\backend\\clear-clutter\\new-folder",path.extname(file));
            const targetFile = path.join(targetDir, file);


            
            await fs.mkdir(targetDir, { recursive: true }); // making directory, dosent 

            
            await fs.rename(sourceFile, targetFile); //moving file

            

        }
        moveFile()
       
    }
}

clutter_folder()