let word_array = ['beautiful','country','road','august'];
let choice_word = word_array[Math.floor(Math.random()*4)];
let l = 0;
while(l<choice_word.length){
    let letter = document.getElementById(`${l+1}`);
    letter.innerHTML = choice_word[l].toUpperCase();
    l+=1;
}

let derived1 = document.getElementById("row1a");
let derived2 = document.getElementById("row1b");
let derived3 = document.getElementById("row1c");
let derived4 = document.getElementById("row1d");
let derived5 = document.getElementById("row1e");
let derived6 = document.getElementById("row1f");
let derived7 = document.getElementById("row1g");
let derived8 = document.getElementById("row1h");


function pickLetter1(){
    let letter1 = document.getElementById("1");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter1.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter1.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter1.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter1.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter1.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter1.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter1.innerHTML;
    }
    else {
        derived8.innerHTML = letter1.innerHTML;
    }
}

function pickLetter2(){
    let letter2 = document.getElementById("2");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter2.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter2.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter2.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter2.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter2.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter2.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter2.innerHTML;
    }
    else {
        derived8.innerHTML = letter2.innerHTML;
    }
}

function pickLetter3(){
    let letter3 = document.getElementById("3");

    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter3.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter3.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter3.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter3.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter3.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter3.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter3.innerHTML;
    }
    else {
        derived8.innerHTML = letter3.innerHTML;
    }
}

function pickLetter4(){
    let letter4 = document.getElementById("4");

    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter4.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter4.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter4.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter4.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter4.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter4.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter4.innerHTML;
    }
    else {
        derived8.innerHTML = letter4.innerHTML;
    }
}

function pickLetter5(){
    let letter5 = document.getElementById("5");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter5.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter5.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter5.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter5.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter5.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter5.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter5.innerHTML;
    }
    else {
        derived8.innerHTML = letter5.innerHTML;
    }
}

function pickLetter6(){
    let letter6 = document.getElementById("6");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter6.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter6.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter6.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter6.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter6.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter6.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter6.innerHTML;
    }
    else {
        derived8.innerHTML = letter6.innerHTML;
    }
}

function pickLetter7(){
    let letter7 = document.getElementById("7");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter7.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter7.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter7.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter7.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter7.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter7.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter7.innerHTML;
    }
    else {
        derived8.innerHTML = letter7.innerHTML;
    }
}

function pickLetter8(){
    let letter8 = document.getElementById("8");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter8.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter8.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter8.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter8.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter8.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter8.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter8.innerHTML;
    }
    else {
        derived8.innerHTML = letter8.innerHTML;
    }
}

function pickLetter9(){
    let letter9 = document.getElementById("9");
    
    if (derived1.innerHTML.toString() == ""){
        derived1.innerHTML = letter9.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() == ""){
        derived2.innerHTML = letter9.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() == "" ){
        derived3.innerHTML = letter9.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() == ""){
        derived4.innerHTML = letter9.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() == ""){
        derived5.innerHTML = letter9.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() == ""){
        derived6.innerHTML = letter9.innerHTML;
    }
    else if (derived1.innerHTML.toString() != "" && derived2.innerHTML.toString() != "" && derived3.innerHTML.toString() != "" && derived4.innerHTML.toString() != "" && derived5.innerHTML.toString() != "" && derived6.innerHTML.toString() != "" && derived7.innerHTML.toString() == ""){
        derived7.innerHTML = letter9.innerHTML;
    }
    else {
        derived8.innerHTML = letter9.innerHTML;
    }
}

function clearButton(){
    derived1.innerHTML = "";
    derived2.innerHTML = "";
    derived3.innerHTML = "";
    derived4.innerHTML = "";
    derived5.innerHTML = "";
    derived6.innerHTML = "";
    derived7.innerHTML = "";
    derived8.innerHTML = "";

}
function submitButton(){
    derived1 = document.getElementById("row2a");
    derived2 = document.getElementById("row2b");
    derived3 = document.getElementById("row2c");
    derived4 = document.getElementById("row2d");
    derived5 = document.getElementById("row2e");
    derived6 = document.getElementById("row2f");
    derived7 = document.getElementById("row2g");
    derived8 = document.getElementById("row2h");
    
    submitElement.removeEventListener("click", submitButton);
}
function submitButton2(){
    derived1 = document.getElementById("row3a");
    derived2 = document.getElementById("row3b");
    derived3 = document.getElementById("row3c");
    derived4 = document.getElementById("row3d");
    derived5 = document.getElementById("row3e");
    derived6 = document.getElementById("row3f");
    derived7 = document.getElementById("row3g");
    derived8 = document.getElementById("row3h");

    submitElement.removeEventListener("click", submitButton2);
}
function submitButton3(){
    derived1 = document.getElementById("row4a");
    derived2 = document.getElementById("row4b");
    derived3 = document.getElementById("row4c");
    derived4 = document.getElementById("row4d");
    derived5 = document.getElementById("row4e");
    derived6 = document.getElementById("row4f");
    derived7 = document.getElementById("row4g");
    derived8 = document.getElementById("row4h");

    submitElement.removeEventListener("click", submitButton3);
}
var submitElement = document.getElementById("submit");
submitElement.addEventListener("click", submitButton);
//submitElement.addEventListener("click", submitButton2);
//submitElement.addEventListener("click", submitButton3);