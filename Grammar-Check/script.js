const charValue = document.querySelector('textarea');
let totalCount = document.getElementById('total_counter');
let remainingCount = document.getElementById('Remaning_counter');

let userChar = 0;
const updateCounter = () => {
    userChar = charValue.value.length;
    totalCount.innerText = userChar;

    remainingCount.innerText = 150 - userChar;
}

charValue.addEventListener("keyup", () => updateCounter()
)

// copy the text code 
const copyText = () => {
    charValue.select()

    // for mobile version
    charValue.setSelectionRange(0, 999)

    // api calling for copy text 
    navigator.clipboard.writeText(charValue.value)
}