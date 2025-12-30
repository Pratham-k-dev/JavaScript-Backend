const fs = require("fs").promises
const path = require("path")
async function clutter_folder() {
    const files = await fs.readdir('C:\\web dev\\JavaScript-Backend\\backend\\clear-clutter\\cluttered_file')
    for (let file of files) {
        async function moveFile() {
            const sourceFile = path.join("C:\\web dev\\JavaScript-Backend\\backend\\clear-clutter\\cluttered_file",file);
            const targetDir = path.join("C:\\web dev\\JavaScript-Backend\\backend\\clear-clutter\\cluttered_file",path.extname(file));
            const targetFile = path.join(targetDir, file);


            // Ensure source file exists
            // await fs.access(sourceFile);

            // Create target directory if it doesn't exist
            await fs.mkdir(targetDir, { recursive: true });

            // Move the file
            await fs.rename(sourceFile, targetFile);

            // console.log('File moved successfully');

        }
        moveFile()
        // console.log(file)
    }
}

clutter_folder()