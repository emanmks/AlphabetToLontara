console.log("Standby to convert alphabet to lontara symbols");

const bugineseMap = {
    'nga': 'ᨂ',
    'ha': 'ᨖ',
    'ka': 'ᨀ',
    'la': 'ᨒ',
    'ma': 'ᨆ',
    'ba': 'ᨅ',
    'na': 'ᨊ',
    'pa': 'ᨄ',
    'qa': 'ᨀ',
    'ra': 'ᨑ',
    'sa': 'ᨔ',
    'ta': 'ᨈ',
    'ua': 'ᨘ',
    'va': 'ᨓ',
    'wa': 'ᨓ',
    'ya': 'ᨐ',
    'za': 'ᨔ',
    'da': 'ᨉ',
    'e': 'ᨙᨕ',
    'i': 'ᨗ',
    'o': 'ᨚ',
    'u': 'ᨘ',
    'w': 'ᨓ',
    'y': 'ᨐ',
    'z': 'ᨔ',
    'a': 'ᨕ',
};

const sortedKeys = Object.keys(bugineseMap).sort((a, b) => b.length - a.length);

const input = document.getElementById("input");
const target = document.getElementById("result");

function convertToBuginese(text) {
    let converted = '';
    let currentText = text.toLowerCase();

    while (currentText.length > 0) {
        let matched = false;

        // Try to match the longest possible pattern
        for (const pattern of sortedKeys) {
            if (currentText.startsWith(pattern)) {
                converted += bugineseMap[pattern] + ' ';
                currentText = currentText.slice(pattern.length);
                matched = true;
                break;
            }
        }

        // If no pattern matched, keep the character as is
        if (!matched) {
            if (currentText[0] === ' ') {
                converted += ' ';
            }
            currentText = currentText.slice(1);
        }
    }

    return converted.trim();
}

input.addEventListener("input", function() {
    const inputText = this.value;
    const words = inputText.split(/\s+/);
    const convertedText = words.map(word => convertToBuginese(word));
    console.log("Converted text: ", convertedText);
    target.textContent = convertedText;
});