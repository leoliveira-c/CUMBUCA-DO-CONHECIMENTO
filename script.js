const group1 = document.getElementsByClassName("group-1")
const group2 = document.getElementsByClassName("group-2")
const group3 = document.getElementsByClassName("group-3")
const group4 = document.getElementsByClassName("group-4")

const sorteioBtn = document.getElementById("#sortear-grupos")

document.querySelector("#sortear-grupos button").addEventListener("click", function () {
    const grupos = [
        Array.from(document.querySelectorAll(".group-1 ol")),
        Array.from(document.querySelectorAll(".group-2 ol")),
        Array.from(document.querySelectorAll(".group-3 ol")),
        Array.from(document.querySelectorAll(".group-4 ol"))
    ];

    const gruposSorteados = [];

    while (grupos.length > 1) {
        const indexGrupo1 = Math.floor(Math.random() * grupos.length);
        const grupo1 = grupos[indexGrupo1];

        const indexGrupo2 = Math.floor(Math.random() * (grupos.length - 1));
        const grupo2 = grupos[indexGrupo2 < indexGrupo1 ? indexGrupo2 : indexGrupo2 + 1];

        if (grupo1.length > 0 && grupo2.length > 0) {
            const pessoa1 = grupo1.shift().textContent;
            const pessoa2 = grupo2.shift().textContent;
            const dupla = [pessoa1, pessoa2];
            gruposSorteados.push(dupla);
        }

        if (grupo1.length === 0) {
            grupos.splice(indexGrupo1, 1);
        }
        if (grupo2.length === 0) {
            grupos.splice(indexGrupo2, 1);
        }
    }

    const ulGruposSorteados = document.getElementById("gruposSorteados");
    ulGruposSorteados.innerHTML = ""; // Limpa o conteúdo anterior

    gruposSorteados.forEach(function (dupla) {
        const liDupla = document.createElement("li");
        liDupla.textContent = dupla.join(", ");
        ulGruposSorteados.appendChild(liDupla);
    });
});

// document.getElementById("sortear-grupos").addEventListener("click", function () {
//     const grupos = [ group1, group2, group3, group4 ];

//     let gruposSorteados = [];

//     while (grupos.length > 0) {
//         const index = Math.floor(Math.random() * grupos.length);
//         const grupo = grupos[index];

//         if (!grupo.some(pessoa => gruposSorteados.flat().includes(pessoa))) {
//             gruposSorteados.push(grupo);
//             grupos.splice(index, 1);
//         }
//     }

//     const ulGruposSorteados = document.getElementById("gruposSorteados");
//     ulGruposSorteados.innerHTML = ""; // Limpa o conteúdo anterior

//     gruposSorteados.forEach(function (grupo) {
//         const liGrupo = document.createElement("li");
//         liGrupo.textContent = grupo.join(", ");
//         ulGruposSorteados.appendChild(liGrupo);
//     });
// });