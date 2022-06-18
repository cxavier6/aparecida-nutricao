//Buscando os campos no HTML com DOM
var titulo = document.querySelector("h1");
			
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

//Loop for para percorrer todos os pacientes
for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //Validação dos dados para o cálculo do IMC
    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if(altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Peso e/ou altura inválidos";
    }
} 