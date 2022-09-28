console.log("connected")
let rock=document.getElementById("Rock");
let paper=document.getElementById("paper");
let sci=document.getElementById("Scissors");
let outcome=document.getElementById("outcome");
let score=document.getElementById("score-result-p");
let scorec=document.getElementById("score-result-c");


let your=document.getElementById("y-c")
let comp=document.getElementById("comp")
let scorep=0;
let scorez=0;
let c=["Rock","Paper","Scissors"];

function yc(e){
    your.innerText=e;
    let ca = c[Math.floor(Math.random()*c.length)];
    
    comp.innerText=ca;
}

function result(){
    let b=comp.innerText
    let a=your.innerText
    
    if(a===b){
        outcome.innerText="Tie"
        outcome.style.color="yellow"
    }else if( (a==="Rock" && b==="Scissors") || (a==="Paper" && b==="Rock" )||(a==="Scissors" && b==="Paper")){
        outcome.style.color="green"
        outcome.innerText="You Win!!"
    }else{
        outcome.style.color="red"
        outcome.innerText="You Lose!"
    }
    
}
function declare(){
    
    let b= scorec.innerText
    let a= score.innerText
    console.log(a)
    if(a>=5 && b<5){
        console.groupCollapsed("yay baby")
        outcome.style.transform="scale(5)";
        setTimeout(function(){
            outcome.style.transform="scale(1)"
        },1000)
        setTimeout(function(){
            reset()
        },1000)
        
    }else if(a===b===5 || a===b===5.5){
        console.log("tieee")
        setTimeout(function(){
            outcome.style.transform="scale(1)"
        },100)
        
        setTimeout(function(){
            reset()
        },1000)
    }
    else if(b>=5 && a<5){
        console.log("losing hogyi")
        outcome.style.transform="scale(4)";
        setTimeout(function(){
            outcome.style.transform="scale(1)"
        },1000) 
        setTimeout(function(){
            reset()
        },1000)
       }
}

function reset(){
  
    your.innerText="";
    comp.innerText="";
    score.innerText="0";
    scorec.innerText="0";
    outcome.innerText="";
    scorep=0;
scorez=0;

}

function su(){
    let x=outcome.innerText;
    if(x==="You Win!!"){
        scorep++;
        score.innerText=scorep;
       
    }else if(x==="You Lose!"){
        scorez++;
        scorec.innerText=scorez;
        

    }else {
        scorep+=0.5;
        score.innerText=scorep;
        scorez+=0.5;
        scorec.innerText=scorez;
    }
}





rock.addEventListener('click', function() {
    if(scorep<5 && scorez<5){
    yc("Rock")
    result()
    su()
    declare()}
});
paper.addEventListener('click',function() {
    if(scorep<5 && scorez<5){
    yc("Paper")
    result()
    su()
    declare()}
});
sci.addEventListener('click',function() {
    if(scorep<5 && scorez<5){
    yc("Scissors")
    result()
    su()
    declare()
    }
});
