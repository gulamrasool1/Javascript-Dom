const a = document.body
const d = document.createElement("div")
const b = document.createElement("h4")
const e = document.createElement("p")
console.log(e);
a.append(b);
console.log(b);
const c = b.textContent = "Hello Gulam Rasul"
console.log(c);
d.append(b);
a.append(d);
console.log(d);
const f = e.textContent = "Hello Fayyaz"
console.log(f);
d.append(e);
console.log(d);
const g = b.id = "name2"
const h = e.className = "name1"
const j = d.id = "name"
