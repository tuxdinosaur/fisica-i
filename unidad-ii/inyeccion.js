document.addEventListener('DOMContentLoaded', () => {
    // Cargar el índice reutilizable
    fetch('indice.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el índice.");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('indice-placeholder').innerHTML = html;
            // Después de cargar, resalta el enlace de la página actual
            marcarEnlaceActivo();
        })
        .catch(error => {
            console.error('Error al cargar el índice:', error);
            document.getElementById('indice-placeholder').innerHTML = "<p>Error al cargar el menú.</p>";
        });
});

function marcarEnlaceActivo() {
    // Obtiene el nombre del archivo de la página actual (ej. "pagina1.html")
    const paginaActual = window.location.pathname.split('/').pop();
    
    // Busca el enlace en el índice que corresponde a la página actual
    const enlaceActivo = document.querySelector(`.toc-link[href="${paginaActual}"]`);

    if (enlaceActivo) {
        // Quita la clase 'active' de cualquier otro enlace que la tuviera
        document.querySelectorAll('.toc-link').forEach(link => link.classList.remove('active'));
        // Añade la clase 'active' al enlace correcto
        enlaceActivo.classList.add('active');
    }
}