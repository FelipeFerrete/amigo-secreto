let amigos = [];

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value)
    if(lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = ""; // Limpa o campo de texto após adicionar
}

function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    for(let i = 0; i < amigos.lenght;++i) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[i+1] + "<br>";
        
    }
}
function embaralhar() {
    for (let indice = lista.length; indice;indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
         [lista[indiceAleatorio], lista[indice - 1]];
 }
} 