let habilidades: (string | boolean | number)[] = ['bash','healing','counter'];
habilidades.push('dps')
// mi array solo deve contener un solo dato


//objeto literal
//no usar tipo any
//las interfaces no existen en javascrip

interface Personaje {
   nombre: string;
   hp: number;
   habilidades : string[];
   puebloNatal?:string; // el ?: me ayuda a decir que una propiedad puede ser opcional y no deve ser declarada necesariamente
}
const personaje : Personaje = {
 nombre: 'ale',
 hp:100,
 habilidades:['Bash']

}

personaje.puebloNatal = 'pueblo paleta'