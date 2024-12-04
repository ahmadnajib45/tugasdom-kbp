const header=document.getElementById("h1")

const div1=document.getElementById("container1")
const a=document.getElementById("a")
const p=document.getElementsByTagName("p")
const anchor = document.querySelector("#a a")

const div2=document.getElementById("container2")
const ul=document.querySelector("ul")
const list=document.getElementsByClassName("list")

anchor.setAttribute("href","https://www.google.com")


header.style.backgroundColor="#DEAA79"

div1.style.backgroundColor="#B1C29E"
a.style.backgroundColor="#659287"
anchor.style.backgroundColor="#DEAA79"
anchor.style.textDecoration="none"

for (let i=0;i<p.length;i++) {
    p[i].style.backgroundColor="#FFE6A9"
}

div2.style.backgroundColor="#B1C29E"
ul.style.backgroundColor="#659287"


for (let i=0;i<list.length;i++) {
    list[i].style.backgroundColor="#FFE6A9"
}