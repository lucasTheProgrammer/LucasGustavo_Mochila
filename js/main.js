const form = document.getElementById("novoitem")

form.addEventListener("submit" , (evento) => {
  evento.preventDefault()

 
  console.log(evento.target.elements['nome'].value)
  console.log(evento.target.elements['quantidade'].value)
  criaElemento(evento.target.elements['nome'].value, evento f)
})

function criaElemento(nome, quantidade) {


}