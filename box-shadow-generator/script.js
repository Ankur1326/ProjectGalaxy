// Stores all the input elements in node list
const inputNodeList = document.querySelectorAll(`.property input`);

function updateShadow() {
    // all input select
    const hOffset = document.getElementById('h-offset').value;
    const vOffset = document.getElementById('v-offset').value;
    const blur = document.getElementById('blur').value;
    const spread = document.getElementById('spread').value;
    const color = document.getElementById('color').value;
    const normal = document.querySelector(".normal");
    
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    normal.innerText = hOffset+"px" + " "+ vOffset+"px" +" "+blur+"px"+ " "+ spread+"px" + " " + color;
     
    let box = document.querySelector(".box")
    box.style.boxShadow = normal.innerText;
}
inputNodeList.forEach(input => {
    input.addEventListener('change', updateShadow)
})

inputNodeList.forEach(input => {
    input.addEventListener('mousemove', updateShadow)
})
