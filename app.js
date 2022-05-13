//Solicitarle al usuario el numero de rondas a jugar
let rondas = parseInt(prompt("¿Cuantas rondas quiere jugar?"))

//Parametro inicial contador de rondas
let x = 1

//Ciclo de Rondas
while (x <= rondas) {
    let respuestaUser = prompt(`
    Elija su jugada: 
    ✊: Piedra
    ✋: Papel
    ✌: Tijera
    Ingrese el emoji de la jugada
`)

//Seleccion de la Maquina
    let maquina = Math.floor(Math.random()*3)
    if (maquina == 0) {
        maquina = "✊"
    } else if (maquina == 1) {
        maquina = "✋"
    } else {
        maquina = "✌"
    }

//Funcion lucha entre humano y maquina
    function lucha(rhumano, rmaquina) {
        switch (rhumano) {
            case "✊": if (rmaquina == rhumano) {
                console.log("EMPATE: " + rhumano + " v/s " + rmaquina)
            } else if (rmaquina != "rhumano"){
                if (rmaquina == "✌") {
                    console.log("GANASTE: " + rhumano + " v/s " + rmaquina)
                } else {
                    console.log("PERDISTE: " + rhumano + " v/s " + rmaquina)
                }
            } 
            break;

            case "✋": if (rmaquina == rhumano) {
                console.log("EMPATE: " + rhumano + " v/s " + rmaquina)
            } else if (rmaquina != "rhumano"){
                if (rmaquina == "✌") {
                    console.log("PERDISTE: " + rhumano + " v/s " + rmaquina)
                } else {
                    console.log("GANASTE: " + rhumano + " v/s " + rmaquina)
                }
            } 
            break;
              
            case "✌": if (rmaquina == rhumano) {
                console.log("EMPATE: " + rhumano + " v/s " + rmaquina)
            } else if (rmaquina != "rhumano"){
                if (rmaquina == "✊") {
                    console.log("PERDISTE: " + rhumano + " v/s " + rmaquina)
                } else {
                    console.log("GANASTE: " + rhumano + " v/s " + rmaquina)
                }
            } 
            break;

            default:
                break;
        }
    }

//Resultados
    const resultado = lucha(respuestaUser, maquina)
    console.log(resultado)
    

//Suma Contador de Rondas
    x++
}





