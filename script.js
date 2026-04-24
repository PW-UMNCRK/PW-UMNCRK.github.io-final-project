// Constants
const KM_PER_AU = 149597871;
const MI_PER_AU = 92955807;

// 1. Select the elements
const unitEl = document.getElementById('unit-dropdown');
const outputEl = document.getElementById('value-output');
const baseDistanceAU = parseFloat(outputEl.innerText);

function updateDisplay() {
    const selectedUnit = unitEl.value;
    let finalValue;

    if (selectedUnit === 'km') {
        finalValue = baseDistanceAU * KM_PER_AU;
    } else if (selectedUnit === 'miles') {
        finalValue = baseDistanceAU * MI_PER_AU;
    } else {
        finalValue = baseDistanceAU;
    }

    
    outputEl.innerText = finalValue.toLocaleString(undefined, {
        maximumFractionDigits: 1 
    });
}


unitEl.addEventListener('change', updateDisplay);
