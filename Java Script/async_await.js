async function delay() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("executed");
            resolve("yay done!")
        }, 2000);
    })
}

async function main() {
    console.log("task1");
    let p=await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let response= await p.json();
      
    console.log(response);
    console.log("done!");

    
}

// fetch code from Jsomplaceholder



main()