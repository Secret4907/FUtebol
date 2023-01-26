
var canvas = new fabric.Canvas('myCanvas');
var goleiroAgarrou = false
ball_y=450;
ball_x=350;
hole_y=0;
hole_x=350;
goleiro_x = 350;
goleiro_y = 75;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	new_image();
	goleiro()
}

function new_image()
{
	if (goleiroAgarrou == false){
	fabric.Image.fromURL("bola.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_obj);
	});}
}

function goleiro()
{
	fabric.Image.fromURL("golelu.jpg", function(Img) {
	goleiro_obj = Img;
	goleiro_obj.scaleToWidth(150);
	goleiro_obj.scaleToHeight(100);
	goleiro_obj.set({
	top:goleiro_y,
	left:goleiro_x
	});
	canvas.add(goleiro_obj);
	});
}
function ballF(){ 
	if (ball_x < goleiro_x + 150 && ball_x + 50 > goleiro_x && ball_y < goleiro_y + 100) {
    goleiroAgarrou = true
	canvas.remove(ball_obj)
	console.log("O goleiro te bloqueou 😿😿");
	document.getElementById("hd3").innerHTML="O goleiro te bloqueou 😿😿";
	document.getElementById("myCanvas").style.borderColor="red";
	
	}	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==350)&&(ball_y<=50)){
		canvas.remove(ball_obj);
		canvas.remove(goleiro_obj)
		console.log("Você fez um gol!!!");
		document.getElementById("hd3").innerHTML="Você fez um gol!!!";
	    document.getElementById("myCanvas").style.borderColor="green";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			
			ball_y = ball_y - block_image_height;
			console.log("altura da imagem do bloco = " + block_image_height);
			console.log("Quando a tecla para cima é pressionada, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
			ballF()
		}
	}
    //Programe a função "down()"
	function down()
	{ if (ball_y <= 450) {
		ball_y += block_image_height
		console.log("altura da imagem do bloco =" + block_image_height)
		console.log("Quando a tecla pra baixo é pressionada, X = " + ball_x +" , Y =" +ball_y )
		canvas.remove(ball_obj)
        new_image()
		 
	}}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("largura da imagem do bloco = " + block_image_width);
			console.log("Quando a tecla esquerda é pressionada, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

    //Programe a função "right()"
	function right()
	{ if (ball_x <= 1050) {
		ball_x = ball_x + block_image_width
		console.log("largura da imagem do bloco =" + block_image_width)
		console.log("Quando a tecla direita é pressionada, X =" +ball_x+", Y ="+ ball_y)
		canvas.remove(ball_obj)
		new_image()
	} 

	}
	
}