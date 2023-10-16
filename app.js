const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list")


arrows.forEach((arrow,index)=>{
    const ratio = Math.floor(window.innerWidth/270)
   console.log(ratio)
    const itemNumber = movieList[index].querySelectorAll("img").length;
    let clickCounter = 0;

    
    arrow.addEventListener('click',()=>{
        clickCounter++;
        if(itemNumber - (5 + clickCounter) + (5 - ratio) >= 0){
            movieList[index].style.transform= `translateX(${
                movieList[index].computedStyleMap().get("transform")[0].x.value - 300}px)`
        }else{
            movieList[index].style.transform = "translateX(0)";
            clickCounter= 0;
        }
        
    })

   
})

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container, .navbar,.toggle, .sidebar, .left-menu-icon, .movie-list-title")

ball.addEventListener('click', ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})