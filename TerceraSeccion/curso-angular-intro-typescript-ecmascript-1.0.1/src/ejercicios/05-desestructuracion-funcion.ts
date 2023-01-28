 export interface Producto{  //devo exportarla para que otros archivos lo puedan usar
    desc:string;
    precio: number;
} 

const telefono  :Producto ={
desc : 'ipad3',
precio: 100
}
const tableta :Producto ={
    desc : 'ipad',
    precio: 150
    }
    

export function calculaImps(productos: Producto[],):[ number, number]{
    let total = 0; 
    productos.forEach(({precio})=>{ //puedo meter el atributo de productos
        total += precio
    })
    return [total,total * 0.15]
}
const articulos =[telefono,tableta]
const [total ,isv] = calculaImps(articulos);
console.log('ISV',isv);
console.log('Total', total)