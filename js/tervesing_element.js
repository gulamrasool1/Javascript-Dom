const baccha = document.getElementById("name1");
const a = baccha.parentElement;
console.log(a);

// const main = document.getElementById("name");
// const b = main.firstElementChild;
// console.log(b);

// const selectchotabeta = document.getElementById("name");
// const c = selectchotabeta.lastElementChild;
// console.log(c);


// const main = document.getElementById("name");
// const d = main.children;
// for(i=0 ; i < d.length ; i++){
//     d[i].innerHTML = "fayyaz";
// }
// console.log(a1);


const sibling = document.getElementById("name3");
const e = sibling.previousElementSibling;
console.log(e);


const sibling2 = document.getElementById("name3");
const f = sibling2.nextElementSibling;
console.log(f);