// custom-bootstrap.js

// Inicialização de Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Inicialização de Popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Exemplo de manipulação de evento para um modal
var myModal = document.getElementById('myModal')
myModal.addEventListener('show.bs.modal', function (event) {
  // Botão que acionou o modal
  var button = event.relatedTarget
  // Extrai informações dos atributos data-bs-* do botão
  var recipient = button.getAttribute('data-bs-whatever')
  // Se necessário, você pode iniciar uma requisição AJAX aqui para carregar mais dados
  
  // Atualiza o conteúdo do modal
  var modalTitle = myModal.querySelector('.modal-title')
  var modalBodyInput = myModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Nova mensagem para ' + recipient
  modalBodyInput.value = recipient
})
