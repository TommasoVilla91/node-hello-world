// Obiettivo: Calcolare quante vocali ci sono in una stringa fornita come argomento.
// Lo script deve accettare una parola o frase come argomento dal terminale.
// Calcolare e stampare quante vocali (a, e, i, o, u) sono presenti nella stringa.

const argString = process.argv[2];

const vowels = string => {

    const vowelsArray = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    
    for (let i = 0; i < string.length; i ++) {
        if(vowelsArray.includes(string[i])) {
            vowelCount++;
        };
    };
    return vowelCount;
};    

console.log(vowels(argString));



