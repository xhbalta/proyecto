// js/app.js

console.log("app.js cargado correctamente desde GitHub Pages");

document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  if (status) {
    status.textContent = "¡JavaScript externo funcionando! ✓";
    status.classList.add("text-green-400", "font-bold");
  }

  const feed = document.getElementById("feed-view");
  if (feed) {
    feed.innerHTML = `
      <div class="bg-gray-800/50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">Próximos pasos</h2>
        <ul class="list-disc pl-6 space-y-2 text-gray-300">
          <li>Ya carga el HTML y el JS separado</li>
          <li>Próximo: rutas con History API (/episodio/..., /serie/...)</li>
          <li>Luego: cargar episodios desde archivos .json</li>
        </ul>
      </div>
    `;
  }
});