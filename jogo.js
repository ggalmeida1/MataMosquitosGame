var altura = 0
var largura =0
var vidas = 1
var tempo = 15


var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil') {
    
    criaMosquitoTempo = 1800
}else if (nivel === 'medio'){
    criaMosquitoTempo = 1300
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 900
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    
    console.log(largura,altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1 
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else {
        
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000)




function posicaoRandomica() {
    //remover o mosquito anterior (caso existe)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else{
            document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"
            
            vidas ++ 
        }
    }
    //utilizar o medoto Math.random para gerar as posicoes aleatorias
    //utilizar o Math.floor para arredondar os valores das posicoes aleatorias
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    //validação se as posicoes são negativas (ficam fora da tela)
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX,posicaoY)
    
    //criar o elemento html atraves do DOM
    
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito)
    
    tamanhoAleatorio()
}


function tamanhoAleatorio () {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
        return 'mosquito1'
        case 1:
        return 'mosquito2'    
        case 2:
        return 'mosquito3'
    }
}


function ladoAleatorio () {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
        return 'ladoA'
        case 1:
        return 'ladoB'    
    }
}

