// decoradores de clases  sirven para cambiar las clases en el momento que son definidas
//extende internamente las funcionalidades que queremos implementar
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator //devo abilitar el uso de declarations en el json.config
class MiSuperClase{
    public miPropiedad :string = 'ABCD'
    imprimir(){
        console.log('Hola Mundo');
    }
}

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad)
