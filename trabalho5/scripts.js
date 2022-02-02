document.onreadystatechange = function(){
    if (document.readyState === "complete") {
        window.calculateCircles = calculateCircles;

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
        
        
    }
    else {
       window.onload = function () {
          myFunction();
       };
    };
}


