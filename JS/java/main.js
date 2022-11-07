
class Cliente{
    constructor(nombre, apellido,numero){
        this.nombre = nombre,
        this.apellido = apellido,
        this.numero = numero
    }
}
    const cliente1 = new Cliente(nombre = prompt("Ingresa tu nombre por favor"),apellido = prompt("Ingresa tu apellido"), numero = prompt("Ingresa tu numero"))
    alert("hola "+ cliente1.nombre + " "+ cliente1.apellido + " porfavor ingresa el numero del servicio que te interesa");

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



var newArray = [];
newArray.push(cliente1);


