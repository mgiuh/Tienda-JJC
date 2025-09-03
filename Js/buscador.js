document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const presupuesto = document.getElementById('presupuesto').value;
    const uso = document.getElementById('uso').value;
    const extra = document.getElementById('extra').value;

    let resultado = `Resultados para: Presupuesto: ${presupuesto || "No seleccionado"}, Uso: ${uso || "No seleccionado"}, Extra: ${extra || "No seleccionado"}`;
    alert(resultado);
});