class Cliente {
    constructor(nombre, telefono,servicio) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.servicio  = servicio;
    }
   
}

const cliente1 = new Cliente(nombre = prompt("Cual es tu nombre"), telefono = prompt("Cual es tu telefono"), servicio = prompt("Que servicio es el que buscas?"));

alert("Hola "+ cliente1.nombre + "  bienvenido tu telefono es el " + cliente1.telefono + " y el servicio que buscas es " + cliente1.servicio + " en un momento te atendemos gracias por la espera.");

