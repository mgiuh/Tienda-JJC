document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".buscador form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const presupuesto = document.getElementById("presupuesto").value;
    const uso = document.getElementById("uso").value;
    const Extras = document.getElementById("Extras").value;

    const configuracion = {
      presupuesto,
      uso,
      Extras
    };

    console.log("Configuración seleccionada:", configuracion);

    alert(
      `💰 Presupuesto: ${presupuesto || "No seleccionado"}\n` +
      `🎮 Uso: ${uso || "No seleccionado"}\n` +
      `⚡ Extras: ${Extras || "No seleccionado"}`
    );
  });
});
