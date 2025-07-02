let contatos = [];
let indexAtual = -1;
let modoEdicao = false;

function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;
  if (user === "admin" && pass === "admin") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("app-container").style.display = "block";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function incluir() {
  limparCampos();
  modoEdicao = false;
}

function editar() {
  if (indexAtual >= 0 && indexAtual < contatos.length) {
    modoEdicao = true;
  } else {
    alert("Nenhum contato selecionado!");
  }
}

function salvar() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;

  const contato = { nome, sobrenome, endereco, telefone };

  if (modoEdicao && indexAtual >= 0) {
    contatos[indexAtual] = contato;
  } else {
    contatos.push(contato);
    indexAtual = contatos.length - 1;
  }
  exibirContato();
}

function cancelar() {
  exibirContato();
}

function excluir() {
  if (indexAtual >= 0 && contatos.length > 0) {
    contatos.splice(indexAtual, 1);
    indexAtual = Math.max(indexAtual - 1, 0);
    exibirContato();
  }
}

function exibirContato() {
  if (contatos.length === 0) {
    limparCampos();
    return;
  }
  const c = contatos[indexAtual];
  document.getElementById("nome").value = c.nome;
  document.getElementById("sobrenome").value = c.sobrenome;
  document.getElementById("endereco").value = c.endereco;
  document.getElementById("telefone").value = c.telefone;
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("telefone").value = "";
}

function primeiro() {
  if (contatos.length > 0) {
    indexAtual = 0;
    exibirContato();
  }
}

function ultimo() {
  if (contatos.length > 0) {
    indexAtual = contatos.length - 1;
    exibirContato();
  }
}

function anterior() {
  if (indexAtual > 0) {
    indexAtual--;
    exibirContato();
  }
}

function proximo() {
  if (indexAtual < contatos.length - 1) {
    indexAtual++;
    exibirContato();
  }
}
