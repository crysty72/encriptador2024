
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    var textInput = document.getElementById('textInput');
    var encryptButton = document.getElementById('encryptButton');
    var decryptButton = document.getElementById('decryptButton');
    var resultBox = document.getElementById('resultBox');

    // Agregar eventos a los botones
    encryptButton.addEventListener('click', function () {
        var originalText = textInput.value;
        var encryptedText = encryptText(originalText);
        displayResult(encryptedText);
    });

    decryptButton.addEventListener('click', function () {
        var encryptedText = textInput.value;
        var decryptedText = decryptText(encryptedText);
        displayResult(decryptedText);
    });

    // Función para encriptar texto
    function encryptText(text) {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    }

    // Función para desencriptar texto
    function decryptText(text) {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }

    // Función para mostrar el resultado en la pantalla
    function displayResult(result) {
        resultBox.textContent = result;
    }
});

// script.js

function copiarResultado() {
    // Assuming 'resultBox' is the id of the element you want to copy
    var resultado = document.getElementById('resultBox').innerText;

    // Copy the text to the clipboard (modern browsers)
    navigator.clipboard.writeText(resultado).then(function() {
        // Alert when successfully copied
        alert('Resultado copiado al portapapeles: ' + resultado);
    }).catch(function(err) {
        // Handle errors
        console.error('Error al copiar al portapapeles: ', err);
        // You can also display an alert for the error if needed
        alert('Error al copiar al portapapeles. Por favor, intente nuevamente.');
    });
}









