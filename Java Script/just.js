let a=[5,6,2,3,4,5,1]
// console.log(a.splice(2,1,23,24))
// a.sort()
// console.log(a)

console.log(a.map((v,i,a)=>{
    return v*v;
}))
console.log(a)