// const http =require('http') //importing in commonJs format
//  import http from "http" //ecmaScript Module
import {a} from "./server.js"
console.log(a)

// type:module in package.json => ESmodule

import obj from "./server.js"
// const a=require("./server.js") // CommonJs
console.log(obj)

//Common js auto wraps in:

(function (exports,require,module,__filename,__dirname) {
    
})