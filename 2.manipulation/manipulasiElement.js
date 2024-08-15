// menaipulasi element 

// element.innerHTML
// const sectionA = document.querySelector("section#a")
// sectionA.innerHTML = 'ini menggunakan innerHTML'

// // elemet.style.<propertiCSS>
// const judul = document.getElementById("judul")
// judul.style.color = "white"
// judul.style.fontSize = "30px"
// judul.style.backgroundColor = "grey"

// menipulasi atribut element pada html 

// element.setAtribute
const judul = document.getElementById("judul")
judul.setAttribute("class" ,"ucok") // ->menambahkan atribute
// judul.gettAttribute("class") -> mencari tau ini atribut dari element
judul.removeAttribute("class") // -> menghapus atribute  


// menipulasi class
const body = document.querySelector("body")
//element.classList -> mengetahui kelas apa aja didalamnnya
//element.classList.add -> menambahkan class 
//element.classList.remove -> menghapus class
//element.classList.item->mengetahui calss tertentu dalam sebuah element
//element.classList.containts -> ngecek dalam sebuah element punya ga class tertentu  
//element.classList.replace -> mengganti calass 
//element.classList.toggle -> yang ada jadi ga ada, yang ga ada menjadi ada  
