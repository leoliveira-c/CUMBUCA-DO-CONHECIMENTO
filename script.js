document.addEventListener('DOMContentLoaded', function() {
    var sortearGruposButton = document.getElementById('sortear-grupos');
    var gruposSorteados = document.getElementById('gruposSorteados');

    sortearGruposButton.addEventListener('click', function() {
        var grupos = document.getElementsByClassName('sorteados-group');
        var participantesPorGrupo = [];

        // Obter todos os nomes dos participantes, separados por grupo
        for (var i = 0; i < grupos.length; i++) {
            var olElements = grupos[i].getElementsByTagName('ol');
            var participantes = [];
            for (var j = 0; j < olElements.length; j++) {
                var nome = olElements[j].innerHTML;
                if (nome !== '') {
                    participantes.push(nome);
                }
            }
            participantesPorGrupo.push(participantes);
        }

        // Verificar se há pelo menos 2 participantes em cada grupo
        for (var k = 0; k < grupos.length; k++) {
            if (participantesPorGrupo[k].length < 2) {
                alert('É necessário pelo menos 2 participantes no grupo ' + (k + 1) + ' para formar as duplas.');
                return;
            }
        }

        // Embaralhar a ordem dos participantes em cada grupo
        for (var m = 0; m < participantesPorGrupo.length; m++) {
            participantesPorGrupo[m].sort(function() { return 0.5 - Math.random() });
        }

        // Criar as duplas, garantindo que não sejam do mesmo grupo
        var duplas = [];
        for (var n = 0; n < participantesPorGrupo.length; n++) {
            var grupoParticipantes = participantesPorGrupo[n];
            while (grupoParticipantes.length >= 2) {
                var participante1 = grupoParticipantes.shift();
                var participante2 = null;
                var participanteIndex = null;

                for (var p = 0; p < grupoParticipantes.length; p++) {
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
        for (var q = 0; q < duplas.length; q++) {
            var duplaLi = document.createElement('li');
            duplaLi.innerHTML = duplas[q].join(' e ');
            gruposSorteados.appendChild(duplaLi);
        }
    });
});