let vp = document.getElementById("villaGranja")
let papel = vp.getContext("2d")

let vaca = {
    url : "assets/img/vaca.webp",
    cargaOK : false,
}

let cerdo = {
    url : "assets/img/cerdo.webp",
    cargaOK : false,
}

let pollo = {
    url : "assets/img/pollo.webp",
    cargaOK : false,
}

let fondo = {
    url : "assets/img/tile.webp",
    cargaOK : false,
}

fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVaca)

pollo.imagen = new Image()
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollo)

cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdo)

function cargarFondo() {
    fondo.cargaOK = true
    dibujar()
}

function cargarVaca() {
    vaca.cargaOK = true
    dibujar()
}

function cargarPollo() {
    pollo.cargaOK = true
    dibujar()
}

function cargarCerdo() {
    cerdo.cargaOK = true
    dibujar()
}

function dibujar() {
    let cantidad
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0)
    }
    if (vaca.cargaOK) {
        cantidad = aleatorio(0, 5)
        console.log('vacas:'+ cantidad);
        for (var v = 0; v < cantidad; v++) {
            let x = aleatorio(0, 7) * 60
            let y = aleatorio(0, 7) * 60
            papel.drawImage(vaca.imagen, x, y)
        }
    }
    if (pollo.cargaOK) {
        cantidad = aleatorio(0, 5)
        console.log('pollos:'+ cantidad);
        for (var p = 0; p < cantidad; p++) {
        let x = aleatorio(0, 7) * 60
        let y = aleatorio(0, 7) * 60
        papel.drawImage(pollo.imagen, x, y)
        }
    }
    if (cerdo.cargaOK) {
        cantidad = aleatorio(0, 5)
        console.log('cerdos:'+ cantidad);
        for (var c = 0; c < cantidad; c++) {
        let x = aleatorio(0, 7) * 60
        let y = aleatorio(0, 7) * 60
        papel.drawImage(cerdo.imagen, x, y)
        }
    }
}

function aleatorio (min, maxi) {
    var resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}