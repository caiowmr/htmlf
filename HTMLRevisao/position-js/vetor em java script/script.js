const out = document.getElementById('saida');

var frutas = ["Maça", "Banana", "Pera", "Abacate", "Jabuticaba"];

out.innerHTML += "<br>";
out.innerHTML += "<br>";

//for padrao
for(i=0; i < frutas.length; i++){
    out.innerText += "\nKey = " + i + " | fruta = " + frutas[i];
}

out.innerHTML += "<br>";

for( i in frutas){
    out.innerText += "\nFruta = " + frutas[i] + "   id = " + i;
}

out.innerHTML += "<br>";

for(fruta of frutas){
    out.innerText += "\nFruta = " + fruta;
}

out.innerHTML += "<br>";
out.innerHTML += "<br>";

//(primeiro item valor, segundo item chave)
frutas.forEach((fruta, chave) => {
    out.innerText += "\nFrutas: " + fruta + " Key: " + chave;
});


out.innerHTML += "<br>";
out.innerHTML += "<br>";

//Adiciona ao final da fila
frutas.push("Prego");
out.innerText += "Adicionado em Frutas: " + frutas;

out.innerHTML += "<br>";

//Remove o ultimo item do vetor
frutas.pop();
out.innerText += "Removido o ultimo item em frutas: " + frutas;

out.innerHTML += "<br>";

frutas.unshift("Macarrao");
out.innerText += "Adicionado no inicio do vetor Frutas: " + frutas;

out.innerHTML += "<br>";

frutas.shift();
out.innerText += "Removido o primeiro item do vetor: " + frutas

out.innerHTML += "<br>";

var novaFrutas = frutas.slice(1, 3);
out.innerText += "\n\n Novo vetror: " + novaFrutas;

out.innerHTML += "<br>";

frutas.splice(1, 1);
out.innerText += "Removido elementos de frutas: " + frutas;

out.innerHTML += "<br>";

frutas.splice(1, 1, "Pitanga");
out.innerText += "Removido e adicionado na posição de efrutas: " + frutas;

out.innerHTML += "<br>";

var index = frutas.indexOf("Jabuticaba");
out.innerText += "Index de Jabuticaba:  " + index; 