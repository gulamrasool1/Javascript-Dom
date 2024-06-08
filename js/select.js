const heading = document.getElementById("heading");
console.log(heading);

const clsselect = document.getElementsByClassName("clsselect");
console.log(clsselect);

const queryselect = document.querySelector(".ddjf");
console.log(queryselect);

setTimeout(function () {
    heading.innerHTML = "<h1> golam rasool bhai </h1>"
}, 3000)

const querall = document.querySelectorAll(".clsselect");
console.log(querall[0])

for(let i = 0 ; i < querall.length; i++){
    console.log(querall[i].innerHTML = "<h1>golam rassool bahai </h1>");
}

querall[0].innerHTML = "<h1>fayyaz 1</h1>"

// console.log(querall);

const presure = document.getElementsByTagName("pre");
for(let i = 0; i < presure.length; i++){
    console.log(presure[i].innerHTML = "<h1>fayyaz rehmaan bhai</h1>");
}
console.log(presure);