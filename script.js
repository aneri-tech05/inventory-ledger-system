const animation = document.querySelector(".bg-animation");

for(let i=0;i<50;i++){

let span = document.createElement("span");

let size = Math.random()*20;

span.style.width = 10 + size + "px";
span.style.height = 10 + size + "px";

span.style.left = Math.random()*window.innerWidth + "px";

span.style.animationDuration = 10 + Math.random()*20 + "s";

animation.appendChild(span);

}