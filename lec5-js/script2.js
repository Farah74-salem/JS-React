function filterText(text) {
    if (!text) return "";
    let cleanedText = text.replace(/[^\w\s\u0600-\u06FF]/g, '');

    cleanedText = cleanedText.trim().replace(/\s+/g, ' ');
    return cleanedText;
}

let userMessage = "  الهندسةةة  @  الهكررررر   #   محمد   أبو //// القمبز   $$$  ";
let result = filterText(userMessage);

console.log(result); 