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
    console.log(a)
    console.log(b)
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


function su(){
    let x=outcome.innerText;
    if(x==="You Win!!"){
        scorep++;
        score.innerText=scorep;
       
    }else if(x==="You Lose!"){
        scorez++;
        scorec.innerText=scorez;
        

    }
}





rock.addEventListener('click', function() {
    yc("Rock")
    result()
    su()
});
paper.addEventListener('click',function() {
    yc("Paper")
    result()
    su()
});
sci.addEventListener('click',function() {
    yc("Scissors")
    result()
    su()
});
