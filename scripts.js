var carta1 = {
  nome: "Ravi",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/ravi-full.png",
  atributos: {
    HP: 7323,
    ATK: 966,
    DEF: 657,
    SPD: 102
  }
}
var carta2 = {
  nome: "Fallen Cecilia",
  imagem: "https://epic7x.com/wp-content/uploads/2019/06/fallen-cecilia-full.png",
  atributos: {
    HP: 6840,
    ATK: 894,
    DEF: 694,
    SPD: 98
  }
}
var carta3 = {
  nome: "Lilias",
  imagem: "https://epic7x.com/wp-content/uploads/2019/09/lilias.png",
  atributos: {
    HP: 6751,
    ATK: 821,
    DEF: 648,
    SPD: 106
  }
}
var carta4 = {
  nome: "Celine",
  imagem: "https://epic7x.com/wp-content/uploads/2020/06/Celine.png",
  atributos: {
    HP: 6267,
    ATK: 1228,
    DEF: 473,
    SPD: 113
  }
}
var carta5 = {
  nome: "Landy",
  imagem: "https://epic7x.com/wp-content/uploads/2020/09/Landy-1.png",
  atributos: {
    HP: 6002,
    ATK: 1158,
    DEF: 553,
    SPD: 112
  }
}
var carta6 = {
  nome: "Sigret",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/sigret-full.png",
  atributos: {
    HP: 5784,
    ATK: 1228,
    DEF: 553,
    SPD: 109
  }
}
var carta7 = {
  nome: "Bellona",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/Bellona-1.png",
  atributos: {
    HP: 5704,
    ATK: 1003,
    DEF: 585,
    SPD: 109
  }
}
var carta8 = {
  nome: "Cermia",
  imagem: "https://epic7x.com/wp-content/uploads/2019/03/Cermia-2.png", 
  atributos: {
    HP: 5542,
    ATK: 1359,
    DEF: 585,
    SPD: 105
  }
}
var carta9 = {
  nome: "Baiken",
  imagem: "https://epic7x.com/wp-content/uploads/2019/04/Baiken-test.png",
  atributos: {
    HP: 6266,
    ATK: 1228,
    DEF: 473,
    SPD: 113
  }
}
var carta10 = {
  nome: "Vivian",
  imagem: "https://epic7x.com/wp-content/uploads/2019/08/vivian.png",
  atributos: {
    HP: 4378,
    ATK: 1228,
    DEF: 662,
    SPD: 111
  }
}



var cartaMaquina;
var cartaJogador;

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10 +1);
  cartaMaquina = cartas[numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random() * 10+1);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 10+1);    
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = " "
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + " "
  }
   opcoesTexto += "</p>"

  opcoesTexto += "<table style='width:100%''>"
  opcoesTexto += "  <thead>"
  opcoesTexto += "    <tr>"
  opcoesTexto += "      <th><img src=" + cartaJogador.imagem + " height='182' width='320' ></th>"
  opcoesTexto += "      <th><img src=" + cartaMaquina.imagem + " height='182' width='320' ></th>"
  opcoesTexto += "    </tr>"
  opcoesTexto += "  </thead>"
  opcoesTexto += "  <tbody id='tabelaJogadores'>"
  opcoesTexto += "    <tr>"
  opcoesTexto += "      <td><span class='titulos'>" + cartaJogador.nome + " (Jogador)" + "</span></td>"
  opcoesTexto += "      <td><span class='titulos'>" + cartaMaquina.nome + " (Maquina)" + "</span></td>"
  opcoesTexto += "    </tr>"

  opcoesTexto += "  </tbody>"
  opcoesTexto += "</table>"
      opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      console.log(radioAtributo[i].value)
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert('Você venceu ' + cartaMaquina.nome + " o valor do atributo do oponente era: " + cartaMaquina.atributos[atributoSelecionado])
  }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert('Você perdeu para ' + cartaMaquina.nome + " o valor do atributo do oponente era: " + cartaMaquina.atributos[atributoSelecionado])
  }else {alert('Você empatou com ' + cartaMaquina.nome + " o valor do atributo do oponente também era: " + cartaMaquina.atributos[atributoSelecionado])}
  
}
