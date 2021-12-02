canvas=document.getElementById("Canvas1");
ctx=canvas.getContext("2d");

color="black"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=1;
ctx.rect(20, 20, 560, 310, 180);
ctx.stroke();

color="red"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(460, 125, 80, 0, 180);
ctx.stroke();

color="blue"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(120, 125, 80, 0, 180);
ctx.stroke();

color="green"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(375, 220, 80, 0, 180);
ctx.stroke();

color="yellow"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(205, 220, 80, 0, 180);
ctx.stroke();

color="black"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(290, 125, 80, 0, 180);
ctx.stroke();
