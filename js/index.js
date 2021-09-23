const $sectionTable = document.querySelector(".sectionTable"),
    $table = document.querySelector(".table"),
    $monthly = document.querySelector(".monthly"),
    $yearly = document.querySelector(".yearly"),
    $form = document.querySelector(".form"),
    $precioMensual = document.querySelectorAll(".mensual"),
    $precioAnual = document.querySelectorAll(".anual");

let medidas = window.matchMedia("(min-width: 650px)"),
    $tabla650 = "";
if(medidas.matches) {
    $table.style.display = "none"
    $sectionTable.innerHTML +=  `
    <table class="tabla">
        <thead>
            <tr>
                <th class="thGenerado">The Features</th>
                <th class="thGenerado">Basic</th>
                <th class="thGenerado">Pro</th>
                <th class="thGenerado">Business</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Unlimited Story Posting</td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Unlimited Photo Upload</td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Embedding Custom Content</td>
                <td></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Customize Metadata</td>
                <td></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Advanced Metrics</td>
                <td></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Photo Downloads</td>
                <td></td>
                <td></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Search Engine Indexing</td>
                <td></td>
                <td></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
            <tr>
                <td>Custom Analytics</td>
                <td></td>
                <td></td>
                <td><img src="./assets/pricing/desktop/check.svg" alt="icono del chequeado"></td>
            </tr>
        </tbody>
        
    </table>`

} 

document.addEventListener("click", e => {
    if(e.target.matches(".imagenHamburguesa")) {
        document.querySelector(".nav").classList.toggle("active")
        document.querySelector(".imagenHamburguesa").style.display = "none"
        document.querySelector(".imagenCierre").style.display = "block"
        
    }
    if(e.target.matches(".imagenCierre")) {
        document.querySelector(".nav").classList.toggle("active")
        document.querySelector(".imagenHamburguesa").style.display = "block"
        document.querySelector(".imagenCierre").style.display = "none"
    }
    if(e.target.matches(".form")) {
        $monthly.classList.toggle("elegir");
        $yearly.classList.toggle("elegir");
        $form.classList.toggle("cambiar")
        agregarClase($precioAnual)
        agregarClase($precioMensual)
    } 
})

document.addEventListener("scroll", () => {
    if(window.scrollY > 40) {
        
        document.querySelector(".nav").classList.remove("active")
        document.querySelector(".imagenHamburguesa").style.display = "block"
        document.querySelector(".imagenCierre").style.display = "none"
    }
})

const agregarClase = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.toggle("activar")
    }
}

