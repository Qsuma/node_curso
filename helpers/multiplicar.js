const fs = require("fs");
var colors = require('colors');









const crearArchivo = async (base = 1,listar = false) => {
  let salida = "";
  try {
    for (let i = 1; i < 11; i++) {
      salida += ` ${base} x ${i} = ${base * i} \n`;
    }
  if (listar) console.log( salida.rainbow);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.green;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo: crearArchivo,
};
