const navToggle = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav]");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const filtros = document.querySelectorAll("[data-filtro]");
const libros = document.querySelectorAll("[data-linea]");
const vacio = document.querySelector("[data-vacio]");

if (filtros.length) {
  const aplicar = (linea) => {
    let visibles = 0;
    libros.forEach((libro) => {
      const coincide = linea === "todas" || libro.dataset.linea === linea;
      libro.classList.toggle("is-hidden", !coincide);
      if (coincide) visibles += 1;
    });
    vacio?.classList.toggle("is-on", visibles === 0);
    filtros.forEach((boton) => {
      boton.setAttribute("aria-pressed", String(boton.dataset.filtro === linea));
    });
    const params = new URLSearchParams(window.location.search);
    if (linea === "todas") params.delete("linea");
    else params.set("linea", linea);
    const query = params.toString();
    history.replaceState({}, "", query ? `?${query}` : window.location.pathname);
  };

  filtros.forEach((boton) => {
    boton.addEventListener("click", () => aplicar(boton.dataset.filtro));
  });

  const inicial = new URLSearchParams(window.location.search).get("linea") || "todas";
  const existe = [...filtros].some((boton) => boton.dataset.filtro === inicial);
  aplicar(existe ? inicial : "todas");
}
