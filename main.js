class ProductoEnVenta {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const Producto1 = new ProductoEnVenta('mancuernas', '$7500');
const Producto2 = new ProductoEnVenta( 'Barreras', '$8000');
const Producto3 = new ProductoEnVenta('Discos', '$6000');

const listaDeProductos = [];

listaDeProductos.push(Producto1, Producto2, Producto3);

console.log(Producto1);
console.log(Producto2);
console.log(Producto3);