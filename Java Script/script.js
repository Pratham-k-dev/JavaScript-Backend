function add(x,y){
    return x+y;
}

console.log("hello world");
let arr=[1,2,3,4];
let a=0;
// for(let i=0;i<arr.length;i++) a=add(a,arr[i]);
// console.log(a); 
// console.log(arr.join(' '));
// arr.forEach(x=>console.log(x));

let o={
    name: "pratham",
    "min no": 110,
}
console.log(o);
o.salary=10000;
console.log(o);
for (const key in o) {
    
        const element = o[key];
        console.log(element)
        
    
}
fun1=(x)=>{
    console.log("hello", x);
}
fun1(2);