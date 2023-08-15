document.addEventListener("DOMContentLoaded", function () {
    // Se obtiene referencias a los elementos de la interfaz
    const operand1 = document.getElementById("operand1");
    const operand2 = document.getElementById("operand2");
    const operator = document.getElementById("operator");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");

    // Agrega un evento de clic al botón de cálculo
    calculateBtn.addEventListener("click", function () {
        // Se obtiene los valores numéricos de los operandos
        const num1 = parseFloat(operand1.value);
        const num2 = parseFloat(operand2.value);

        // Valida si los operandos son números válidos
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Por favor, ingrese números válidos.";
        } else {
            let result;

            // Realizo la operación correspondiente según el operador seleccionado
            switch (operator.value) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        resultDiv.textContent = "No se puede dividir por cero.";
                        return;
                    }
                    break;
                default:
                    resultDiv.textContent = "Operador no válido.";
                    return;
            }

            // Validam si el resultado es demasiado grande o pequeño para ser mostrado
            if (result === Infinity || result === -Infinity) {
                resultDiv.textContent = "Resultado demasiado grande o pequeño para mostrarse.";
            } else {
                resultDiv.textContent = `Resultado: ${result}`;
            }
        }
    });
    // Agrego un evento de clic al botón de borrar
    clearBtn.addEventListener("click", function () {
        operand1.value = ""; // Borra el contenido del primer operando
        operand2.value = ""; // Borra el contenido del segundo operando
        resultDiv.textContent = ""; // Borra el resultado mostrado
    });
});