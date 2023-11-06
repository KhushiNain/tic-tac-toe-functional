let boxs= document.querySelectorAll(".box")

for(let i=0;i<boxs.length;i++){
    boxs[i].addEventListener("click", handleClick)
}
let arr=[0,0,0,0,0,0,0,0,0];
let click=0;

function handleClick(event){
    let currentbox=event.target;
    let id=currentbox.id;


    if (click%2==0){
        currentbox.innerHTML="X";
        arr[id-1]="X"
        }
    else{
        currentbox.innerHTML="O";
        arr[id-1]="O"
    }  
    click++;
    // flag=!flag; 
    checkResult();
}

function checkResult(){
    let res1=arr[0]+arr[1]+arr[2];
    let res2=arr[3]+arr[4]+arr[5];
    let res3=arr[6]+arr[7]+arr[8];
    let res4=arr[0]+arr[3]+arr[6];
    let res5=arr[1]+arr[4]+arr[7];
    let res6=arr[2]+arr[5]+arr[8];
    let res7=arr[0]+arr[4]+arr[8];
    let res8=arr[6]+arr[4]+arr[2];

    let Message=document.getElementById("message");
    let resultElement=document.getElementById("result");

    if(res1=="XXX" || res2=="XXX"  || res3=="XXX" || res4=="XXX" || res5=="XXX" || res6=="XXX" 
    || res7=="XXX" || res8=="XXX" 
    ){
        Message.innerHTML="X has won the game";
        resultElement.style.visibility="visible";
    }
    else if(res1=="OOO"|| res2=="OOO"|| res3=="OOO" || res4=="OOO" || res5=="OOO" 
      || res6=="OOO" || res7=="OOO" || res8=="OOO"
       ){
        Message.innerHTML="O has won the game";
        resultElement.style.visibility="visible";
    }
    else if(click==9){
        Message.innerHTML="Tie";
        resultElement.style.visibility="visible";

    }

}

let playAgainBtn=document.getElementById("button");

playAgainBtn.addEventListener("click",function(){
    window.location="index.html";
})