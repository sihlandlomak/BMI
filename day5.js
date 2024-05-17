
        document.getElementById('bmi ').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get input values
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);

            // Calculate BMI
            var bmi = calculateBMI(weight, height);

            // Display result
            displayResult(bmi);
        });

        function calculateBMI(weight, height) {
            return weight / (height * height);
        }

        function displayResult(bmi) {
            var resultElement = document.getElementById('result');
            resultElement.innerHTML = '';

            var bmiCategory;
            if (bmi < 18.5) {
                bmiCategory = 'Underweight';
            } else if (bmi < 24.9) {
                bmiCategory = 'Normal weight';
            } else if (bmi < 29.9) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }

            var resultMessage = `Your BMI is ${bmi.toFixed(2)}. You are ${bmiCategory}.`;
            resultElement.textContent = resultMessage;
        }
   