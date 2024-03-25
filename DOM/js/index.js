function dom1(){
    document.getElementById("paragrafo").innerHTML = "Olá"; //Pega o elemento pelo ID
    document.getElementsByClassName("p2").innerHTML = "Hello World!"; //Pega o elemento pela Classe
    a = document.getElementsByTagName("p"); // Pega o elemento pela tag
    document.querySelector(".p2").style.color = "red"; // Pega o primeiro elemento css com o nome passado
    a[2].innerHTML = "Oi rsrs"
}

function dom2() {
    b = document.querySelectorAll(".a"); // Pega todos os elementos css com o nome passado
    b[0, 1].style.color = "blue";
}
