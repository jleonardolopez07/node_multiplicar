const argv = require('./yargs').argv;

const { crearArchivo, crearLista } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        crearLista(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

console.log(argv);
//let base = '9';



console.log(argv.base);
console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);