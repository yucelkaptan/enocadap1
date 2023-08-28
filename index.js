const darkModeToggle = document.getElementById(`moonButton`);
const lightModeToggle = document.getElementById(`sunButton`);
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

darkModeToggle.addEventListener("click", () => {
    rightarea.classList.add(`right-areaDark`)
    calculator.classList.add("calculatorDarKmode"); 
    resultare.classList.add("result-areDark");
    proccess.classList.add("processDark");
    clockCuc.classList.add("clockCucWhite"); 
    firstRow.classList.add("first-rowDark");
    bottomArea.classList.add("bottomAreaDark");
    num1.classList.add("numberBoxDark");
    num2.classList.add("numberBoxDark");
    num3.classList.add("numberBoxDark");
    num4.classList.add("numberBoxDark");
    num5.classList.add("numberBoxDark");
    num6.classList.add("numberBoxDark");
    num7.classList.add("numberBoxDark");
    num8.classList.add("numberBoxDark");
    num9.classList.add("numberBoxDark");
    num10.classList.add("numberBoxDark");
    num11.classList.add("numberBoxDark");
    num12.classList.add("numberBoxDark");

    rightarea.classList.remove("right-areaLight");
    calculator.classList.remove("calculatorLightMode"); 
    resultare.classList.remove("result-areLight");
    proccess.classList.remove("processLight");
    clockCuc.classList.remove("clockCucBlack"); 
    firstRow.classList.remove("first-rowLight");
    bottomArea.classList.remove("bottomAreaLight");
    num1.classList.remove("numberBoxLight");
    num2.classList.remove("numberBoxLight");
    num3.classList.remove("numberBoxLight");
    num4.classList.remove("numberBoxLight");
    num5.classList.remove("numberBoxLight");
    num6.classList.remove("numberBoxLight");
    num7.classList.remove("numberBoxLight");
    num8.classList.remove("numberBoxLight");
    num9.classList.remove("numberBoxLight");
    num10.classList.remove("numberBoxLight");
    num11.classList.remove("numberBoxLight");
    num12.classList.remove("numberBoxLight");
});

lightModeToggle.addEventListener("click" , () => {
    rightarea.classList.add("right-areaLight");
    calculator.classList.add("calculatorLightMode"); 
    resultare.classList.add("result-areLight");
    proccess.classList.add("processLight");
    clockCuc.classList.add("clockCucBlack"); 
    firstRow.classList.add("first-rowLight");
    bottomArea.classList.add("bottomAreaLight");
    num1.classList.add("numberBoxLight");
    num2.classList.add("numberBoxLight");
    num3.classList.add("numberBoxLight");
    num4.classList.add("numberBoxLight");
    num5.classList.add("numberBoxLight");
    num6.classList.add("numberBoxLight");
    num7.classList.add("numberBoxLight");
    num8.classList.add("numberBoxLight");
    num9.classList.add("numberBoxLight");
    num10.classList.add("numberBoxLight");
    num11.classList.add("numberBoxLight");
    num12.classList.add("numberBoxLight");

    rightarea.classList.remove(`right-areaDark`)
    calculator.classList.remove("calculatorDarKmode"); 
    resultare.classList.remove("result-areDark");
    proccess.classList.remove("processDark");
    clockCuc.classList.remove("clockCucWhite"); 
    firstRow.classList.remove("first-rowDark");
    bottomArea.classList.remove("bottomAreaDark");
    num1.classList.remove("numberBoxDark");
    num2.classList.remove("numberBoxDark");
    num3.classList.remove("numberBoxDark");
    num4.classList.remove("numberBoxDark");
    num5.classList.remove("numberBoxDark");
    num6.classList.remove("numberBoxDark");
    num7.classList.remove("numberBoxDark");
    num8.classList.remove("numberBoxDark");
    num9.classList.remove("numberBoxDark");
    num10.classList.remove("numberBoxDark");
    num11.classList.remove("numberBoxDark");
    num12.classList.remove("numberBoxDark");
})

