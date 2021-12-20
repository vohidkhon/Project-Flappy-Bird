var cvs = document.getElementById("flappybird");
var ctx = cvs.getContext("2d");
var bird2 = new Image();
bird2.src = "bird.png";
var bg = new Image();
bg.src = 'bg.png';
var pipeUp = new Image();
pipeUp.src = 'pipeUp.png';
var pipeBottom = new Image();
pipeBottom.src = 'pipeBottom.png';
var fg = new Image();
fg.src = 'fg.png';

	var xPos = 50;
	var yPos = 250;
	var gap = 110;
	var pipes_x = [cvs.width, cvs.width + 150];
	var pipes_y = [0, -100];
	let grav = 0.3;
	let change = 5;
	let score = 0;
	
	function vzlet() {
    change = 0;
    grav = 0;
    yPos -= 25;
    change = 5;
    grav = 0.4;
}
	cvs.addEventListener('click', vzlet)

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird2, xPos, yPos);
    for (let i = 0; i < pipes_x.length; i++) {
		if (pipes_x[i] <= 50) {
            pipes_x.push(pipes_x[pipes_x.length - 1] + 250);
            pipes_y.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height);
        }
        ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
        ctx.drawImage(pipeBottom, pipes_x[i], pipes_y[i] + pipeUp.height + gap);
        pipes_x[i] = pipes_x[i] - 2;
		 	if (xPos + bird2.width >= pipes_x[i] && xPos <= pipes_x[i] + pipeUp.width && (yPos <= pipes_y[i] + pipeUp.height || yPos + bird2.height >= pipes_y[i] + pipeUp.height + gap) || yPos + bird2.height >= cvs.height - fg.height) {
            pipes_x = [cvs.width];
            pipes_y = [0];
            score = 0;
            xPos = 10;
            yPos = 150;
            change = 5;  
        }
		ctx.fillStyle = "#000";
		ctx.font = "24px Arial";
		ctx.fillText(score, 20, 380);
		if (xPos + bird2.width == pipes_x[i]) {
            score +=1;
        }
    }
    change = change - grav;
    yPos = yPos - change;
    ctx.drawImage(bird2, xPos, yPos);
	ctx.drawImage(fg, 0, cvs.height - fg.height);
    requestAnimationFrame(draw);
}
draw();
function text1() {
    let img = document.querySelector("img");
    img.src="images/55.jpg";
    let hh = document.querySelector(".hh");
    hh.innerHTML="Интересные факты";
    let text = document.querySelector("p");
    text.innerHTML = "<p>1. Факт, говорящий наилучшим образом о наших любимых артистах: для съемок фильма «Мстители» исполнители главных ролей усиленно совершенствовали свои физические способности. Актеры изучали различные техники боевого искусства, таким образом готовясь к многочисленным сценам драк, показанных в фильме.</p>";
}
function text2() {
    let img = document.querySelector("img");
    img.src="images/4.jpg";
    let hh = document.querySelector(".hh");
    hh.innerHTML="Интересные факты";
    let text = document.querySelector("p");
    text.innerHTML ="<p>2. Веселая история с порванными штанами четырежды случалась с Крисом Хемсвортом во время съемок. Брюки, сшитые из сложного материала, не позволяли актеру делать резких движений, без которых в свою очередь было бы сложно обойтись его герою. Клянемся, что особенно забавной эта ситуация выглядела на фоне какой-нибудь грандиозной сцены, в ходе которой мускулистая мужественность Тора обернулась нелепостью порванных брюк. Жаль, что мы не увидели этого казуса в фильмах.</p>";
}
function text3() {
    let img = document.querySelector("img");
    img.src="images/11.jpg";
    let hh = document.querySelector(".hh");
    hh.innerHTML="Интересные факты";
    let text = document.querySelector("p");
    text.innerHTML = "3. Значительно хуже пришлось Тому Хиддлстону. Его неудачи связаны с настоящими телесными увечьями. За время съемок актер трижды падал, разбивал нос и губы, подворачивал ногу и многое другое. Самое интересное, что после неоднократного повторения подобных ситуаций, на площадке фильма появился специальный человек, отвечающий за здоровье Хиддлстона. Роберт Дауни Младший иронично называл его «няней».";
}
function text4(){
    let img = document.querySelector("img");
    img.src="images/15.jpg";
    let hh = document.querySelector(".hh");
    hh.innerHTML="Интересные факты";
    let text = document.querySelector("p");
    text.innerHTML = "Первый мститель. Противостояние» – третий фильм о приключениях Капитана Америки. Крис Эванс в отличии от других актеров киновселенной даже не проходил пробы на эту роль – создатели были уверены в нем на 100 процентов и оказались правы. Ну, кто, если не он?";
}
function text5(){
    let img = document.querySelector("img");
    img.src="images/25.jpg";
    let hh = document.querySelector(".hh");
    hh.innerHTML="Интересные факты";
    let text = document.querySelector("p");
    text.innerHTML = "Возвращаемся в 2018 год к новой части «Мстителей» – «Война бесконечности», которая даже не выйдя в прокат, успела побить всевозможные рекорды. Во-первых, в фильме задействовано рекордное количество знаменитостей – порядка тридцати человек. Это приговорило создателей картины к максимально тщательной охране своего детища, хотя и не помогло избежать спойлеров. Тем не менее в сценарии были специально прописаны фейковые сцены, а некоторым артистам даже не позволили прочитать его полностью.";
}




