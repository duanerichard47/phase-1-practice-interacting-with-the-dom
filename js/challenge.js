const timer = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus')

const plusBtn = document.querySelector('#plus')

const likeBtn = document.querySelector('#heart')

const pauseBtn = document.querySelector('#pause')

timer.addEventListener('DOMContentLoaded', e=>{
    let x =1
    if (x < 1000){timer = timer + 1 }  })
    

plusBtn.addEventListener('click', e=>{

timer = timer + 1 })

minusBtn.addEventListener('click', e=>{

    timer = timer - 1 })

likeBtn.addEventListener('click', e=>{

    let likesSaved = timer 
    textContent = "`$(likedSaved) has been liked 1 time`"})
    
    
pauseBtn.addEventListener('click', e=>{

    pauseBtn.textContent = "resume"
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    likeBtn.disabled = true;



    })

