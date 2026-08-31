const form = document.getElementById("form");
const mostrarTexto = document.getElementById("msg");

// Função de validação de idade
function verifIdade(idade) {
    if (idade <= 0 || idade >= 120) {
        mostrarTexto.innerText = "Idade incorreta.";
    } else if (idade >= 18) {
        mostrarTexto.innerText = "Maior de idade, acesso ok.";
    } else {
        mostrarTexto.innerText = "Menor de idade, acesso negado.";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const idade = Number(document.getElementById("input").value);
    verifIdade(idade);
});
