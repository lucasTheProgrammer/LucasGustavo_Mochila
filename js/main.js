const form = document.getElementById("novoitem")

form.addEventListener("submit" , (evento) => {
  evento.preventDefault()

  console.log(evento)
  console.log(evento.target[0.value])

})
