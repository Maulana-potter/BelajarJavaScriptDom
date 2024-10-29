function getPilihanKomputer (){
    const comp = Math.random()
    if(comp <= 0.34)return"gajah" 
    if(comp >0.34 && comp <= 0.66) return "semut" 
    return "orang"
}

function getHasil(comp,player){
    if(player == comp) return "SERI"
    if ( player == "gajah") return (comp == "orang") ? "menang" : "kalah"
    if (player== "orang") return (comp == "semut") ? "menang" : "kalah"
    if (player == "semut") return (comp == "gajah") ? "menang" : "kalah"
 }

function putar(){
    const imgComputer = document.querySelector('.image-komputer')
    const gambar = ['orang','gajah','orang']
    let i = 0 
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if(i == gambar.length) i = 0 
    }, 100)
}



 const pilihan = document.querySelectorAll('li img')
 pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
            const pilihanKomputer = getPilihanKomputer()
            const pilihanPlayer = pil.className 
            const hasil = getHasil(pilihanKomputer,pilihanPlayer)

            putar()
        
           setTimeout(function(){
            const imgComputer = document.querySelector('.image-komputer')
            imgComputer.setAttribute('src','img/' + pilihanKomputer + '.png')
        
            const info = document.querySelector('.info')
            info.innerHTML = hasil
           },1000)
    })
 })


//  const pGajah = document.querySelector('.gajah')
//  pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = pGajah.className 
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer)

//     const imgComputer = document.querySelector('.image-komputer')
//     imgComputer.setAttribute('src','img/' + pilihanKomputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

    
//  })
//  const pOrang = document.querySelector('.orang')
//  pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = pOrang.className 
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer)

//     const imgComputer = document.querySelector('.image-komputer')
//     imgComputer.setAttribute('src','img/' + pilihanKomputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

    
//  })
//  const pSemut = document.querySelector('.semut')
//  pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = pSemut.className 
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer)

//     const imgComputer = document.querySelector('.image-komputer')
//     imgComputer.setAttribute('src','img/' + pilihanKomputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

    
//  })