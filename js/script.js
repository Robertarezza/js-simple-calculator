let numeri = document.querySelectorAll(".my_number");
//console.log(numeri);

let reset = document.querySelector(".canc");
//console.log(reset);

let display = document.getElementById("result");
//console.log(display);

let operatore = document.querySelectorAll(".oper");
//console.log(operatore);

let userUguale = document.querySelector(".uguale");
//console.log(userUguale);





let resultNumber1 = "";

for (let i = 0; i < numeri.length; i++) {
    //console.log(numeri[i].innerHTML);

    numeri[i].addEventListener("click", function () {
        //console.log("this");
        //console.log(this);
        //let valoreNumero = this.innerHTML;
        //console.log(valoreNumero);

        display.innerHTML += this.innerHTML;

    })
}


let operazione;
for (let m = 0; m < operatore.length; m++) {

    operatore[m].addEventListener("click", function () {


        operazione = this.innerHTML;
        //console.log(operazione);
        resultNumber1 = "";


        resultNumber1 += parseInt(display.innerHTML);
        display.innerHTML = "";


    })
}


let resultNumber2;

userUguale.addEventListener("click", function () {
    resultNumber2 = display.textContent;
    //console.log(resultNumber1, operazione, resultNumber2);

    switch (operazione) {
        case '+':
            result = parseInt(resultNumber1) + parseInt(resultNumber2);
            break;
        case '-':
            result = parseInt(resultNumber1) - parseInt(resultNumber2);
            break;
        case '*':
            result = parseInt(resultNumber1) * parseInt(resultNumber2);
            break;
        case '/':
            result = parseInt(resultNumber1) / parseInt(resultNumber2)
            break;
        default:
            result = 0;
            break;

    }
    display.textContent = result;
    //console.log(display);
})



reset.addEventListener("click", function () {
    operazione = "";
    resultNumber1 = "";
    display.innerText = "";
})
