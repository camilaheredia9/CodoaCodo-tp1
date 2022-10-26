let txtMonto = document.getElementById('txt_monto');
let btnBorrar = document.getElementById('btn-borrar');
let btnResumen = document.getElementById('btn-resumen');

btnResumen.addEventListener(
    'click',
    function calcularMonto(){
        let cantidadTickets = document.getElementById('input-cantidad').value;
        let select = document.getElementById('categoria');
        let nombreCategoria = select.options[select.selectedIndex].text;
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
)