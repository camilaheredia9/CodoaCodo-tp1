let txtMonto = document.getElementById('txt_monto');
let btnBorrar = document.getElementById('btn-borrar');
let btnResumen = document.getElementById('btn-resumen');

let cantidadTickets = document.getElementById('input-cantidad').value;
let select = document.getElementById('categoria');
let indiceCategoria = select.selectedIndex;
let nombreCategoria = select.options[indiceCategoria].text;

btnResumen.addEventListener(
    'click',
    function(){
        calcularMonto();
    }
)

function calcularMonto(){
    let totalPagar;

    switch(nombreCategoria){
        case "Estudiante":
            totalPagar = (200 - (200 * 0.8)) * cantidadTickets;
            break;   
        case "Trainee":
            totalPagar = (200 - (200 * 0.5)) * cantidadTickets;
            break;
        default:
            totalPagar = (200 - (200 * 0.15)) * cantidadTickets;
            break;
    }

    txtMonto.innerText = `$ ${totalPagar}`;
}