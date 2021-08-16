 var imagenes = [];

 imagenes["100"] = "100d.png";
 imagenes["50"] = "50d.png";
 imagenes["20"] = "20d.png";
 imagenes["10"] = "10d.png";
 imagenes["5"] = "5d.png";

 class billete{

 	constructor(v,c,d){


        this.imagen = new Image();
 		this.valor = v;
 		this.cantidad = c;
 		this.f = d;
 		this.imagen.src = imagenes[this.f];

 	}

    mostrarimg(){

        document.body.appendChild(this.imagen);

    }

 }

 
 var entregado = [];
 

 var caja = [];
 caja.push(new billete(100, 5, "100"));
 caja.push(new billete(50, 10, "50"));
 caja.push(new billete(20, 15, "20"));
 caja.push(new billete(10, 20, "10"));
 caja.push(new billete(5, 20, "5"));




 var dinero = 0;
 var div = 0;
 var papeles = 0;


 var b = document.getElementById("extraer");
 b.addEventListener("click", entregarDinero);

 var result = document.getElementById("result");


 function entregarDinero(){

 	var t = document.getElementById("dinero");
 	dinero = parseInt(t.value);

 	for(var b of caja){

 		if(dinero > 0){

 			div = Math.floor(dinero/b.valor);

 			if(div > b.cantidad){

 				papeles = b.cantidad;
 			}

 			else{

 				papeles = div;
 			}

 			entregado.push(new billete(b.valor, papeles, b.f));

 			dinero = dinero - (b.valor * papeles);
 		}
 	}
 	
 	if(dinero > 0){

 		result.innerHTML = "Soy un cajero pobre y no tengo dinero";

 	}
 	
 	else{

 		for (var e of entregado){
 			
 			if(e.cantidad > 0){

 				result.innerHTML += e.cantidad + " billetes de " + e.valor + "$" + "<br />";
                e.mostrarimg();
            }
 		}
 	}
 }

 