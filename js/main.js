function clicou(){

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar");

}


function redirecionar(){
    window.open("https://github.com/reinaldoasf");

}

function redirecionar_local(){
    window.location.href = "https://github.com/reinaldoasf";

}

function trocar(elemento){

    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("trocar texto");
}


function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse";
    
}

function loadIt()
{
    console.log("pagina carregada");
    alert("pagina carregada");
}

function Change(elemento){
    console.log(elemento.value)
}

/*function soma(n1,n2)
{

    return n1+n2;

}

//function setReplace(frase, nome, novo_nome)
//{
//    return frase.replace(nome,novo_nome);
//
//}
function validaIdade(idade){
    var validar;
    if(idade>=18)
        validar = true;
    else
    {
        alert("de menor");
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
alert(soma(5,10));
*/
//alert(setReplace("Vai Japão", "Japão", "Brasil"));




//var d = new Date();
//
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getDate());
//alert(d.getHours());
//alert(d.getMinutes());




//var count = 0;
//while (count<=5)
//{
//    console.log(count);
//    count++;
//
//
//}
//
//
//for( count=0;count<=5;count++ ){
//    alert(count);
//}


//var idade = 18;
/*
var idade = prompt("Qual sua idade?");
if(idade>=18)
    alert("maior de idade");
else
    alert("menor de idade");
*/
/*
var frutas = [{nome: "maçã", cor: "vermelha" },{nome: "uva", cor: "roxa" }];
console.log(frutas[1].nome);

alert(frutas[0].cor);

var fruta = {nome: "maçã", cor: "vermelha" };
console.log(fruta.nome);

alert(fruta.cor);*/

//var nome = "Reinaldo Agostinho"
//
//var idade= 26;
//var idade2 = 10;
//var frase = "Aqui é Japão";
////alert(idade2 + idade + " anos");
//
//console.log(nome);
//console.log(idade2 * idade);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLowerCase());
//
//console.log(frase.toUpperCase());
//

//var lista = ["maçã","pêra","laranja"];
//lista.push("uva");
//console.log(lista);
//alert(lista[1]);
//lista.pop();
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" | "));
