


const btn = document.getElementById("btn");

const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    let r = generateRandomColor();
    console.log(r);
    let g = generateRandomColor();
    console.log(g);
    let b = generateRandomColor();
    console.log(b);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = "rgb(237, 221, 171)";
    document.querySelector('.color').textContent = `rgb(${r},${g},${b})`;
})




setInterval( document.addEventListener('click',function(){

    let r = generateRandomColor();
    let g = generateRandomColor();
    // console.log(g);
    let b = generateRandomColor();
    // console.log(b);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.querySelector('.color').textContent = `rgb(${r},${g},${b})`;
}),1000);

// 



// window.onload = function()
// {
//     window.onclick = function(event)
//     {
//         var evt = window.event || evt;
//         document.getElementById("container").textContent = "A" + evt.clientX + evt.clientY;
//         document.getElementById("circle").style.left = evt.clientX+ "px";
//         document.getElementById("circle").style.top = evt.clientY + "px";
//     }
// }






// create circles wherevr mouse is clicked.

// document.circle = function(x,y,r){ this.arc(x,y,r,0,2*Math.PI,false); }

// var canv = document.createElement('canvas');
// canv.id = 'canvas';
// document.body.appendChild(canv);
// var ctx = canv.getContext('2d');
// canv.addEventListener("click",function(event) {
//   var x = event.clientX;
//   var y = event.clientY;
//   var radius = 5;
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 40, 0, 2 * Math.PI);
//   ctx.stroke();
//   var coords = 'X coords: ' + x + ', Y coords: ' + y;
//   console.log(coords);
// })












const generateRandomColor =  function(){
    let randomColor =  Math.floor((Math.random() * 255) + 1);
    return randomColor;
}