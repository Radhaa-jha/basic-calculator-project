const display = document.querySelector('.display');
        let memory = 0;

        // Display functions
        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        // Calculation functions
        function calculate() {
            try {
                let expression = display.value
                    .replace(/%/g, '*0.01')
                    .replace(/²/g, '**2')
                    .replace(/³/g, '**3');
                display.value = eval(expression);
            } catch (error) {
                display.value = 'Error';
            }
        }

        // Memory functions
        function updateMemoryDisplay() {
            document.getElementById('memory-value').textContent = memory;
        }

        function memoryClear() {
            memory = 0;
            updateMemoryDisplay();
        }

        function memoryRecall() {
            appendToDisplay(memory);
        }

        function memoryAdd() {
            memory += parseFloat(display.value) || 0;
            updateMemoryDisplay();
        }

        function memorySubtract() {
            memory -= parseFloat(display.value) || 0;
            updateMemoryDisplay();
        }

        // Scientific functions
        function sqrt() {
            const value = parseFloat(display.value);
            if (value >= 0) {
                display.value = Math.sqrt(value);
            } else {
                display.value = 'Error';
            }
        }

        function square() {
            const value = parseFloat(display.value);
            display.value = value ** 2;
        }

        function cube() {
            const value = parseFloat(display.value);
            display.value = value ** 3;
        }

        function percentage() {
            const value = parseFloat(display.value);
            display.value = value / 100;
        }

        // Keyboard support
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (key >= '0' && key <= '9' || '+-*/%.()'.includes(key)) {
                appendToDisplay(key);
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'Escape') {
                clearDisplay();
            }
        });