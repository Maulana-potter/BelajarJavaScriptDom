// const card = document.querySelector('.card')
// const closed = document.querySelector('.close')
// closed.addEventListener('click',function(){
//     card.remove()
// })

// const closed = document.querySelectorAll('.close')

// closed.forEach(function (el){
//     el.addEventListener('click', function(event){
//         event.target.parentElement.style.display = "none"
//         event.preventDefault() // => stop default dari sintaks html
//         event.stopPropagation()//=>stop buble 
//     })
// })

// const cards = document.querySelectorAll(".card")
// cards.forEach(function(card){
//     card.addEventListener("click",function(e){
//         alert("oke")
//     })
// })

const container = document.querySelector(".container")

container.addEventListener("click",function(e){
    if(e.target.className == "close"){
        e.target.parentElement.style.display = "none "
        e.preventDefault()
    }
})