function crearUsuario() {
    // Crea una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
  this.usuario=02021
  this.nombre="lorenzo"
  this.email="aaabb@gmail.com"
  this.password=145891
  this.saludar=function(){
    return "hola mi nombre es "+ this.nombre
  }
  }
  var usuario = new crearUsuario()
console.log(usuario)
console.log(usuario.saludar())


  function creaObj() { 
    // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
    // Los datos, son nombre, apellido y dni
    // Tu código:
    this.nombre="aaa"
    this.apellido="bbb"
    this.dni=241514
  }
  var datospersona= new creaObj()
  var datospersona2= new creaObj()
  var datospersona3= new creaObj()
  console.log(datospersona)
  console.log(datospersona2)
  console.log(datospersona3)

  function creaObj2(nombre,apellido,dni) { 
    // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
    // Los datos, son nombre, apellido y dni
    // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
    // Tu código:
    this.nombre=nombre
    this.apellido=apellido
    this.dni=dni
  }
  var alonso=new creaObj2("fernando","alonso",357108)
  var maxi=new creaObj2("maximiliano","aaaa",5277845)
console.log(alonso)
console.log(maxi)

  function Computador() { 
    // Deben crear una funcion constructora
    // Los datos son, id, marca, procesador, ram, ssd.
    // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
    // La funcion debe estar echa dentro de la funcion constructora.
    // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
    // Tu código:
console.log("Su pc esta iniciando");
  this.specs=function(alias,marca,core,ram,ssd){
    this.alias=alias;
    this.marca=marca;
    this.core=core;
    this.ram=ram;
    this.ssd=ssd;
    return "Su alias es "+this.alias+",la marca de su pc es: "+ this.marca +" con un core "+ this.core+" con "+this.ram+" ram y "+this.ssd
  }
 
  }
  var alias= new Computador()
  console.log(alias)
  console.log(alias.specs(48293,"Hp","intel i5 10505","16 GB","500 GB de ssd"))