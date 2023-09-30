// MODAL TIMES
const escudo = document.getElementById("escudo");
const divTimes = document.querySelector(".timesCompleto");
const triangulo = document.getElementById("triangulo-para-cima");

escudo.addEventListener("mouseenter", function () {
  divTimes.style.display = "block";
});

triangulo.addEventListener("mouseenter", function () {
  divTimes.style.display = "block";
});

 escudo.addEventListener("mouseleave", function () {
  divTimes.style.display = "none";
});

divTimes.addEventListener("mouseleave", function () {
  divTimes.style.display = "none";
}); 

function mudaCorA() {
  const divLtimeB = document.getElementById("serieBButton");
  const divLtime = document.getElementById("serieAButton");
  const divLtimeE = document.getElementById("europaButton");

  divLtime.style.borderBottomColor = "green";
  divLtime.style.color = "rgb(24, 139, 24)";

  divLtimeB.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeB.style.color = "rgba(0, 0, 0, 0.514)";

  divLtimeE.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeE.style.color = "rgba(0, 0, 0, 0.514)";

  document.getElementById("serieA").setAttribute("style", "display:grid;");
  document.getElementById("serieB").setAttribute("style", "display:none;");
  document.getElementById("serieE").setAttribute("style", "display:none;");
}

function mudaCorB() {
  const divLtimeA = document.getElementById("serieAButton");
  const divLtime = document.getElementById("serieBButton");
  const divLtimeE = document.getElementById("europaButton");

  divLtime.style.borderBottomColor = "green";
  divLtime.style.color = "rgb(24, 139, 24)";

  divLtimeA.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeA.style.color = "rgba(0, 0, 0, 0.514)";

  divLtimeE.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeE.style.color = "rgba(0, 0, 0, 0.514)";

  document.getElementById("serieB").setAttribute("style", "display:grid;");
  document.getElementById("serieA").setAttribute("style", "display:none;");
  document.getElementById("serieE").setAttribute("style", "display:none;");
}

function mudaCorE() {
  const divLtimeA = document.getElementById("serieAButton");
  const divLtimeB = document.getElementById("serieBButton");
  const divLtime = document.getElementById("europaButton");
  divLtime.style.borderBottomColor = "green";
  divLtime.style.color = "rgb(24, 139, 24)";

  divLtimeA.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeA.style.color = "rgba(0, 0, 0, 0.514)";

  divLtimeB.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeB.style.color = "rgba(0, 0, 0, 0.514)";

  document.getElementById("serieE").setAttribute("style", "display:grid;");
  document.getElementById("serieB").setAttribute("style", "display:none;");
  document.getElementById("serieA").setAttribute("style", "display:none;");
}

// VALIDAÇÃO LOGIN

// VALIDAÇÃO EMAIL
function validarCadastro() {
  var nomeCompleto = document.querySelector('input[name="nomeCompleto"]').value;
  var nomeUsuario = document.querySelector('input[name="nomeUsuario"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var telefone = document.querySelector('input[name="telefone"]').value;
  var senha = document.querySelector('input[name="senha"]').value;
  var confirmarSenha = document.querySelector('input[name="confirmarSenha"]').value;
  var sexo = document.querySelector('input[name="gender"]:checked');

  // Validação simples: Verifica se os campos obrigatórios estão preenchidos
  if (!nomeCompleto || !nomeUsuario || !email || !telefone || !senha || !confirmarSenha || !sexo) {
    alert('Todos os campos devem ser preenchidos.');
    return false;
  }

  // Validação mais específica, por exemplo, verificar se as senhas coincidem
  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return false;
  }

  // Aqui você pode adicionar mais validações, como verificar o formato do email

  return true; // Permite o envio do formulário se todas as validações passarem
}