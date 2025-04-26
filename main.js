const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const botoes2 = document.querySelectorAll(".botao2");
const textos2 = document.querySelectorAll(".aba-conteudo2");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    
}
for(let i=0;i <botoes2.length;i++){
    botoes2[i].onclick = function(){

        for(let j=0;j<botoes2.length;j++){
            botoes2[j].classList.remove("ativo2");
            textos2[j].classList.remove("ativo2");
        }

        botoes2[i].classList.add("ativo2");
        textos2[i].classList.add("ativo2");
    }
    
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-16T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}