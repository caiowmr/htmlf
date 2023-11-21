var var1 = 15;
let let1  = 4;
const const1 = 19;

//var1 += let1;
//var1 = var1.toString;

document.getElementById('js').innerText += "ola mundo \n";
document.getElementById('js').innerText += "Var = " + var1 + " Let: " + let1 + " Const: " + const1  + "\n";
document.getElementById('js').innerText += "Tipos Var = " + typeof(var1) + " Let: " + typeof(let1) + " Const: " + typeof(const1)  + "\n";

const js = document.getElementById('js');


js.innerHTML += "<hr>";

js.innerHTML += "**operadores relacionais**"+
"<br><br> var1 === const1 = " + (var1 === const1) +
"<br> var1 == const1 = " + (var1 == const1) +
"<br> var1 <= const1 = " + (var1 <= const1) +
"<br> var1 != const1 = " + (var1 != const1) +
"<br> var1 >=  const1 = " + (var1 >= const1) +
"<br> var1 < const1 = " + (var1 < const1) +
"<br> var1 > const1 = " + (var1 > const1);



js.innerHTML += "**Operadores lgicos**" +
"<br> var1 == const1 E var1 == let1 = " + (var1 == const1 && var1 == let1) +
"<br> var1 == const1 OU var1 == let1 = " + (var1 == const1 || var1 == let1);

js.innerHTML += "<hr>";

js.innerText += "\nOperadores relacionais\n"

if(var1 == const1){
    js.innerHTML += "<h1>é igual<h1>"
}else{
    js.innerHTML += "<h1><b>Nao</b> é igual</h1>"
};



js.innerHTML += (var1 == const1)? "<h1>é igual<h1>" : "<h1><b>Nao</b> é igual</h1>";

const week = ["seg", "ter", "qua", "qui", "sex"];

switch(week[1]){
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
}
