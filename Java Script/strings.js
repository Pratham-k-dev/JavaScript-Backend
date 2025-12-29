

// console.log("enter two numbers:");
// let a=parseInt(prompt(">"));
// let b=parseInt(prompt(">"));
// console.log(a+b);

let r=Math.random();//in [0,1]
console.log(r);
if(r<0.5) console.log(true);
else console.log(false);
//strings are imutable(cannot change)

let name1="pratham";
console.log(`i am ${name1}`);
// name1=name1.toUpperCase();
name1[0]='k';
console.log(name1);

// console.log(name1.toUpperCase());
// console.log(name1.slice(1,5));//[1,5) if only slice(1) ==> slice(1,length)
// console.log(name1.replace("am","99"))
// let name2="kulk";

// console.log(name1.concat(name2," ye"," wo"));
// let s2="    vroom  ";
// console.log(s2.trim());

// console.log("hel\"lo")


let arr=[1,2,3,4];
console.log(arr.toString());
console.log(arr.join(" and "));

console.log(arr.shift());//pops first element
console.log(arr);
arr.unshift('pratham');
console.log(arr);
// arr.delete(a[3]) =>deletes it but reserves space for undefined val
// arr.concat(a1,a2,..);
console.log(arr.splice(0,2));// removes elements from 0 to 2
console.log(arr);
//arr.splice(1,3,x,y) ==> replaces 1 to 3 positions with (x,y) but returns arr elements fron 1 to 3 
