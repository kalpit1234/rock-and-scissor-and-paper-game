let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
let showwiner=(userwin,userchoice,comp)=>{
    if(userwin){
        console.log("you win!");
        msg.style.backgroundColor="green";
        msg.innerText=`you win ${userchoice} beats ${comp}`;
    }
    else{
        console.log("you loose!");
        msg.style.backgroundColor="red";
        msg.innerText="you lose the game"
}
}
let draw=()=>{
    console.log("It is draw!");
    msg.style.backgroundColor="#081b31";
    msg.innerText="game is drawn"
}
let compchoice=()=>{
    let options=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return options[random];
}
let playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    let comp=compchoice();
    console.log("comp-choice=",comp);
    if(userchoice===comp){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=comp==="paper"?false:true
        }
        else if(userchoice==="paper"){
            userwin=comp==="rock"?true:false
        }
        else{
            userwin=comp==="paper"?true:false
        }
        showwiner(userwin,userchoice,comp)
}
}
choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
