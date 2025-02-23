//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigosParaSortear = [];

function adicionarAmigo() {
	let nome = document.getElementById("amigo").value;

	let nomeFormatado = nome.toLowerCase().trim();

	if (nome == null || nome == "") {
		alert("Digite um nome válido");
		return;
	}

	if (amigos.some((amigo) => amigo.toLowerCase() === nomeFormatado)) {
		alert("Amigo já adicionado, por favor adicione um nome diferente");
		limparCampo();
		return;
	}

	amigos.push(nome);

	atualizarAmigos();

	limparCampo();

	console.log(amigos);
}

function limparCampo() {
	document.getElementById("amigo").value = "";
}

function atualizarAmigos() {
	let listaHtml = document.getElementById("listaAmigos");

	listaHtml.innerHTML = "";

	amigos.forEach((amigo) => {
		let itemLista = document.createElement("li");
		itemLista.textContent = amigo;
		listaHtml.appendChild(itemLista);
	});
}

function sortearAmigo() {
	if (amigos.length < 2 && amigosParaSortear.length === 0) {
		alert("Adicione pelo menos dois amigos para sortear");
		return;
	}

	if (amigosParaSortear.length === 0) {
		amigosParaSortear = [...amigos];
	} else if (amigosParaSortear.length === 1) {
		alert("Todos os nomes foram sorteados!");
		amigosParaSortear = [];
		return;
	}

	let indiceSorteado = Math.floor(Math.random() * amigosParaSortear.length);
	let nomeSorteado = amigosParaSortear.splice(indiceSorteado, 1)[0];

	amigos.splice(amigos.indexOf(nomeSorteado), 1);

	document.getElementById(
		"resultado"
	).innerHTML = `<p><strong>Amigo sorteado:</strong> ${nomeSorteado}</p>`;
	atualizarAmigos();
}

function resetarLista() {
	amigos = [];
	amigosParaSortear = [];
	document.getElementById("resultado").innerHTML = "";
	atualizarAmigos();
	limparCampo();
}
