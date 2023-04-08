/******id*****/
let left_arrow = document.getElementById("left_arrow");
let rigth_arrow = document.getElementById("rigth_arrow");
let img_game_swip = document.getElementById("img_game_swip");

rigth_arrow.addEventListener("click",swipnext);
left_arrow.addEventListener("click",swipbefor);
left_arrow.style.visibility = "hidden";

/***variables****/
let count = 1;
let tab = [1,2,3,4];
img_game_swip.setAttribute("src",`home/icons/swipe/Screenshot_${count}.png`)
/****functions** */
function swipnext(){
    count++;
    img_game_swip.setAttribute("src",`home/icons/swipe/Screenshot_${count}.png`)
    left_arrow.style.visibility = "visible";
    if(count < 4)
        rigth_arrow.style.visibility = "visible";
    else
        rigth_arrow.style.visibility = "hidden";
}
function swipbefor(){
    count--;
    img_game_swip.setAttribute("src",`home/icons/swipe/Screenshot_${count}.png`)
    rigth_arrow.style.visibility = "visible";
    if(count > 1)
        left_arrow.style.visibility = "visible";
    else
        left_arrow.style.visibility = "hidden";
}
/*****get and set*** */
