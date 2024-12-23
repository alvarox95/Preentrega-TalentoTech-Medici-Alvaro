const formulario = document.getElementById("formulario-contacto");
console.log(formulario);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formularioValido = true;

  if (nombre === "" || !emailRegex.test(email) || mensaje.length < 10) {
    formularioValido = false;
    alert("Todos los campos son obligatorios");
  } else {
    alert("Formulario enviado correctamente.");
  }
});
