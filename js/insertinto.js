const createelm = document.createElement('li');
createelm.innerHTML="jfkdjkfjdfkjkd "
const a = document.querySelector(".itme3");
const divselect = document.getElementById("hello")
divselect.append(createelm);

const postion = divselect.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
divselect.insertBefore(createelm , postion);
console.log(a);
divselect.removeChild(a)
// console.log(postion)