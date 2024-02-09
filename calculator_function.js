function func_one() {
   document.getElementsByClassName('vvod')[0].value += 1;
}

function func_two() {
   document.getElementsByClassName('vvod')[0].value += 2;
}

function func_three() {
   document.getElementsByClassName('vvod')[0].value += 3;
}

function func_four() {
   document.getElementsByClassName('vvod')[0].value += 4;
}

function func_five() {
   document.getElementsByClassName('vvod')[0].value += 5;
}

function func_sixth() {
   document.getElementsByClassName('vvod')[0].value += 6;
}

function func_seven() {
   document.getElementsByClassName('vvod')[0].value += 7;
}

function func_eight() {
   document.getElementsByClassName('vvod')[0].value += 8;
}

function func_nine() {
   document.getElementsByClassName('vvod')[0].value += 9;
}

function func_zero() {
   document.getElementsByClassName('vvod')[0].value += 0;
}

function func_minus() {
   document.getElementsByClassName('vvod')[0].value += "-";
}

function func_plus() {
   document.getElementsByClassName('vvod')[0].value += "+";
}

function func_delenie() {
   document.getElementsByClassName('vvod')[0].value += "/";``
}

function func_tochka() {
   document.getElementsByClassName('vvod')[0].value += ".";
}

function func_umn() {
   document.getElementsByClassName('vvod')[0].value += "*";
}

function func_clear(){
      document.querySelector('.vvod').value = "";
}

function func_rovno(){
    let result = eval(document.getElementsByClassName('vvod')[0].value);
    document.querySelector('.vvod').value = result;
}
