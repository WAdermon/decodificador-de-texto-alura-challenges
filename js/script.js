function criptografar(){
    var output = document.querySelector("#texto-resultado");

    document.getElementById("pesquisando").style.display = "none"; 
    document.getElementById("resultado").style.display = "inline-block";

    //Pega valor de um textarea
    var input = document.querySelector("#texto-principal");
    var mensagem = input.value;
    var novaMensagem = "";

    var listaCaractere = mensagem.split("");

    
    for(var i = 0; i < listaCaractere.length; i++){
        if(listaCaractere[i] == "a") {
            listaCaractere[i] = "ai";
        }

        else if(listaCaractere[i] == "e") {
            listaCaractere[i] = "enter";
        }

        else if(listaCaractere[i] == "i") {
            listaCaractere[i] = "imes";
        }

        else if(listaCaractere[i] == "o") {
            listaCaractere[i] = "ober";
        }

        else if(listaCaractere[i] == "u") {
            listaCaractere[i] ="ufat";
        }

        novaMensagem = novaMensagem + listaCaractere[i];

    }
output.value = novaMensagem;
}

function descriptografar() {
var output = document.querySelector("#texto-resultado");

document.getElementById("pesquisando").style.display = "none";
document.getElementById("resultado").style.display = "inline-block";

//pega texto do input

var input = document.querySelector("#texto-principal");
var mensagem = input.value;

//decodificando a mensagem
mensagem = mensagem.replaceAll("ai", "a");
mensagem = mensagem.replaceAll("enter", "e");
mensagem = mensagem.replaceAll("imes", "i");
mensagem = mensagem.replaceAll("ober", "o");
mensagem = mensagem.replaceAll("ufat", "u")


//enviando a mensagem criptograda para o output

output.value = mensagem;
}

const validar = document.querySelector("#texto-principal");

validar.addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
        alert("Apenas letras minúsculas e sem acento");
    }
});

function checkChar(e){
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z0-9" "]';

    if(char.match(pattern)){
        return true;
    }
}


function copiar() {
    var output = document.querySelector("#texto-resultado");
    navigator.clipboard.writeText(output.value);
    alert("Texto copiado para area de transferencia")
}