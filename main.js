let number = document.querySelector('.number');
let name = document.querySelector('.name');
let expiration = document.querySelector('.expiration');
let cvv = document.querySelector('.cvv');
let errorNumber = document.querySelector('.err-number');
let errorName = document.querySelector('.err-name');
number.addEventListener("change", function(){
    if (number.value.search(/[^0-9]+/) === -1 ){
        errorNumber.innerHTML = "";
    }
    else{
        errorNumber.innerHTML = "Card number is error";
    }
});

name.addEventListener("change", function(){
    if(name.value.search(/[^a-zA-Z]+/) === -1){
        errorName.innerHTML = "";
    }
    else{
        errorName.innerHTML = "Card holder is error"
    }
})