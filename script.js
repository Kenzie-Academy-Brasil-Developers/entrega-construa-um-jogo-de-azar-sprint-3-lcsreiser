let pedra = document.querySelector(".pedra")

pedra.addEventListener("click", identificarPedra)

function identificarPedra(){
    if(maquina() == 1){
        console.log("Empatou")
        result("Empatou","Computador Jogou Pedra")
    }else if(maquina() == 2){
        console.log("Computador Ganhou")
        result("Computador Ganhou","Computador Jogou Papel")
    }else{
        console.log("Você Ganhou")
        result("Você Ganhou","Computador Jogou Tesoura")
    }
}

let papel = document.querySelector(".papel")

papel.addEventListener("click", identificarPapel)

function identificarPapel(){
    if(maquina() == 1){
        console.log("Você Ganhou")
        result("Você Ganhou","Computador Jogou Pedra")
    }else if(maquina() == 2){
        console.log("Empatou")
        result("Empatou","Computador Jogou Papel")
    }else{
        console.log("Computador Ganhou")
        result("Computador Ganhou","Computador Jogou Tesoura")
    }

}

let tesoura = document.querySelector(".tesoura")

tesoura.addEventListener("click", identificarTesoura)

function identificarTesoura(){
    if(maquina() == 1){
        console.log("Computador Ganhou")
        result("Computador Ganhou","Computador Jogou Pedra")
    }else if(maquina() == 2){
        console.log("Você Ganhou")
        result("Você Ganhou","Computador Jogou Papel")
    }else{
        console.log("Empatou")
        result("Empatou","Computador Jogou Tesoura")
    }
   
}

function maquina(){
    let ppt
    ppt = Math.floor(Math.random() * 3)+1

    return ppt
}
//////////////////////////////
function result(resultado,detalhes){
    const exibirBloco = document.querySelector("#gameResult")
    exibirBloco.style.display = "inline-block"
    let exibirResultado = document.querySelector(".resultado")
    let descricao = document.querySelector(".descricao")

    descricao.innerText = detalhes
    exibirResultado.innerText = resultado

    return
}