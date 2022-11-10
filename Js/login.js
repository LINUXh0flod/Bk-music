// ======PAGINA DE LOGIN=========

email = document.getElementById('email')
var senha = document.getElementById('senha')
var idade = documenft.getElementById('idade')
var incorreto = document.getElementById('ddincort')

function continuar() {
  if (email.value == 'linuxzinho55@gmail.com' && senha.value == '34626367') {
    window.location.href = "home.html"
  } else {
    window.alert('Usuario ou senha incorreto')
  }

  if (email.value === '' || senha.value === '' || idade.value === '') {
    window.alert('ERRO, alguns dados ainda nao foram preenchidos.')
  }
}

// ======PAGINA HOME=======

/*Fazendo o menu sumir*/
var menu = document.getElementById('menu')
function clicar() {
menu.style.display = 'block'
}



