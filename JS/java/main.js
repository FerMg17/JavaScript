
function pedirNombre () {

    const cliente = prompt("Ingresa tu nombre por favor");
   
    alert("hola "+ cliente + " porfavor ingresa el numero del servicio que te interesa");
};

pedirNombre();
 do{
    var opcion = prompt("1. Corte de hombre  2. Recorte barba y bigote     3. Corte Mujer   4.Tinte");
 }
 while(opcion < 1 || opcion > 4);

 switch(opcion)
 {
    case "1":
        alert("El servicio de corte de pelo es de $200");
        break;
        case "2":
            alert("El servicio de recorte barba y bigote es de $250");
            break;
            case "3":
                alert("El servicio de corte de mujer esta en $300");
                break;
                case "4":
                    alert("El servicio de tinte es de $800");
                    break;
                    default:
                        alert("ingresaste un servicio con el cual aun no contamos");
                        break;
 }





