//desestructuracion de objectos

interface Reproductor{
    volumen : number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor:string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 100,
    segundo : 36,
    cancion : 'umbrella',
    detalles:{
        autor: 'Rihana',
        year:2015
    }
}

const autor  = 'fulano' 
const {volumen,segundo,cancion,detalles:{autor: autorDetalle}}= reproductor; // toma el objeto el reporductor y sys propiedades seran constante
//const{autor} = detalles; dos maneras de destructurar un objeto anidado es mejor usar esta
console.log('El volumen actual es de: ' + '' ,reproductor.volumen)
console.log(reproductor.segundo)
console.log(autorDetalle)

//--------------------------------------
//desustructuracion de arreglos
//lo hago con llaves cuadradas
//el orden si importa 

const dbz: string[] = ['Goku','Vegeta','Trunks']
const [p1,,p3] = dbz; // no estoy usando la segunda posicion

console.log('Personaje : ', dbz[p1]);
console.log('Personaje : ', dbz[p3]);