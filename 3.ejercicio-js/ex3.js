/* Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

No se permite utilizar el método parseInt().
 */

function toDecimal(string) {
    if (string.length === 1) return string;
    return (
        2 ** (string.length - 1) * string.slice(0, 1) +
        Number(toDecimal(string.slice(1)))
    );
}

function toBinary(number) {
    if (number < 2) return number.toString();
    return (
        toBinary(Math.floor(number / 2)).toString() + (number % 2).toString()
    );
}

function conversion(number, base) {
    if (base === 2) console.log(toBinary(number));
    if (base === 10) console.log(toDecimal(number.toString()));
}

conversion(7, 2);
conversion(1, 2);
conversion(0, 2);
conversion(9, 2);
conversion(111, 10);
conversion(1, 10);
conversion(0, 10);
conversion(1001, 10);
