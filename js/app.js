function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");
    if(lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = ""; // Limpa o campo de texto após adicionar
}
