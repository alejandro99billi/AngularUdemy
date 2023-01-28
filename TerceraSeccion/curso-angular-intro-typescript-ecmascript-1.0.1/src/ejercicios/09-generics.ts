//Generics

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([100,20,20,10]);
let soyExplicito = queTipoSoy<number>(100 );
