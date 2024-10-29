// manipulasi dom => menipula node 

const pBaru = document.createElement('p') // => membuat seatu element
const texkPbaru = document.createTextNode("ini paragraf baru") // => membuat isi dari element 
 pBaru.appendChild(texkPbaru)//=> menggabungkan ini element ke elementnya 

const sectionA = document.getElementById('a')//=>cari dulu node yang ingin ditambahkan node baru 
sectionA.appendChild(pBaru)//=> menambahkan node baru tersebut ke paling akhir

const liBaru = document.createElement('li')
const texkLiBaru = document.createTextNode("ini item baru") 
liBaru.appendChild(texkLiBaru)

const sectionB = document.getElementById('b')
const ul = sectionB.querySelector("ul")
const li = ul.querySelector('li:nth-child(2')

ul.insertBefore(liBaru,li)//=>menambahkan node sebulum node yang kita seleksi 


const link= sectionA.getElementsByTagName('a')[0]
sectionA.removeChild(link)//=>meghapus node 


const p = sectionB.querySelector('p')
const h2 = document.createElement('h2')
const isiH2 = document.createTextNode('ini judul baru')
h2.appendChild(isiH2)


sectionB.replaceChild(h2,p)