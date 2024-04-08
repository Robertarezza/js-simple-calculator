let numeri = document.querySelectorAll(".my_number");
console.log(numeri);

const tastiera = document.querySelector(".numbers")

let result = document.getElementById("result");
console.log(result);

let operatore = document.querySelectorAll(".oper");
console.log(operatore);

    
let resultNumber = "";

for (let i = 0; i < numeri.length; i++) {
    //console.log(numeri[i].innerHTML);
    
    numeri[i].addEventListener("click", function () {
        //console.log("this");
         //console.log(this);
        let valoreNumero = this.innerHTML;
        console.log(valoreNumero);

        resultNumber += valoreNumero;
        result.innerHTML = resultNumber;

    })

    let operazione;

for (let m = 0; m < operatore.length; m++){
    
    operatore[m].addEventListener("click", function () {
    
        //let valOper = this.innerHTML;
        //console.log(valOper);

        operazione = "";
        result.innerHTML = operazione
})
}


}

