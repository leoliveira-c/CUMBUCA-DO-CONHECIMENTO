document.getElementById("gruposSorteados").addEventListener("click", function () {
    const grupos = [
        Array.from(document.querySelectorAll(".group-1 ol")),
        Array.from(document.querySelectorAll(".group-2 ol")),
        Array.from(document.querySelectorAll(".group-3 ol")),
        Array.from(document.querySelectorAll(".group-4 ol"))
    ];

    const gruposSorteados = [];
    let quantidadeDuplas = Infinity;

    grupos.forEach(function (grupo) {
        quantidadeDuplas = Math.min(quantidadeDuplas, grupo.length);
    });

    for (let i = 0; i < quantidadeDuplas; i++) {
        const dupla = [];

        grupos.forEach(function (grupo) {
            const pessoaIndex = Math.floor(Math.random() * grupo.length);
            const pessoa = grupo.splice(pessoaIndex, 1)[0].textContent;
            dupla.push(pessoa);
        });

        gruposSorteados.push(dupla);
    }

    const ulGruposSorteados = document.getElementById("gruposSorteados");
    ulGruposSorteados.innerHTML = ""; // Limpa o conteúdo anterior

    gruposSorteados.forEach(function (dupla) {
        const liDupla = document.createElement("li");
        liDupla.textContent = dupla.join(", ");
        ulGruposSorteados.appendChild(liDupla);
    });

});