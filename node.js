const input = document.getElementById('text');

function properCase(text) {
    return text.length > 0 ? text[0].toUpperCase() + text.substring(1) : text;
}

function sentenceCase(text) {
    return text.split(". ").map(line => properCase(line)).join(". ")
}

// Upper case
document.getElementById('upper-case').addEventListener('click', function () {
    input.value = input.value.toUpperCase();
});

// Lower case
document.getElementById('lower-case').addEventListener('click', function () {
    input.value = input.value.toLowerCase();
});

// Proper case
document.getElementById('proper-case').addEventListener('click', function () {
    const text = input.value.toLowerCase()

    input.value = sentenceCase(text.split(" ").map(word => properCase(word)).join(" "))
});

// Sentence case
document.getElementById('sentence-case').addEventListener('click', function () {
    input.value = sentenceCase(input.value.toLowerCase())
});

// Save text file

document.getElementById('save-text-file')
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("text").value;
    let filename = "text.txt"
    download(filename ,text);
}, false);