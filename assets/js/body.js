window.onload= function(){
    repeat = document.getElementById('repeat');
    word = document.getElementById('word');
    btn = document.getElementById('btn').addEventListener('click', btnClick);
    container = document.getElementById('container');
};
var repeat;
var n;
var word;
var btn;
var i;
var container;
 
function btnClick(){
    n = repeat.value;
    for(i = 0; i < n; i++){
        let p = document.createElement('p');
        p.setAttribute('id', 'parrafo'+i);
        p.setAttribute('class', 'parrafo');
        p.innerText = word.value;
        container.appendChild(p);
    }
}

function btnclick1() {
    var Kelvin = parseFloat(document.getElementById('Kelvin').value);
    var Celsius = parseFloat(document.getElementById('Celsius').value);


    var KelACel = (Kelvin - 273.15);
    var CelAKel = (Celsius + 273.15);

    document.getElementById('KelACel').value= KelACel;
    document.getElementById('CelAKel').value= CelAKel;
}

function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' Letras';
}
