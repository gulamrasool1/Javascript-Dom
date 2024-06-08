const heading = document.getElementById("heading")
console.log(heading);

// const clsselect = document.getElementsByClassName("clsselect");
// console.log(clsselect);

// const queryselect = document.querySelector(".dkdd")
// console.log(queryselect);

// const lrm = document.getElementsByClassName("lorem")
// console.log(lrm);

// const queryselect1 = document.querySelector(".lorem")
// console.log(queryselect1.innerHTML = "mikail");

setTimeout(function () {
    heading.innerHTML = "<h1> fayyazur rehmaan </h1>"
}, 3000)

const clsselect = document.querySelectorAll(".clsselect");
setTimeout(function() {
    clsselect.forEach(function(element){
        element.innerHTML = "<h1> Gulam Rasul </h1>"
    })
},3000)

// const querall = document.querySelectorAll(".clsselect")
// console.log(querall[1]); //only one class target

// for(i = 0; i < querall.length; i++){
//     console.log(querall[i].innerHTML = "Mohammed Saleh");
// }
// console.log(querall); 

// querall[1].innerHTML = "Mohammed Arshad" //only one class innerHtml change
// querall[2].innerHTML = "Mohammad Mushrraf"
// querall[3].innerHTML = "Mohammad Yunus"
// querall[4].innerHTML = "Mohammad Salam"

const preserve = document.getElementsByTagName("pre")
for(i = 0; i < preserve.length; i++){
    console.log(preserve[i].innerHTML = "Mohammed Rizwan");
}
preserve[1].innerHTML = "Gulam Rasul"
console.log(preserve);
