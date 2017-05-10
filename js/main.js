var productos = [
{
	nombre : 'pijama', 
	tipo: 'ropa'}
},
{
	nombre : 'nevera', 
	tipo: 'electrodoméstico'}
},
{
	nombre : 'asus', 
	tipo: 'computador'}
},
{
	nombre : 'macbook', 
	tipo: 'computador'}
},
{
	nombre : 'pijama', 
	tipo: 'ropa'}
},
{
	nombre : 'toshiba', 
	tipo: 'computador'}
},
];

//Imperativa

var computadores = []; 
for(var i = 0; i< productos.length; i++){
	if(productis[i].tipo === 'computador'){
		computadores.push(productos[i]);
	}
}
