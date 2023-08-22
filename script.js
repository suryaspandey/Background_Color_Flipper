


const btn = document.getElementById("btn");

const color = document.querySelector('.color')


// button click to change the background color

btn.addEventListener('click',function(){
    let r = generateRandomColor();
    // console.log(r);
    let g = generateRandomColor();
    // console.log(g);
    let b = generateRandomColor();
    // console.log(b);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.querySelector('.color').textContent = `rgb(${r},${g},${b})`;
})


// screen click to change the background color


setInterval( document.addEventListener('click',function(){

    let r = generateRandomColor();
    let g = generateRandomColor(); 
    let b = generateRandomColor();

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.querySelector('.color').textContent = `rgb(${r},${g},${b})`;
}),1000);


const generateRandomColor =  function(){
    let randomColor =  Math.floor((Math.random() * 255) + 1);
    return randomColor;
}

// change heading text colours

const colouredHeading = ()=>{
    const textName= "Colour Flipper";

    const headingEle = document.querySelector('.heading');
    let coloredText = '';

    for(let i = 0;i < textName.length;i++){
    
        let r = generateRandomColor();
        let g = generateRandomColor(); 
        let b = generateRandomColor();

        if(r && g && b !== 0){ 
            coloredText+= `<span style="color: rgb(${r},${g},${b})">${textName.charAt(i)}</span>`

        }
    
        }
    headingEle.innerHTML = coloredText;

}

window.addEventListener('load',colouredHeading);

