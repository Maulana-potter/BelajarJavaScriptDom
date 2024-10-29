const jumbo = document.querySelector('.jumbo')
const container = document.querySelector('.container')
const thumbs = document.querySelectorAll(".thumb")

//     thumb.forEach(function(img){
//         img.addEventListener('click', function(e){
//             const atribute = img.getAttribute('src');
//             jumbo.setAttribute('src', atribute)
//         })
// })

container.addEventListener("click", function(e){
    if(e.target.className == "thumb"){
                jumbo.src = e.target.src
                jumbo.classList.add(`fide`)
                setTimeout(function(){
                    jumbo.classList.remove('fide')
                },500)
                
                thumbs.forEach(function(e){
                   e.classList = 'thumb'
                })
                e.target.classList.add('active')
    }
})