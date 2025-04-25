const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs")

  
console.clear();



// const [,,arg3='base=5'] =process.argv
// const [ ,base]= arg3.split('=')

// console.log(parseInt(base))

//const base = 2;
crearArchivo(argv.b,argv.l) 
  .then((nombreArchivo) => console.log(nombreArchivo, "creado".green))
  .catch((err) => console.log(err));
