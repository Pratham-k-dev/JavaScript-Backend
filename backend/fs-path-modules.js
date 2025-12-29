// const fs=require("fs")
import fs from "fs/promises"
// console.log("start")
// // fs.writeFileSync("pk.txt","smth")// syncronous approach
// fs.writeFile("pk2.txt","smth2",()=>{ //asyncronous 
//     console.log("smth")

//     fs.readFile("pk2.txt",(error,data)=>{
//         console.log(data.toString())
//     })
// })

// fs.appendFile("pk2.txt","hello",(e)=>{
//      console.log(e)
// })
// console.log("end")



//using await

// no need to be inside async function as we are in module


let a=await fs.readFile("pk2.txt")
console.log(a.toString())
let b=await fs.appendFile("pk2.txt","\nyoo")
console.log(b)


import path from "path"

let mypath="c:\\web dev\\backend\\fs-path-modules.js"

path.extname(mypath)
path.dirname(mypath)
path.basename(mypath)

console.log(path.join("c:/","programs.txt")) //joins safely