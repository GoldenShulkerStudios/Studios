document.addEventListener("DOMContentLoaded", function() {
    // Verificar si existe un recuento de vistas en el almacenamiento local
    let viewCount = localStorage.getItem("viewCount");

    if (viewCount) {
        // Si existe, incrementarlo y actualizar la vista
        viewCount = parseInt(viewCount) + 1;
    } else {
        // Si no existe, establecerlo en 1
        viewCount = 1;
    }

    // Guardar el nuevo recuento en el almacenamiento local
    localStorage.setItem("viewCount", viewCount);

    // Mostrar el recuento en el elemento HTML
    document.getElementById("viewCount").textContent = viewCount;
});
