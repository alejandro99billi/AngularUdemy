
//encadenamiento opcional

interface Pasajero {
    nombre : string,
    hijos?: string[]
}

const pasajero1: Pasajero={
nombre: 'Fer',
}

const pasajero2: Pasajero={
    nombre : 'ale',
    hijos: ['mell','kevin']
}

function impremiHijos(pasajero: Pasajero): void{
    
    const cuantosHijos = pasajero.hijos?.length || 0; //este valor sera undefined es el secure operador si no hay nada lo deja como undefined
    console.log('cuantosHijos')
}

impremiHijos(pasajero1)