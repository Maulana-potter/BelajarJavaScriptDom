// dom selection 

// document.getElementById() -> memanggil berdasarkan idnya 
// -> mengembalikan elemen 
const judul = document.getElementById("judul")
judul.style.color = "red "
judul.style.backgroundColor = "grey"
judul.innerHTML = "Nazar Maulana"

// document.getElementsByTagName() -> memanggil berdasarkan dari tag html 
// ->HtmlCollections
const p = document.getElementsByTagName("p")
for(let i = 0 ; i< p.length ;i++){
    p[i].style.color = "white"
    if( i % 2 == 0 ){
        p[i].style.background = "grey"
    }else{
        p[i].style.background = "#234"
    }
}

const h1 = document.getElementsByTagName("h1")[0]
h1.style.fontSize = "50px"

// document.getElementsByClassName() -> memanggil berdasarrkan class html 
// ->HtmlCollections
const p1 = document.getElementsByClassName("p1")[0]
p1.innerHTML = "ini adalah javascript"