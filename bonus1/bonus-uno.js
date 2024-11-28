// Obiettivo: Scrivere uno script che verifica se un numero è pari o dispari.
// Lo script deve accettare un numero come argomento dal terminale.
// Stampare "Pari" se il numero è divisibile per 2, altrimenti "Dispari".

const argNum = parseInt(process.argv[2]);

if (typeof argNum !== "number") {
    console.log(`This is not a number!`);    
} else {
    if (argNum % 2 === 0) {
    console.log(`Pari`);    
    } else {
        console.log(`Dispari`);    
    };
};
