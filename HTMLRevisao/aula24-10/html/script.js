var var1 = 10;
let let1 = 5;
const const1 = 15;

//var1 += let1;
//var1 = var1.toString();
//const1 = Number(const1);

document.getElementById('js').innerText = "ola mundo \n";
document.getElementById('js').innerText += "Var = " + var1 + " Let: " + let1 + " Const: " + const1  + "\n";
document.getElementById('js').innerText += "Tipos Var = " + typeof(var1) + " Let: " + typeof(let1) + " Const: " + typeof(const1)  + "\n";

const js = document.getElementById('js');

js.innerHTML += '<hr>';

//operadores relacionais

js.innerHTML += "var1 comparada com conts1: " +
"<br><br> var1 === const1 = " + (var1 === const1) +
"<br> var1 == const1 = " + (var1 == const1) + 
"<br> var1 != const1 = " + (var1 != const1) + 
"<br> var1 < const1 = " + (var1 < const1) + 
"<br> var1 > const1 = " + (var1 > const1) + 
"<br> var1 <= const1 = " + (var1 <= const1) + 
"<br> var1 >= const1 = " + (var1 >= const1);

js.innerHTML += "<hr>";

//operadores logicos

js.innerHTML += 
"<br> var1 == const1 E var1 == let1 = " + (var1 == const1 && var1 == let1) +
"<br> var1 == const1 OU var1 == let1 = " + (var1 == const1 || var1 == let1);

//Estrutura de decisao

js.innerHTML += "<hr>";

if(var1++ == const1){
    js.innerHTML += "<h1>é igual<h1>"
}else{
    js.innerHTML += "<h1><b>Nao</b> é igual</h1>"
};

//operador ternario
js.innerHTML += (var1 == const1)? "<h1>é igual<h1>" :  "<h1><b>Nao</b> é igual</h1>";

const semana = ["seg", "ter", "qua", "qui", "sex"];

switch(semana[3]){
    case "seg":
        js.innerHTML += "<h3>Segunda</h3>"
    case "ter":
            js.innerHTML += "<h3>Terça</h3>"
    case "qua":
            js.innerHTML += "<h3>Quarta</h3>"
    case "qui":
        js.innerHTML += "<h3>Quinta</h3>"            
    case "sex":
        js.innerHTML += "<h3>Sexta</h3>"            
};


