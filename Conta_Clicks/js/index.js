clicks = 0

function Conta() {
        AtualizarValor(++clicks);
}

function AtualizarValor() {
    document.getElementById("p1").innerHTML = clicks
}
