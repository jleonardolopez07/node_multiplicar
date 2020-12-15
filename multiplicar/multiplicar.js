const fs = require('fs');

let crearLista = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${base}*${i}=${base*i}\n`);
    }
};




let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero `);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base}*${i}=${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla${base}_limite_de ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla${base}_limite_de ${limite}.txt`);
        });
    });

}
module.exports = {
    crearArchivo,
    crearLista
}

// otra forma de crear el objeto para el modulo global seria:
// module.exports.crearArchivo = (base) =>{.....}