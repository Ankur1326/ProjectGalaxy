// html selectors 
const widthInputElem = document.getElementById('weight');
const heightInputElem = document.getElementById('height');
const container = document.querySelector('.container');
const bmiElem = document.querySelector(".bmi");
const bmiCategoryElem = document.querySelector('p span')


// calculate bmi 
let calculatedBmiValue;
const calculateBmi = () => {
    const weight = widthInputElem.value;
    const height = heightInputElem.value;
    const bmi = weight / (height * height) //// bmi in kg/cm*cm
    calculatedBmiValue = (bmi * 10000).toFixed(1);
}

function checkCategory(value) {
    if(isFinite(value)) {
        if(value <= 18.5) {
            bmiCategoryElem.style.color = '#625301';
            bmiElem.style.color = '#625301';
            bmiElem.style.borderColor = '#625301';
            return 'Thinness';
        } else if(value >= 18.5 && value <= 24.9) {
            bmiCategoryElem.style.color = '#2ca1bc';
            bmiElem.style.color = '#2ca1bc';
            bmiElem.style.borderColor = '#2ca1bc';
            return 'Underweight';
        } else if(value >= 25.0 && value <= 29.9) {
            bmiCategoryElem.style.color = '#8a4f02';
            bmiElem.style.color = '#8a4f02';
            bmiElem.style.borderColor = '#8a4f02';
            return 'Overweight';
        }
        else if(value >= 30.0) {
            bmiCategoryElem.style.color = '#b00';
            bmiElem.style.color = '#b00';
            bmiElem.style.borderColor = '#b00';
            return 'Obese';
        } else {
            bmiCategoryElem.style.color = 'black';
            return ``;
        }
    }
}

// ui update 
function uiUpdate() {
    calculateBmi()
    if(isFinite(calculatedBmiValue)) {
        bmiElem.innerHTML = calculatedBmiValue
    }
    bmiCategoryElem.innerHTML = checkCategory(calculatedBmiValue);
}

// Call a 000000 when a user writes something in an container field
container.addEventListener("input", uiUpdate);