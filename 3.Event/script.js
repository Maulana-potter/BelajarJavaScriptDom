const p3 = document.querySelector('.p3')


function ubahWarna() {
p3.style.backgroundColor = "red"
}

p3.onclick = ubahWarna



const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function (){
    const ul = document.querySelector("section#b ul")
    const liBaru = document.createElement('li')
    const texkLiBaru = document.createTextNode("ini item baru") 
    liBaru.appendChild(texkLiBaru)
    ul.appendChild(liBaru)
})