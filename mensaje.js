document.getElementById('nForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor de 'n' ingresado por el usuario
    let n = parseInt(document.getElementById('nValue').value);
    
    // Calcular la aproximación de Stirling para n!
    let Stirling_aprox = Math.sqrt(2 * Math.PI * n) * Math.pow((n / Math.E), n);

    // Calcular el valor real de n! utilizando una función factorial
    let real_valor = factorial(n);

    // Calcular el error relativo
    let error = (real_valor - Stirling_aprox) / real_valor;

    // Mostrar los resultados en el documento
    document.getElementById('resultado').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Aproximación de Stirling para ${n}!: </strong>${Stirling_aprox.toFixed(2)}</p>
        <p><strong>Valor real de ${n}! calculado: </strong>${real_valor}</p>
        <p><strong>Error relativo: </strong>${error.toFixed(4)}</p>
    `;
});

// Definir la función factorial
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
