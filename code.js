<html>
	<head> 
		<title> Reaction Tester </title>
		<style type="text/css">
			body{
					font-family: sans-serif;
                    font-weight: 200;   
				}
			#shape {
						height:200px;
						width:200px;
						background-color:red;
						display: none;
						position:relative;
					}
			#bold {
					font-weight: bold;
				}
            #begin{
                position: absolute;
                bottom :400px;
                right: 1100px;
            }
			#exit {
				position: absolute;
				bottom: 400px;
				right : 900px;
				}
		</style>
	</head>
	<body>
		<h2> Reaction Tester!! </h2>
		<h3> Click on the shapes as quickly as you can!! </h3>
		<p id ="bold"> Your Time : <span id="timeTaken"></span></p>
		<p id ="bold"> Minimum Time : <span id="minTime"></span></p>
		<p id ="bold"> Longest Time : <span id="maxTime"></span></p>
		<p id ="bold"> Score :      <span id="score"></span> Turns : <span id="turn"></span></p>
		<div id="shape" > </div>
		<button id="begin" style="font-size:30px;background-color:green"> Begin </button>
		<button id="exit" style="font-size:30px;background-color:red"> Exit </button>
		<script type="text/javascript">
			var minTime = 100;
			var maxTime = 0;
			var point;
			var turn =0;
			var score= 0;
			var timeTaken;
			var start = new Date().getTime();
		document.getElementById("begin").onclick = function() {
			document.getElementById("begin").style.display ="none";
			function getRandomColor()
				{
					var letters = '0123456789ABCDEF';
					var color = '#';
					for (var i = 0; i < 6; i++) {
						color += letters[Math.floor(Math.random() * 16)];
					  }
					  return color;
				}
			function makeShapeAppear()
			{
				var top = Math.random() * 170;
				var left = Math.random() * 990;
				var width = (Math.random() * 200) + 30;
				if((Math.random() > 0) && (Math.random() < 0.3))
					{
						document.getElementById("shape").style.borderRadius = "50%";
						document.getElementById("shape").style.top = top + "px";
						document.getElementById("shape").style.backgroundColor = getRandomColor();
						document.getElementById("shape").style.width = width + "px";
						document.getElementById("shape").style.height = width + "px";
						document.getElementById("shape").style.left = left + "px";
						document.getElementById("shape").style.display = "block" ;
						start = new Date().getTime();
					}
				else if((Math.random() > 0.4) && (Math.random() < 0.6))
					{
						document.getElementById("shape").style.transform = "skew(20deg)";
						//document.getElementById("shape").style.borderTop = "25px solid transparent";
						//document.getElementById("shape").style.borderRight = "50px solid #555";
						//document.getElementById("shape").style.borderBottom = "25px solid transparent";
						document.getElementById("shape").style.width = "100px";
						document.getElementById("shape").style.height = "50px";
						document.getElementById("shape").style.backgroundColor = getRandomColor();
						document.getElementById("shape").style.display = "block" ;
						start = new Date().getTime();
					}
				else 
				{
					document.getElementById("shape").style.borderRadius = "0%";
					document.getElementById("shape").style.top = top + "px";
					document.getElementById("shape").style.backgroundColor = getRandomColor();
					document.getElementById("shape").style.width = width + "px";
					document.getElementById("shape").style.height = width + "px";
					document.getElementById("shape").style.left = left + "px";
					document.getElementById("shape").style.display = "block" ;
					start = new Date().getTime();
				}
			}
			function appearAfterDelay() 
				{				
					setTimeout(makeShapeAppear(), Math.random() * 2000 );
				}
			appearAfterDelay();
			document.getElementById("shape").onclick = function()
				{
					document.getElementById("shape").style.display = "none";
					var end = new Date().getTime();
					timetaken = ((end - start)/1000);
					if(timetaken < minTime){
						minTime = timetaken; }
					if(timetaken > maxTime) {
						maxTime = timetaken; }
					point = (timetaken * 100)/10;
					score +=Math.floor(point);
					turn+=1;
					document.getElementById("timeTaken").innerHTML = timetaken + "s";
					document.getElementById("minTime").innerHTML = minTime + "s";
					document.getElementById("maxTime").innerHTML = maxTime + "s";
					document.getElementById("score").innerHTML = score;
					document.getElementById("turn").innerHTML = turn;
					document.getElementById("shape").style.display = "none";
					appearAfterDelay();
				}
						
			}
			document.getElementById("exit").onclick = function() {
				document.getElementById("shape").style.display = "none";
				document.write("Thank You for Playing...!" + " ");
                document.write("Your Score was" + " " + score +" " +  "in" + " " + turn + " " + "turns!!!");
            }
		</script>
	</body>
	
</html>
