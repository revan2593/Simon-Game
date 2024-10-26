let boxes=document.querySelectorAll(".boxs");
let head=document.querySelector("h3");
let level=0;
let ids=["box1","box2","box3","box4"];
let userSeq=[];
let gameSeq=[];
let started=false;

document.addEventListener("click",function(){
     if(started==false){
        started=true;
        levelUp();
     };
})


function btnFlash(btn1){
    btn1.classList.add("flash");
    console.dir(btn1);
     setTimeout(function(){
        btn1.classList.remove("flash");
       
     },2000);
       
   
}

function afterclick(btn1){
    btn1.classlist.add("flash");
    
}


function levelUp(){
    level++;
   
    head.innerText=`level ${level}`;
    let x=Math.floor(Math.random()*3);
    let btn=document.querySelector(`.${ids[x]}`);
   userSeq.push(ids[x]);
     btnFlash(btn);
     
}

function btnpress(){
  
    let col=this.getAttribute("id");
    gameSeq.push(col);
    btnFlash1(this);
    if(userSeq==0){
        gameSeq=[];
    }
    
    if(userSeq.length>0){
        if(gameSeq[gameSeq.length-1]==userSeq[gameSeq.length-1]){
            console.log("ji");
            if(gameSeq.length==userSeq.length){
                gameSeq=[];
                levelUp();
                
             }
        }
        else{
            head.innerText="level fucked up please refresh the page";
            userSeq=[];
            gameSeq=[];
            allred();

        }
    }
    

}
function btnFlash1(btn1){
    btn1.classList.add("flash1");
    console.dir(btn1);
     setTimeout(function(){
        btn1.classList.remove("flash1");
       
     },1000);
       
   
}

let allbtns = document.querySelectorAll(".boxs");
for (buttons of allbtns){
    buttons.addEventListener("click", btnpress);

}
function allred(){
    for (boxo of boxes){
        boxo.classList.add("allred");
    }
}
