const ubahWarna = document.getElementById('ubahwarna')

ubahWarna.onclick = function (){
    document.body.classList.toggle('biru')
}


const warnaAcak = document.createElement('button')
const teksWarna = document.createTextNode('Acak warna')
warnaAcak.appendChild(teksWarna)
warnaAcak.setAttribute('type','button')
ubahWarna.after(warnaAcak)

warnaAcak.addEventListener('click',() =>{
    const r = Math.round(Math.random() *255 + 1 )
    const g = Math.round(Math.random() *255 + 1 )
    const b = Math.round(Math.random() *255 + 1 )
    document.body.style.backgroundColor = 'rgb('+r+','+ g+','+ b+ ')'
})


const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+ g+','+ b+ ')'

})
sHijau.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+ g+','+ b+ ')'

})
sBiru.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+ g+','+ b+ ')'

})


document.body.addEventListener('mouseover',function(event){
    const postY = Math.round((event.clientY/window.innerHeight)*255)
    const postX = Math.round((event.clientX/window.innerWidth)*255)
    const postB = Math.round((postX + postY) / 2);

    document.body.style.backgroundColor = 'rgb('+postX+','+ postY+','+postB+')'


})