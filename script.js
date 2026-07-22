// Format info
const formatInfo = {
    'base64': 'Base64: یک روش رمزگذاری برای تبدیل داده‌های باینری به متن ASCII',
    'binary': 'Binary: تبدیل هر کاراکتر به معادل باینری (0 و 1)',
    'hex': 'Hex: تبدیل هر کاراکتر به معادل هگزادسیمال (مبنای 16)',
    'octal': 'Octal: تبدیل هر کاراکتر به معادل اکتال (مبنای 8)',
    'ascii': 'ASCII: تبدیل هر کاراکتر به کد عددی ASCII',
    'unicode': 'Unicode: تبدیل هر کاراکتر به کد Unicode',
    'morse': 'Morse Code: تبدیل متن به کد مورس',
    'url': 'URL Encode: رمزگذاری متن برای استفاده در URL',
    'superscript': 'Superscript: تبدیل اعداد و حروف به حالت بالانویس',
    'subscript': 'Subscript: تبدیل اعداد و حروف به حالت زیرنویس',
    'base32': 'Base32: یک روش رمزگذاری مشابه Base64 با 32 کاراکتر',
    'wingding': 'Wingding: تبدیل حروف انگلیسی به نمادهای Wingding'
};

// Morse code dictionary
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
    "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
    '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
    ' ': '/'
};

// Reverse morse
const reverseMorse = {};
for (let key in morseCode) {
    reverseMorse[morseCode[key]] = key;
}

// Superscript mapping
const superscriptMap = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
    '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', 'a': 'ᵃ', 'b': 'ᵇ',
    'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ',
    'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ',
    'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
    'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ', '+': '⁺',
    '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
};

// Subscript mapping
const subscriptMap = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅',
    '6': '₆', '7': '₇', '8': '₈', '9': '₉', 'a': 'ₐ', 'e': 'ₑ',
    'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ',
    'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ',
    'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ', '+': '₊', '-': '₋', '=': '₌',
    '(': '₍', ')': '₎'
};

// Wingding mapping
const wingdingMap = {
    'a': '✋', 'b': '✌', 'c': '☞', 'd': '☜', 'e': '👆', 'f': '👇',
    'g': '☝', 'h': '✍', 'i': '✎', 'j': '✏', 'k': '✐', 'l': '✑',
    'm': '✒', 'n': '✓', 'o': '✔', 'p': '✕', 'q': '✖', 'r': '✗',
    's': '✘', 't': '✙', 'u': '✚', 'v': '✛', 'w': '✜', 'x': '✝',
    'y': '✞', 'z': '✟', 'A': '✠', 'B': '✡', 'C': '✢', 'D': '✣',
    'E': '✤', 'F': '✥', 'G': '✦', 'H': '✧', 'I': '★', 'J': '☆',
    'K': '✩', 'L': '✪', 'M': '✫', 'N': '✬', 'O': '✭', 'P': '✮',
    'Q': '✯', 'R': '✰', 'S': '✱', 'T': '✲', 'U': '✳', 'V': '✴',
    'W': '✵', 'X': '✶', 'Y': '✷', 'Z': '✸'
};

// Reverse Wingding
const reverseWingding = {};
for (let key in wingdingMap) {
    reverseWingding[wingdingMap[key]] = key;
}

// Base32 encoding
function base32Encode(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    for (let i = 0; i < str.length; i++) {
        bits += str.charCodeAt(i).toString(2).padStart(8, '0');
    }
    let result = '';
    for (let i = 0; i < bits.length; i += 5) {
        const chunk = bits.substr(i, 5).padEnd(5, '0');
        result += alphabet[parseInt(chunk, 2)];
    }
    while (result.length % 8 !== 0) {
        result += '=';
    }
    return result;
}

function base32Decode(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    str = str.replace(/=/g, '');
    let bits = '';
    for (let i = 0; i < str.length; i++) {
        const val = alphabet.indexOf(str[i].toUpperCase());
        if (val === -1) continue;
        bits += val.toString(2).padStart(5, '0');
    }
    let result = '';
    for (let i = 0; i < bits.length; i += 8) {
        const chunk = bits.substr(i, 8);
        if (chunk.length === 8) {
            result += String.fromCharCode(parseInt(chunk, 2));
        }
    }
    return result;
}

