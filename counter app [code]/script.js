
let countDownElemnt=document.querySelector('#number');

function decrement(){
    let number=parseInt(countDownElemnt.textContent);
    number-=1;
    countDownElemnt.textContent=number;
}

// method:2 //can also use eventListener
// let decrementButton=document.querySelector("#btn-1");
// decrementButton.addEventListener('click',function(){
//     let number=parseInt(countDownElemnt.textContent);
//     number-=1;
//     countDownElemnt.textContent=number;
// })

function increment(){
    let number=parseInt(countDownElemnt.textContent);
    number+=1;
    countDownElemnt.textContent=number;
}
