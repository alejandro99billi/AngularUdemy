import { calculaImps, Producto } from "./05-desestructuracion-funcion";// lo pone en la misma liena xq esta en la smisma liena

const carritoCompras : Producto[] = [
    {
        desc:'telefono 1',
        precio: 100,
    },
    {
        desc:'telefonpo 2',
        precio: 200
    }
];

const [total,isv]= calculaImps(carritoCompras);
console.log('Total', total)
console.log('ISV',isv)
