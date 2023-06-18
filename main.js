function aplhabetKey()
{
	img_image("alfabeto.png");
	add();
}

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((keyPressed >=97 && keyPressed <=122)|| (keyPressed <=65 && keyPressed <=90))
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="você precionou uma tecla do alfabeto";
		console.log("aplhabet key");
	}
}

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

window.addEventListener("keydown", myKeyDown);

