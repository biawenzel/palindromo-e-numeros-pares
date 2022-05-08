//solução 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente"; //ou seja, string tem que ser true (não pode ser empty, null ou undefined)

    return string.split("").reverse().join("") === string;
    //qnd damos split, a var vira array, aí podemos usar o reverse
}

//solução 2
// omo 
// 012
// abba
// 0123

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) { // indice da string começa no 0 e enquanto for menor que o tamanho total da string, ele vai somando +1 no índice; /2 pq vamos verificar metade (2 letras de cada vez)
        if(string[i] !== string[string.length -1 -i]) {
            return false;
        }       
    }

    return true;
}
console.log(verificaPalindromo2("abba"));

