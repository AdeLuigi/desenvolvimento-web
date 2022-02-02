document.onreadystatechange = function(){
    if (document.readyState === "complete") {
        window.circlesRectangle = circlesRectangle;

        var query = window.location.search.substring(1);
        var qs = parse_query_string(query);
        console.log(qs.height);
        console.log(qs.width);


        function parse_query_string(query) {
            var vars = query.split("&");
            var query_string = {};
            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");
              var key = decodeURIComponent(pair[0]);
              var value = decodeURIComponent(pair[1]);
              // If first entry with this name
              if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
              } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
              } else {
                query_string[key].push(decodeURIComponent(value));
              }
            }
            return query_string;
          }

        function circlesRectangle() {
            var slider = document.getElementById("myRange");
            // number of circles
            let ncircles = slider.value;

            const canvas = document.getElementById("myCanvas");
            const tela = document.getElementById("tela");
            const aspect = document.getElementById("aspect");

            

            let ctx = canvas.getContext("2d");
            canvas.width = qs.width ? qs.width : 640;
            canvas.height = qs.height ?  qs.height : 480;
            
            const w = canvas.width;
            const h = canvas.height;
            
            tela.innerHTML = w+"x"+h;
            aspect.innerHTML = (w/h).toFixed(2);

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
        
        circlesRectangle();
        
        
    }
    else {
       window.onload = function () {
          myFunction();
       };
    };
}


