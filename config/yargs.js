const argv = require("yargs")
  .option('b', {
    alias: 'base',
    type: 'number',
    requiresArg: true,
    description:'Es el numero a multiplicar'
  }).option(
    'l',{
      alias :'listar',
      type:'boolean',
      requiresArg: false,
      default: false,
      description : 'mostrar o no la lista',
    }
  )
  .check( (argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true
  }).argv;
  module.exports = argv