// setTimeout(fn,3000 );

// function fn(){
//     document.body.style.background = "black"
// }


setTimeout(() => {
    document.body.style.background  = "red"
}, 3000);


// setInterval(()=>{
//     document.write("Arbaaz Chouhan");
    
// },3000)


const open1 = document.getElementById("btn");
open1.addEventListener("click", () => {
    window.open("https://www.youtube.com/");
});