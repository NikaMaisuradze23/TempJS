let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let select = document.getElementById("myselect")

let temp = document.getElementById("inputGroup-sizing-default")

let resSpan = document.getElementById("result-Span")
let buttonRes = document.getElementById("convert")
let tempRes = document.getElementById("result-P")

let inputVal = document.getElementById("temperature-input")

let toInt = 0;


buttonRes.addEventListener("click", function(){
    var selectedValue = select.options[select.selectedIndex].value;
        toInt = parseInt(inputVal.value)
        if(selectedValue == "1") {
            temp.innerHTML = "Celsius to Fahrenheit";
            tempRes.innerHTML = "Celsius to Fahrenheit: " + (toInt * 9/5 + 32);

        } else {
            temp.innerHTML = "Fahrenheit To Celsius";
            tempRes.innerHTML = "Fahrenheit To Celsius: " + (toInt - 32) * 5 / 9;
        }

})