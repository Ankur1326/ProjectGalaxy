const inputNodeList = document.querySelectorAll('input');
const box = document.querySelector(".box");

function boxShadow() {
    const hOffset = document.getElementById('h-offset').value
    const vOffset = document.getElementById('v-offset').value;
    const blur = document.getElementById('blur').value;
    const spread = document.getElementById('spread').value;
    const color = document.getElementById('color').value;
    const ShadowElem = document.querySelector(".box_shadow")

    ShadowElem.innerText = hOffset+"px" + " "+ vOffset+"px" +" "+blur+"px"+ " "+ spread+"px" + " " + color;
    box.style.boxShadow = ShadowElem.innerText;

    // select span elem 
    const hOffsetSpan = document.querySelector(".h_offset_span");
    const VOffsetSpan = document.querySelector(".v_offset_span")
    const blurSpan = document.querySelector(".blur_span");
    const spreadSpan = document.querySelector(".spread_span");
    const colorSpan = document.querySelector(".color_span");

    hOffsetSpan.innerText = hOffset+"px";
    VOffsetSpan.innerText = vOffset+"px";
    blurSpan.innerText = blur+"px";
    spreadSpan.innerText = spread+"px";
    colorSpan.innerText = color;
}

function boxProperty() {
    // select all inputs in right section 
    const canvasColor = document.getElementById('canvas_color').value;
    const  backgroundColor= document.getElementById('background_color').value;
    const borderRadius= document.getElementById("border_radius").value;
    const height = document.getElementById('height').value;
    const width = document.getElementById("width").value;

    // Background color change of result_box section  
    const resultBox = document.querySelector(".result_box");
    
    resultBox.style.backgroundColor = canvasColor;
    box.style.backgroundColor = backgroundColor; // here is background Color change of box 
    box.style.borderRadius = borderRadius + "px";  // change border radius of box
    box.style.height = height + "px";  // change height 
    box.style.width = width + "px"; // change width 

    const borderRadiusSpan = document.querySelector(".border_radius")
    const heightSpan = document.querySelector(".height");
    const widthSpan = document.querySelector(".width");

    borderRadiusSpan.innerText = borderRadius + "px";
    heightSpan.innerText = height + "px";
    widthSpan.innerText = width + "px";


    // dispaly all code (property and box shadow)
    const borderRadiusDisplay = document.querySelector(".border_radius_display")
    const heightDisplay = document.querySelector(".height_display")
    const widthDisplay = document.querySelector(".width_display")
    
    borderRadiusDisplay.innerText = borderRadius + "px";
    heightDisplay.innerText = height + "px";
    widthDisplay.innerText = width + "px";

}
function updateShadow() {
    // update box shadows 
    boxShadow();
    
    // update box property
    boxProperty();

}

inputNodeList.forEach(input => {
    input.addEventListener('change', updateShadow)
})

inputNodeList.forEach(input => {
    input.addEventListener('mousemove', updateShadow)
})
