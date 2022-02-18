const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( multiplicador = 5, l, h=10 ) => {

    try {
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= h; i++) {
            salida += `${multiplicador} ${colors.green('x')} ${i} = ${colors.red(multiplicador * i)}\n`;
            consola += `${multiplicador} x ${i} = ${multiplicador * i}\n`;
        }
        
        if (l){
            console.log('==================='.rainbow);
            console.log('TABLA DEL '.cyan, `${colors.green(multiplicador)}`)
            console.log('==================='.rainbow);
            console.log(salida)
        }

        fs.writeFileSync(`tabla-${multiplicador}.txt` , consola);
        return `tabla-${multiplicador}.txt`;
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}