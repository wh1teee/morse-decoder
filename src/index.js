const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here

    let result = ''

    let exprArr = expr.split('')
    let exprArrSort = []
    for (let i = 0; i < expr.length / 10; i++) {
        exprArrSort.push(exprArr.splice(0, 10).join('')
        )
    }
    console.log('exprArr: ');
    console.log(exprArrSort);


    exprArrSort.map((item, index) => {

        let letter = item.split('');
        let morseKey = ''
        for (let i = 0; i <= item.length / 2; i++) {
            if (item == '**********') {
                result += ' '
                break
            }
            let gg = letter.splice(0, 2).join('')
            if (gg == '10') {
                morseKey += '.'
            }
            if (gg == '11') {
                morseKey += '-'
            }

        }

        for (let key in MORSE_TABLE) {
            if (key == morseKey) {
                result += MORSE_TABLE[key];
            }
        }

    })
    return result
}

decode('000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110')

module.exports = {
    decode
}