 document.title="DOM"; //document object model
        console.log(document.body)
        document.body.style.backgroundColor="yellow";
        console.log(document.body.childNodes[1].childNodes);
        // enter after div.container=>text
        let cont=document.body.childNodes[1];
        //we have firstchild,lastchild.
        console.log(cont.firstElementChild);
       //  console.log(cont.children, cont.lastElementChild.parentElement, cont.children[2].previousElementSibling);
       console.log(cont.children[2].previousElementSibling)