let bill = document.getElementById("bill");
let fivepercent = document.getElementById("fivepercent");
let tenpercent = document.getElementById("tenpercent");
let fifteenpercent = document.getElementById("fifteenpercent");
let twentyfivepercent = document.getElementById("twentyfivepercent");
let halfpercent = document.getElementById("halfpercent");

let numberofpeople = document.getElementById("numberofpeople");
let tipamount = document.getElementById("tipamount");
let total = document.getElementById("total");

let resetbutton = document.getElementById("resetbutton");


bill.addEventListener("keyup", adding1);

function adding1() {
    total.innerHTML = bill.value;
    

}

fivepercent.addEventListener("click", fiveperc);


function fiveperc() {
        let tips = Number(bill.value) * parseInt(fivepercent.innerText) / 100;
        tipamount.innerText = tips;
        total.innerText = Number(total.innerText) + tips;
        fivepercent.classList.add("clicked");
        tenpercent.classList.remove("clicked");
        fifteenpercent.classList.remove("clicked");
        twentyfivepercent.classList.remove("clicked");
        halfpercent.classList.remove("clicked");
}
        
        

tenpercent.addEventListener("click", tenperc);


function tenperc() {
    let tips = Number(bill.value) * parseInt(tenpercent.innerText) / 100;
    tipamount.innerText = tips;
    total.innerText = Number(total.innerText) + tips;
    fivepercent.classList.remove("clicked");
    tenpercent.classList.add("clicked");
    fifteenpercent.classList.remove("clicked");
    twentyfivepercent.classList.remove("clicked");
    halfpercent.classList.remove("clicked");
        
        
}

fifteenpercent.addEventListener("click", fifteenper);

function fifteenper() {
        let tips = Number(bill.value) * parseInt(fifteenpercent.innerText) / 100;
        tipamount.innerText = tips;
        total.innerText = Number(total.innerText) + tips;
        fivepercent.classList.remove("clicked");
        tenpercent.classList.remove("clicked");
        fifteenpercent.classList.add("clicked");
        twentyfivepercent.classList.remove("clicked");
        halfpercent.classList.remove("clicked");
}
        
        

twentyfivepercent.addEventListener("click", twentyfiveper);

function twentyfiveper() {
    let tips = Number(bill.value) * parseInt(twentyfivepercent.innerText) / 100;
    tipamount.innerText = tips;
    total.innerText = Number(total.innerText) + tips; 
    fivepercent.classList.remove("clicked");
    tenpercent.classList.remove("clicked");
    fifteenpercent.classList.remove("clicked");
    twentyfivepercent.classList.add("clicked");
    halfpercent.classList.remove("clicked");
}

halfpercent.addEventListener("click", halfperc);

function halfperc() {
    let tips = Number(bill.value) * parseInt(halfpercent.innerText) / 100;
    tipamount.innerText = tips;
    total.innerText = Number(total.innerText) + tips;
    fivepercent.classList.remove("clicked");
    tenpercent.classList.remove("clicked");
    fifteenpercent.classList.remove("clicked");
    twentyfivepercent.classList.remove("clicked");
    halfpercent.classList.add("clicked"); 
}

numberofpeople.addEventListener("keyup", numberof);

 
function numberof() {
    
    if(numberofpeople.value != 0 && numberofpeople.value != "") {
    total.innerHTML = Number(total.innerHTML) / Number(numberofpeople.value);
    let a = parseFloat(total.innerHTML).toFixed(2);
    total.innerHTML = a
    

     }
}    
