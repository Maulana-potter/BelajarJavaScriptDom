// dom selection 

// query selector memanggil dengan cara menggunakan selector (sama kayak selector css)

// document.querySelector () -> element 

const judul = document.querySelector("#judul")
judul.innerHTML ="ini diubah melalu javascripst"

const li2 = document.querySelector("#b ul li:nth-child(2)")
li2.style.backgroundColor = "grey"



// document.querySelectorAll () -> Node List
const p = document.querySelectorAll('p')
for( let i = 0 ; i < p.length ; i++){
    p[i].style.backgroundColor = "grey"
}