
const fs = require('fs')
const color = require('colors')

const crearArchivo = async (base = 5, listar, hasta) => {

    try {
        let salida = '';

        for (i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${i * base}\n`
        }

        if (listar === true) {
            console.log("===============".rainbow);
            console.log(`Tabla de ${base}`.bold);
            console.log("===============".rainbow);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt creado.`

    } catch (err) {
        throw err
    }


}

module.exports = {
    crearArchivo
}