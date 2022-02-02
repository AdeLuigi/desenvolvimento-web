function maxNumber(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
alert("ASDASD")

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    exdays = exdays || 365;
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${encodeURIComponent(cvalue)};${expires};path=/`; // cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

function getCookie(cname) {
    var name = cname.trimStart() + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    let cookie = ca.find((row) => row.trim().startsWith(name));
    return cookie == undefined ? "" : cookie.split("=")[1];
}


// getting parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const windowHeight = urlParams.get("h") || 480;
const windowWidth = urlParams.get("w") || 640;

// setting canvas size
$("#myCanvas").attr("height", windowHeight + "px");
$("#myCanvas").attr("width", windowWidth + "px");    

$("#wXh").html("Canvas: (" + windowWidth + "x" + windowHeight + ")");
$("#aspectRatio").html("Aspect ratio = " + (windowWidth / windowHeight).toFixed(2));

//Jquery draggable Div
$("#myDiv").draggable();
let top = getCookie("dragTop");
let left = getCookie("dragLeft");


$("#myDiv").css({top: Number(top),
                left: Number(left)});


function position() {
    let dragPosition = $("#myDiv").offset();
    console.log(dragPosition);
    setCookie("dragTop", dragPosition.top, 30)
    setCookie("dragLeft", dragPosition.left, 30)
}

// Getting range
const rangeInput = document.getElementById("myRange");
rangeInput.value = getCookie("rangeValue");

$("#inputLabel").html(rangeInput.value + " &#8804; (7X10)");

function calculateCircles() {
    var slider = document.getElementById("myRange");
    // number of circles
    let ncircles = slider.value;

    const canvas = document.getElementById("myCanvas");

    let ctx = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;
    const n = ncircles;

    const ratio = w/h;
    const cols = Math.sqrt(n * ratio);
    const rows = Math.ceil(n / cols);

    // Melhor opção ocupando toda altura
    {
        let _rows = Math.ceil(rows);
        let _cols = Math.ceil(n / _rows);

        if(_rows * ratio < _cols){
        const rowsRatio = _cols  / (_rows * ratio);
        _rows = Math.ceil(_rows * rowsRatio);
        _cols = Math.ceil(n / _rows);
        }

        var fullHeightSide = h / _rows;
    }

    // Melhor opção ocupando toda largura
    {
        let _cols = Math.ceil(cols);
        let _rows = Math.ceil(n / _cols);

        if(_rows * ratio > _cols){
        const colsRatio = (_rows * ratio) / _cols;
        _cols = Math.ceil(_cols * colsRatio);
        _rows = Math.ceil(n / _cols);
        }

        var fullWidthSide = w / _cols;
    }


    // Finalmente 
    let squareSide = Math.max(fullHeightSide, fullWidthSide);
    
    // My solution is identical to the code below...
    let perRow = Math.floor(canvas.width / squareSide)
    let circleRadius = squareSide / 4;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.strokeStyle = "gray";
    for (let i = 0; i < ncircles; i++) {
        let row = Math.floor(i/perRow);
        let col = i % perRow;
        let x = circleRadius * 2 + circleRadius*4*col; 
        let y = circleRadius * 2 + circleRadius*4*row; 
        ctx.beginPath ();
        ctx.arc (x,y,circleRadius,0,Math.PI*2)
        ctx.fill()
        ctx.beginPath ();
        ctx.moveTo(x-squareSide/2,y-squareSide/2);
        ctx.lineTo(x-squareSide/2,y+squareSide/2);
        ctx.lineTo(x+squareSide/2,y+squareSide/2);
        ctx.lineTo(x+squareSide/2,y-squareSide/2);
        ctx.closePath();
        ctx.stroke()
    }
}

calculateCircles();

rangeInput.addEventListener("input", () => {
    $("#inputLabel").html(rangeInput.value + " &#8804; (7X10)");
    calculateCircles()
});
rangeInput.addEventListener("change", (obj) => {
    setCookie("rangeValue",obj.target.value,30)
});

const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("mouseup", position);
