const form = document.getElementById('form-contato');
const aviso = document.getElementById('aviso');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  aviso.classList.remove('d-none');
  form.reset();
  form.classList.remove('was-validated');
});
