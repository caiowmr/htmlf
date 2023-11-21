document.querySelectorAll("nav ul a").forEach(link => {
	link.addEventListener("click", evento =>{
		evento.preventDefault();
		const href = link.getAttribute("href");
		const alvo = document.querySelector(href);

		if(alvo){
			alvo.scrollIntoView({
				behavior: "smooth"
			});
		}
	});
});

const menu = document.getElementById("menu");
const limite = 100;

window.addEventListener("scroll", () =>{
	if(window.scrollY > limite){
		menu.classList.add("shrink");
	}else{
		menu.classList.remove("shrink");
	}
});


const modal = document.querySelector("dialog");
const abrir = document.querySelector("#info");
const fechar = document.querySelector("#fechar");
var evento;
	abrir.onclick = function (evento){
		evento.preventDefault();
		modal.showModal();
	}

	fechar.onclick = function(evento){
		evento.preventDefault();
		modal.close();
	}

	modal.addEventListener("click", evento =>{
		if(evento.target === modal){
			modal.close();
		}
	});

	const modal2 = document.querySelector("#problemas");
	const abrir2 = document.querySelector("#info2");
	const fechar2 = document.querySelector("#fechar2");
	var evento;
		abrir2.onclick = function (evento){
			evento.preventDefault();
			modal2.showModal();
		}
	
		fechar2.onclick = function(evento){
			evento.preventDefault();
			modal2.close();
		}
	
		modal2.addEventListener("click", evento =>{
			if(evento.target === modal2){
				modal2.close();
			}
		});