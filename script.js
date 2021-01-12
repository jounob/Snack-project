window.onload = () => {
    let canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "3px solid #ff5400";
    document.body.appendChild(canvas);

    let contex = canvas.getContext('2d');
    contex.fillStyle = "#9e0059"
    contex.fillRect(30, 30, 100, 50)
}