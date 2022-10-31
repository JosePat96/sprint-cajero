let usuarios = [
    {
        nombre:"Jose Jose",
        documento: 234567 ,
        password: 1212 ,
        tipoDeUsuario: 1 ,

    } ,
    {
        nombre:"Juan Perez",
        documento: 345678 ,
        password: 1313 , 
        tipoDeUsuario: 2 ,

    } ,
    
]

let sumaDe5 = 0
let sumaDe10 = 0
let sumaDe20 = 0
let sumaDe50 = 0
let sumaDe100 = 0
let total = 0

let dineroIngresado = []

let ingreso = false

//iniciarSesion()

function moneyIn() {
    dineroIngresado = [] ;

    let billeteDe100 = parseInt(prompt("Digite La Cantidad De Billetes De 100 A Ingresar"))
    sumaDe100 = sumaDe100 + billeteDe100
    dineroIngresado.push({denominacion:100,cantidad:sumaDe100})
    
    let billeteDe50 = parseInt(prompt("Digite La Cantidad De Billetes De 50 A Ingresar"))
    sumaDe50 = sumaDe50 + billeteDe50
    dineroIngresado.push({denominacion:50,cantidad:sumaDe50})
    
    let billeteDe20 = parseInt(prompt("Digite La Cantidad De Billetes De 20 A Ingresar"))
    sumaDe20 = sumaDe20 + billeteDe20
    dineroIngresado.push({denominacion:20,cantidad:sumaDe20})
    
    let billeteDe10 = parseInt(prompt("Digite La Cantidad De Billetes De 10 A ingresar"))
    sumaDe10 = sumaDe10 + billeteDe10
    dineroIngresado.push({denominacion:10,cantidad:sumaDe10})
    
    let billeteDe5 = parseInt(prompt("Digite La Cantidad De Billetes De 5 A Ingresar"))
    sumaDe5 = sumaDe5 + billeteDe5
    dineroIngresado.push({denominacion:5,cantidad:sumaDe5})
    
    mostrarBilletes()
}

function mostrarBilletes(){
    let totalDe100 = dineroIngresado[0].cantidad
    let totalDe50 =  dineroIngresado[1].cantidad
    let totalDe20 = dineroIngresado[2].cantidad
    let totalDe10 = dineroIngresado[3].cantidad
    let totalDe5 = dineroIngresado[4].cantidad
    total = (totalDe100*100) + (totalDe50*50) + (totalDe20*20) + (totalDe10*10) + (totalDe5*5) 
    
    
    console.log("SALDO DISPONIBLE:");
    console.log(`${totalDe100} billetes de 100: ${totalDe100*100}`); 
    console.log(`${totalDe50} billetes de 50: ${totalDe50*50}`); 
    console.log(`${totalDe20} billetes de 20: ${totalDe20*20}`); 
    console.log(`${totalDe10} billetes de 10: ${totalDe10*10}`); 
    console.log(`${totalDe5} billetes de 5: ${totalDe5*5}`);  
    console.log(`total: ${total}`); 

    iniciarSesion()
    
}

function ingresoCliente() {
    let valorRetiradoDe100 = 0
    let valorRetiradoDe50 = 0
    let valorRetiradoDe20 = 0
    let valorRetiradoDe10 = 0
    let valorRetiradoDe5 = 0

    if (total == 0){
        console.log("Cajero en mantenimiento vuelva pronto")
        iniciarSesion()
    } else {
        let dineroARetirar = parseInt(prompt("Digite La Cantidad Deseada A Retirar"))
        if (dineroARetirar <= total) {
            dineroIngresado.forEach(function (billete){
                if (Math.floor(dineroARetirar/billete.denominacion)>0) {
                    if (billete.denominacion== 100) {
                        if (billete.cantidad != 0){
                            valorRetiradoDe100= Math.floor(dineroARetirar/billete.denominacion)
                            console.log(valorRetiradoDe100);
                            billete.cantidad -= valorRetiradoDe100
                        }
                    }else if(billete.denominacion== 50){
                        if (billete.cantidad != 0){
                            valorRetiradoDe50= Math.floor(dineroARetirar/billete.denominacion)
                            console.log(valorRetiradoDe50);
                            billete.cantidad -= valorRetiradoDe50
                        }
                    }else if(billete.denominacion== 20){
                        if (billete.cantidad != 0){
                            valorRetiradoDe20= Math.floor(dineroARetirar/billete.denominacion)
                            console.log(valorRetiradoDe20);
                            billete.cantidad -= valorRetiradoDe20
                        }
                    }else if(billete.denominacion== 10){
                        if (billete.cantidad != 0){
                            valorRetiradoDe10= Math.floor(dineroARetirar/billete.denominacion)
                            console.log(valorRetiradoDe10);
                            billete.cantidad -= valorRetiradoDe10
                        }
                    }else if(billete.denominacion== 5){
                        if (billete.cantidad != 0){
                            valorRetiradoDe5= Math.floor(dineroARetirar/billete.denominacion)
                            console.log(valorRetiradoDe5);
                            billete.cantidad -= valorRetiradoDe5
                        }
                    }
                    dineroARetirar= dineroARetirar%billete.denominacion  
                }
            })
            mostrarBilletes()
        } else {
            alert("Cajero en mantenimiento, vuelva nuevamente")
            iniciarSesion()
        }
        
    }
            

        }
    





function iniciarSesion() {

    do {
        let numDocumento = parseInt(prompt(" Bienvenido digite el documento"))
        let pass = prompt("Bienvenido digite el password")

        if (numDocumento == usuarios[0].documento && pass == usuarios[0].password){
            moneyIn()
            ingreso = true
        } else if (numDocumento == usuarios[1].documento && usuarios[1].password){
            ingresoCliente()
            ingreso = true
        } else {
            alert("el usuario no existe")
        }
        
    } while (ingreso == false);
}