// Conversion functions
const converters = {
    // Base64
    'base64': {
        encode: (str) => btoa(unescape(encodeURIComponent(str))),
        decode: (str) => decodeURIComponent(escape(atob(str)))
    },
    
    // Binary
    'binary': {
        encode: (str) => {
            return Array.from(str).map(char => 
                char.charCodeAt(0).toString(2).padStart(8, '0')
            ).join(' ');
        },
        decode: (str) => {
            return str.split(' ').map(bin => 
                String.fromCharCode(parseInt(bin, 2))
            ).join('');
        }
    },
    
    // Hex
    'hex': {
        encode: (str) => {
            return Array.from(str).map(char => 
                char.charCodeAt(0).toString(16).padStart(2, '0')
            ).join(' ');
        },
        decode: (str) => {
            return str.split(' ').map(hex => 
                String.fromCharCode(parseInt(hex, 16))
            ).join('');
        }
    },
    
    // Octal
    'octal': {
        encode: (str) => {
            return Array.from(str).map(char => 
                char.charCodeAt(0).toString(8).padStart(3, '0')
            ).join(' ');
        },
        decode: (str) => {
            return str.split(' ').map(oct => 
                String.fromCharCode(parseInt(oct, 8))
            ).join('');
        }
    },
    
    // ASCII
    'ascii': {
        encode: (str) => {
            return Array.from(str).map(char => char.charCodeAt(0)).join(' ');
        },
        decode: (str) => {
            return str.split(' ').map(code => 
                String.fromCharCode(parseInt(code))
            ).join('');
        }
    },
    
    // Unicode
    'unicode': {
        encode: (str) => {
            return Array.from(str).map(char => 
                'U+' + char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')
            ).join(' ');
        },
        decode: (str) => {
            return str.split(' ').map(code => 
                String.fromCodePoint(parseInt(code.replace('U+', ''), 16))
            ).join('');
        }
    },
    
    // Morse
    'morse': {
        encode: (str) => {
            return str.toUpperCase().split('').map(char => 
                morseCode[char] || char
            ).join(' ');
        },
        decode: (str) => {
            return str.split(' ').map(code => 
                reverseMorse[code] || code
            ).join('');
        }
    },
    
    // URL
    'url': {
        encode: (str) => encodeURIComponent(str),
        decode: (str) => decodeURIComponent(str)
    },
    
    // Superscript
    'superscript': {
        encode: (str) => {
            return str.split('').map(char => 
                superscriptMap[char] || char
            ).join('');
        },
        decode: (str) => {
            let result = '';
            for (let char of str) {
                let found = false;
                for (let key in superscriptMap) {
                    if (superscriptMap[key] === char) {
                        result += key;
                        found = true;
                        break;
                    }
                }
                if (!found) result += char;
            }
            return result;
        }
    },
    
    // Subscript
    'subscript': {
        encode: (str) => {
            return str.split('').map(char => 
                subscriptMap[char] || char
            ).join('');
        },
        decode: (str) => {
            let result = '';
            for (let char of str) {
                let found = false;
                for (let key in subscriptMap) {
                    if (subscriptMap[key] === char) {
                        result += key;
                        found = true;
                        break;
                    }
                }
                if (!found) result += char;
            }
            return result;
        }
    },
    
    // Base32
    'base32': {
        encode: (str) => base32Encode(str),
        decode: (str) => base32Decode(str)
    },
    
    // Wingding
    'wingding': {
        encode: (str) => {
            return str.split('').map(char => 
                wingdingMap[char] || char
            ).join('');
        },
        decode: (str) => {
            let result = '';
            for (let char of str) {
                result += reverseWingding[char] || char;
            }
            return result;
        }
    }
};

// DOM elements
const formatSelect = document.getElementById('format-select');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
const infoText = document.getElementById('info-text');

// Update info text
function updateInfo() {
    const format = formatSelect.value;
    infoText.textContent = formatInfo[format];
}

// Encode button
encodeBtn.addEventListener('click', () => {
    const format = formatSelect.value;
    const input = inputText.value;
    
    if (!input) {
        outputText.value = '';
        return;
    }
    
    try {
        outputText.value = converters[format].encode(input);
    } catch (e) {
        outputText.value = 'خطا در تبدیل: ' + e.message;
    }
});

// Decode button
decodeBtn.addEventListener('click', () => {
    const format = formatSelect.value;
    const input = inputText.value;
    
    if (!input) {
        outputText.value = '';
        return;
    }
    
    try {
        outputText.value = converters[format].decode(input);
    } catch (e) {
        outputText.value = 'خطا در تبدیل: ' + e.message;
    }
});

// Format change
formatSelect.addEventListener('change', updateInfo);

// Initial info
updateInfo();