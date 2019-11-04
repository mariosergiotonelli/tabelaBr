var times, timesParticipantes, flamengo, palmeiras, santos, saoPaulo, gremio, internacional, corinthians, athleticoPR, bahia, goias, vasco, fortaleza, atleticoMG, botafogo, ceara, cruzeiro, fluminense, csa, chapecoense, avai, placares, id, mandante, visitante, partidas, jogos;

function timesCampeonato(id, nome, pontos, vitorias, derrotas, empates, golFeitos, golSofridos, saldoGols) {
  this.id = id;
  this.nome = nome;
  this.pontos = pontos;
  this.vitorias = vitorias;
  this.empates = empates;
  this.derrotas = derrotas;
  this.golFeitos = golFeitos;
  this.golSofridos = golSofridos;
  this.saldoGols = saldoGols;
}

flamengo = new timesCampeonato(0, "Flamengo", 0, 0, 0, 0, 0, 0, 0, 0);
palmeiras = new timesCampeonato(1, "Palmeiras", 0, 0, 0, 0, 0, 0, 0, 0);
santos = new timesCampeonato(2, "Santos", 0, 0, 0, 0, 0, 0, 0, 0);
saoPaulo = new timesCampeonato(3, "São Paulo", 0, 0, 0, 0, 0, 0, 0, 0);
gremio = new timesCampeonato(4, "Grêmio", 0, 0, 0, 0, 0, 0, 0, 0);
internacional = new timesCampeonato(5, "Internacional", 0, 0, 0, 0, 0, 0, 0, 0);
corinthians = new timesCampeonato(6, "Corinthians", 0, 0, 0, 0, 0, 0, 0, 0);
athleticoPR = new timesCampeonato(7, "Athletico-PR", 0, 0, 0, 0, 0, 0, 0, 0);
bahia = new timesCampeonato(8, "Bahia", 0, 0, 0, 0, 0, 0, 0, 0);
goias = new timesCampeonato(9, "Goiás", 0, 0, 0, 0, 0, 0, 0, 0);
vasco = new timesCampeonato(10, "Vasco", 0, 0, 0, 0, 0, 0, 0, 0);
fortaleza = new timesCampeonato(11, "Fortaleza", 0, 0, 0, 0, 0, 0, 0, 0);
atleticoMG = new timesCampeonato(12, "Atletico-MG", 0, 0, 0, 0, 0, 0, 0, 0);
botafogo = new timesCampeonato(13, "Botafogo", 0, 0, 0, 0, 0, 0, 0, 0);
ceara = new timesCampeonato(14, "Ceara", 0, 0, 0, 0, 0, 0, 0, 0);
cruzeiro = new timesCampeonato(15, "Cruzeiro", 0, 0, 0, 0, 0, 0, 0, 0);
fluminense = new timesCampeonato(16, "Fluminense", 0, 0, 0, 0, 0, 0, 0, 0);
csa = new timesCampeonato(17, "CSA", 0, 0, 0, 0, 0, 0, 0, 0);
chapecoense = new timesCampeonato(18, "Chapecoense", 0, 0, 0, 0, 0, 0, 0, 0);
avai = new timesCampeonato(19, "Avai", 0, 0, 0, 0, 0, 0, 0, 0);

times = [flamengo, palmeiras, santos, saoPaulo, gremio, internacional, corinthians, athleticoPR, bahia, goias, vasco, fortaleza, atleticoMG, botafogo, ceara, cruzeiro, fluminense, csa, chapecoense, avai];
timesParticipantes = [];
timesParticipantes.push(times);
jogos = [];


for (var i = 0; i < times.length; i++) {
  var timeA = times[i];
  for (var j = 0; j < times.length; j++) {
    var timeB = times[j];

    if (timeA.nome !== timeB.nome) {
      mandante = timeA;
      visitante = timeB;
      partidas = timeA.nome + ' X ' + timeB.nome;

      jogos.push({
        mandante: times[i],
        visitante: times[j]
      })
    };
  }
}

jogos.forEach(function (jogo, index) {

  var mandanteGols = Math.round(Math.random() * 6);
  var visitanteGols = Math.round(Math.random() * 6);

  jogos[index].mandante.golFeitos += mandanteGols;
  jogos[index].visitante.golFeitos += visitanteGols;

  jogos[index].mandante.golSofridos += visitanteGols;
  jogos[index].visitante.golSofridos += mandanteGols;

  jogos[index].mandante.saldoGols += mandanteGols - visitanteGols;
  jogos[index].visitante.saldoGols += visitanteGols - mandanteGols;

  if (mandanteGols > visitanteGols) {
    jogos[index].mandante.vitorias += 1;
    jogos[index].mandante.pontos += 3;
    jogos[index].visitante.derrotas += 1;
  }
  else if (mandanteGols === visitanteGols) {
    jogos[index].mandante.empates += 1;
    jogos[index].mandante.pontos += 1;
    jogos[index].visitante.empates += 1;
    jogos[index].visitante.pontos += 1;
  }
  else {
    jogos[index].visitante.vitorias += 1;
    jogos[index].visitante.pontos += 3;
    jogos[index].mandante.derrotas += 1;
  }

  times.sort(function (a, b) {
    return a.pontos < b.pontos ? 1 : -1;
  });

})

var campeonatoFinal = times.map(function (time, index) {

  return '<tr>' +
  '<th scope="row">' + (index + 1) + '</th>' +
  '<td class="tabelaCampeonato__nomeTime">' + time.nome + '</td>' +
  '<td class="tabelaCampeonato__pontosTime">' + time.pontos + '</td>' +
  '<td class="tabelaCampeonato__vitoriasTime">' + time.vitorias + '</td>' +
  '<td class="tabelaCampeonato__vitoriasTime">' + time.empates + '</td>' +
  '<td class="tabelaCampeonato__derrotasTime">' + time.derrotas + '</td>' +
  '<td class="tabelaCampeonato__golsFeitos">' + time.golFeitos + '</td>' +
  '<td class="tabelaCampeonato__golsFeitos">' + time.golSofridos + '</td>' +
  '<td class="tabelaCampeonato__golsFeitos">' + time.saldoGols + '</td>' +
  '</tr>';
});

$(document).ready(function(){
  $('.tabelaCampeonato__btnResultados').on('click', function(){
    if( !$('.tabelaCampeonato table tbody tr').length ){
      $('.tabelaCampeonato table tbody').append(campeonatoFinal.toString());
    }
  })
})