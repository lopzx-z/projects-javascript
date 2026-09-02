const form = document.getElementById("form");
const mostrarTexto = document.getElementById("msg");

// Função de validação de idade

function verifIdade(idade) {
    if (idade < 0 || idade >= 120) {
        mostrarTexto.innerText = "Idade incorreta.";
        mostrarTexto.style.color = "red";

    } else if (idade >= 18) {
        mostrarTexto.innerText = "Maior de idade, acesso liberado.";
        mostrarTexto.style.color = "green";

    } else if (idade == 0) {
        mostrarTexto.innerText = "Sua idade não pode ser 0";
        mostrarTexto.style.color = "red";

    } else {
        mostrarTexto.innerText = "Menor de idade, acesso negado.";
        mostrarTexto.style.color = "red";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const idade = Number(document.getElementById("input").value);
    verifIdade(idade);
});
