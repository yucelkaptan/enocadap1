// DARK MODE TUŞU //


const rightarea = document.getElementById("right-area"); 
const calculator = document.getElementById("calculator"); 
const resultare = document.getElementById("result-are"); 
const proccess = document.getElementById("proccess");
const clockCuc = document.getElementById("clockCuc");
const firstRow = document.getElementById("first-row");
const bottomArea = document.getElementById("bottom-area");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num10 = document.getElementById("num10");
const num11 = document.getElementById("num11");
const num12 = document.getElementById("num12");

const moonButton = document.getElementById("moonButton");
const sunButton = document.getElementById("sunButton");



// DARK MODE FONKSİYONU //
moonButton.addEventListener("click", function() {
    sunButton.classList.toggle(".sunBtnDark");
    moonButton.classList.toggle("moonBtnDark");

    rightarea.classList.toggle("right-areaDark");
    calculator.classList.toggle("calculatorDarKmode"); 
    resultare.classList.toggle("result-areDark");
    proccess.classList.toggle("processDark");
    clockCuc.classList.toggle("clockCucWhite"); 
    firstRow.classList.toggle("first-rowDark");
    bottomArea.classList.toggle("bottomAreaDark");
    num1.classList.toggle("numberBoxDark");
    num2.classList.toggle("numberBoxDark");
    num3.classList.toggle("numberBoxDark");
    num4.classList.toggle("numberBoxDark");
    num5.classList.toggle("numberBoxDark");
    num6.classList.toggle("numberBoxDark");
    num7.classList.toggle("numberBoxDark");
    num8.classList.toggle("numberBoxDark");
    num9.classList.toggle("numberBoxDark");
    num10.classList.toggle("numberBoxDark");
    num11.classList.toggle("numberBoxDark");
    num12.classList.toggle("numberBoxDark");

});

// LİGHT MODE FONKSİYON //
sunButton.addEventListener("click", function() {
    sunButton.classList.toggle(".sunBtnLight");
    moonButton.classList.toggle("moonBtnLight");
    rightarea.classList.toggle("right-areaLight");
    calculator.classList.toggle("calculatorLightMode"); 
    resultare.classList.toggle("result-areLight");
    proccess.classList.toggle("processLight");
    clockCuc.classList.toggle("clockCucBlack"); 
    firstRow.classList.toggle("first-rowLight");
    bottomArea.classList.toggle("bottomAreaLight");
    num1.classList.toggle("numberBoxLight");
    num2.classList.toggle("numberBoxLight");
    num3.classList.toggle("numberBoxLight");
    num4.classList.toggle("numberBoxLight");
    num5.classList.toggle("numberBoxLight");
    num6.classList.toggle("numberBoxLight");
    num7.classList.toggle("numberBoxLight");
    num8.classList.toggle("numberBoxLight");
    num9.classList.toggle("numberBoxLight");
    num10.classList.toggle("numberBoxLight");
    num11.classList.toggle("numberBoxLight");
    num12.classList.toggle("numberBoxLight");
});

