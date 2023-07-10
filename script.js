document.addEventListener('DOMContentLoaded', function() {
    let sortearGruposButton = document.getElementById('sortear-grupos');
    let gruposSorteados = document.getElementById('gruposSorteados');

    sortearGruposButton.addEventListener('click', function() {
        let grupos = document.getElementsByClassName('sorteados-group');
        let participantesPorGrupo = [];

        // Obter todos os nomes dos participantes, separados por grupo
        for (let i = 0; i < grupos.length; i++) {
            let olElements = grupos[i].getElementsByTagName('ol');
            let participantes = [];
            for (let j = 0; j < olElements.length; j++) {
                let nome = olElements[j].innerHTML;
                if (nome !== '') {
                    participantes.push(nome);
                }
            }
            participantesPorGrupo.push(participantes);
        }

        // Verificar se há pelo menos 2 participantes em cada grupo
        for (let k = 0; k < grupos.length; k++) {
            if (participantesPorGrupo[k].length < 2) {
                alert('É necessário pelo menos 2 participantes no grupo ' + (k + 1) + ' para formar as duplas.');
                return;
            }
        }

        // Embaralhar a ordem dos participantes em cada grupo
        for (let m = 0; m < participantesPorGrupo.length; m++) {
            participantesPorGrupo[m].sort(function() { return 0.5 - Math.random() });
        }

        // Criar as duplas, garantindo que não sejam do mesmo grupo
        let duplas = [];
        for (let n = 0; n < participantesPorGrupo.length; n++) {
            let grupoParticipantes = participantesPorGrupo[n];
            while (grupoParticipantes.length >= 2) {
                let participante1 = grupoParticipantes.shift();
                let participante2 = null;
                let participanteIndex = null;

                for (let p = 0; p < grupoParticipantes.length; p++) {
                    if (grupoParticipantes[p] !== participante1) {
                        participante2 = grupoParticipantes[p];
                        participanteIndex = p;
                        break;
                    }
                }

                if (participante2) {
                    grupoParticipantes.splice(participanteIndex, 1);
                    duplas.push([participante1, participante2]);
                }
            }
        }

        // Limpar a lista de grupos sorteados
        gruposSorteados.innerHTML = '';

        // Adicionar as duplas à lista de grupos sorteados
        for (let q = 0; q < duplas.length; q++) {
            let duplaLi = document.createElement('li');
            duplaLi.innerHTML = duplas[q].join(' e ');
            gruposSorteados.appendChild(duplaLi);
        }
    });
});