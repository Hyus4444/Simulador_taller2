var posY = 0
var gravedad = 9.8
var tiempo = 100
var velocidad = 0
var nombre = ''
let planeta = new Map();
var interval;
planeta.set("luna", 1.62)
planeta.set("jupiter", 24.79)
planeta.set("marte", 3.71)
planeta.set("mercurio", 3.7)
planeta.set("saturno", 10.44)
planeta.set("tierra", 9.8)

function simulacion(nombrePlaneta) {

    $(".fondo").removeClass(nombre).addClass(nombrePlaneta)
    $("#titulo").text(planeta.get(nombrePlaneta) + "m/s^2")
    nombre = nombrePlaneta
    $(".fondo").addClass(nombrePlaneta);
    console.log(planeta.get(nombrePlaneta))
    $("#object").on("click", function () {
        clearInterval(interval)
        var velocidadInicial = 0; // La velocidad inicial es 0
        var tiempo = 0; // Inicializamos el tiempo en 0
        var velocidadFinal = planeta.get(nombrePlaneta);
        interval = setInterval(function () {
                tiempo += 0.1
                var velocidad = velocidadInicial + (planeta.get(nombrePlaneta) * tiempo);
                var desplazamiento = velocidad * 0.1;
                document.querySelector("#object").style.marginTop = posY + 'px'
                posY += desplazamiento
                if (posY >= 320) {
                    posY = 0
                    clearInterval(interval)
                    setTimeout(() => {
                        document.querySelector("#object").style.marginTop = '0px'
                    }, 500);
                }
            },  10);
    })
}


function reiniciar() {
    $("#titulo").text("Gravedad:")
    document.querySelector("#object").style.marginTop = '0px'
    posY = 0
    $(".fondo").removeClass(nombre).addClass("fondo");
    clearInterval(interval)
}









