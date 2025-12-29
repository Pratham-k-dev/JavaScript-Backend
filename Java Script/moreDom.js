function randomRGB() {//random color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let e=document.getElementsByClassName("box");
e[1].style.backgroundColor="red"
document.getElementById("b5").style.backgroundColor=randomRGB();
// document.getElementsByClassName("box") ==> all elements

document.querySelector(".box");//for first occurence

document.querySelectorAll(".box1") // returns list of all elements (nodelist)

document.querySelectorAll(".box").forEach(e=>{
    e.style.color="blue";
});

console.log(document.getElementsByTagName("div"))