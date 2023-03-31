var main = document.querySelector("main");
var texts = document.querySelectorAll("h1, h2, h3, p:not(.thanks), li, .alphabet, dd, dt");
var link = document.querySelector("#link");
var containers = document.querySelectorAll(".flex-container > div, .grid-container > div:not(.alphabet)")
var dts = document.querySelectorAll("dt");
var thirdImgs = document.querySelectorAll("div:nth-child(3n) img");


window.addEventListener("load", function(){
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
        console.log("I'm dark mode");
        this.document.querySelector("#mode").innerHTML = "Light Mode"
    }
});

document.querySelector("#mode").addEventListener("click", function(){

    if (document.querySelector("#mode").innerHTML === "Light Mode"){
        console.log("Changed to Light Mode");
        document.querySelector("#mode").innerHTML = "Dark Mode";
        document.querySelector("#mode").style.color = "black";  
        main.style.backgroundImage = "url(../images/28.gradients.ray.png)";
        main.style.backgroundColor = "white";
        if(link) link.style.color="blue";
        for (let i =0; i < texts.length; i++){
            texts[i].style.color = "black";
        }
        for (let i =0; i<containers.length; i++){
            containers[i].style.backgroundColor = "white"
        }
        for (i=0; i< thirdImgs.length; i++){
            thirdImgs[i].style.border="1rem #222 solid";
            thirdImgs[i].style.borderImage = "repeating-linear-gradient(45deg, transparent, transparent 5px, #222 6px, #222 15px, transparent 16px, transparent 20px) 20/1rem"
        }
        if (window.matchMedia('(min-width: 750px)')){
            for (let i=0; i< dts.length; i++){
                dts[i].style.color = "purple";
            }
        }
        
    }else{
        console.log("Changed to Dark Mode");
        document.querySelector("#mode").innerHTML = "Light Mode";
        document.querySelector("#mode").style.color = "white"; 
               
        main.style.backgroundImage = "none";
        main.style.backgroundColor = "#333";
        if (link) link.style.color="aqua";
        for (let i =0; i < texts.length; i++){
            texts[i].style.color = "white";
        }
        for (let i =0; i<containers.length; i++){
            containers[i].style.backgroundColor = "#666"
        }
        for (i=0; i< thirdImgs.length; i++){
            thirdImgs[i].style.border="1rem white solid";
            thirdImgs[i].style.borderImage = "repeating-linear-gradient(45deg, transparent, transparent 5px, white 6px, white 15px, transparent 16px, transparent 20px) 20/1rem"
        }
        if (window.matchMedia('(min-width: 750px)')){
            for (let i=0; i< dts.length; i++){
                dts[i].style.color = "yellowgreen";
            }
        }
    }
})
