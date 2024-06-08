const createelm = document.createElement("li")
createelm.innerHTML = "ajfsjvdsvkjss"
const a = document.querySelector(".item1");
const divselect = document.getElementById("hello")
divselect.append(createelm)

const position = divselect.firstElementChild.nextElementSibling.nextElementSibling
divselect.insertBefore(createelm, position)
console.log(a);
divselect.removeChild(a)
