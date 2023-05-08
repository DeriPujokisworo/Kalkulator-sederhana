function hitung(operator) {
  var bilangan1 = parseInt(document.getElementById("bilangan1").value);
  var bilangan2 = parseInt(document.getElementById("bilangan2").value);
  var hasil;

  switch (operator) {
    case "+":
      hasil = bilangan1 + bilangan2;
      break;
    case "-":
      hasil = bilangan1 - bilangan2;
      break;
    case "*":
      hasil = bilangan1 * bilangan2;
      break;
    case "/":
      hasil = bilangan1 / bilangan2;
      break;
    default:
      hasil = "Error: Operator tidak dikenali";
  }

  document.getElementById("hasil").textContent = hasil;
}

function resetForm() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
  document.getElementById("hasil").textContent = "";
}
