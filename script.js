let container = document.getElementsByClassName("viewport")[0]; 
let rightBtn = document.getElementsByClassName("rightButton")[0];
let leftBtn = document.getElementsByClassName("leftButton")[0];
let imgsContainer = document.getElementsByClassName("image-container")[0];
imgsContainer.style.left = "0px";
imgsContainer.style.transition = "all 1s";

rightBtn.addEventListener("click", function(){
    let oldLeft = imgsContainer.style.left.split("px")[0];

    if(oldLeft == -3600) {
        imgsContainer.style.left = "0px"
    } else {
        imgsContainer.style.left = (parseInt(oldLeft) - 900) + "px";
    }
})

leftBtn.addEventListener("click", function(){
    let oldLeft = imgsContainer.style.left.split("px")[0];

    if(oldLeft == 0) {
        imgsContainer.style.transition = "all 1s";
        imgsContainer.style.left = "-3600px"
    } else {
        imgsContainer.style.left = (parseInt(oldLeft) + 900) + "px";
    }
})


