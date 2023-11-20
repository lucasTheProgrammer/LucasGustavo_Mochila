const form = document.getElementById("novoItem")

form.addEventListener("submit" , (evento) => {
  evento.preventDefault()

  criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
  console.log(nome)
  console.log(quantidade)
  const novoitem = document.createElement('li')
  novoItem.classList.add("item")
  const numeroItem = document.createElement('strong')
  nuinnerHTMLmeroItem = quantidade 
  numeroItem.appendChild(numeroItem)
  nuinnerHTMLmeroItem += nome
  lista.appendChild(novoItem)
  localStorage.setItem("nome", nome)
}