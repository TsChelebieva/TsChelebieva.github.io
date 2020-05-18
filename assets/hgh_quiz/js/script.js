function totalResult(){
	var all = document.querySelectorAll('input[type=radio]:checked')

		if (all.length < 11) {
			alert("You have not answered all questions!");
		}

	var q1 = document.querySelector("input[name='q1']:checked").value;
	var q2 = document.querySelector("input[name='q2']:checked").value;
	var q3 = document.querySelector("input[name='q3']:checked").value;
	var q4 = document.querySelector("input[name='q4']:checked").value;
	var q5 = document.querySelector("input[name='q5']:checked").value;
	var q6 = document.querySelector("input[name='q6']:checked").value;
	var q7 = document.querySelector("input[name='q7']:checked").value;
	var q8 = document.querySelector("input[name='q8']:checked").value;
	var q9 = document.querySelector("input[name='q9']:checked").value;
	var q10 = document.querySelector("input[name='q10']:checked").value;
	var q11 = document.querySelector("input[name='q10']:checked").value;


	var result = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11];
	var mf = 1;
	var m = 0;
	var item;

	for (var i = 0; i < result.length; i++) {
	for (var j = i; j < result.length; j++) {
			if (result[i] == result[j]) m++;
			if (mf < m) {
				mf = m;
				item = result[i];
			}
		}

		m = 0;
	}
	var result = ["You are Adela!", "You are Ana!", "You are Hareem!", "You are Jenny!", "You are Maria!", "You are Roberta!", "You are Siana!", "You are Tanvi!", "You are Tsvety!", "You are Xuyi!"];
	var image = ["images/HGH/Res/Adela.jpg","images/HGH/Res/Ana.jpg","images/HGH/Res/Hareem.jpg","images/HGH/Res/Jenny.jpg","images/HGH/Res/Maria.jpg","images/HGH/Res/Roberta.jpg" ,"images/HGH/Res/Siana.jpg","images/HGH/Res/Tanvi.jpg", "images/HGH/Res/Tsvety.png" , "images/HGH/Res/Xuyi.jpg"]
	var text = [
	"You are the bitchy friend of the group. You might appear judgemental, but it's only because you want the best for your friends, who you love very much. Always ready to give scientific advice and pose dramatically for photos!",
	"You are the friend who is always up for anything. Any crazy idea, just bring it on. You might not know what 2+2*2 equals, but you can quote Keats in your sleep. Your laugh is contagious, and you're always there to cheer us up.",  
	"You are the chill friend, minding your business, but there when someone needs to talk. A great buddy to talk about oats and social injustice.", 
	"You are the bro friend. You don't know what's happening most of the time, but when you do, you don't. Just kidding, you are hard-working and love your friends.", 
	"You are the loud friend. You like to party and are always surrounded by friends. However, please understand when it's 3AM and you just have to shut the fuck up.",
	"You are the quiet friend. You like sharing your mom's cooking with friends and you always put up with all of our bullshit. The party is just not the same without you.",
	"You are the bubbly one of the group. You burst into the kitchen always matchy-matchy and ready to entertain with your love stories, but also empathically listen to everyone's problems and educate on toxic men.",
	"You are the bully friend of the group. You enjoy other people's (Jenny) pain, but also like giving. You are curious, and a great conversation partner, especially when it comes to politics or any other serious topics.",
	"You are the nerd friend of the group. You might appear closed off at the beginning, but once someone gets to know you, you're soft, loving and loud. You're a perfectionist and like to excel at everything you do.",
	"You are the black lesbian Bulgarian cancer survivor truck driver friend of the group. You are always ready to serve tea and suck dick and one of your turn ons is political debates."

	
	];

  document.getElementById("results").style.display = "block";


	switch(item){

		case "Adela":

		document.getElementById("result_winner").innerHTML = result[0];
		document.getElementById("result_image").src = image[0];
		document.getElementById("result_par").innerHTML = text[0];

		break;


		case "Ana":

		document.getElementById("result_winner").innerHTML = result[1];
		document.getElementById("result_image").src = image[1];
		document.getElementById("result_par").innerHTML = text[1];	
		break;

		case "Hareem":

		document.getElementById("result_winner").innerHTML = result[2];
		document.getElementById("result_image").src = image[2];
		document.getElementById("result_par").innerHTML = text[2];

		break;

		case "Jenny":

		document.getElementById("result_winner").innerHTML = result[3];
		document.getElementById("result_image").src = image[3];
		document.getElementById("result_par").innerHTML = text[3];

		break;

		case "Maria":

		document.getElementById("result_winner").innerHTML = result[4];
		document.getElementById("result_image").src = image[4];
		document.getElementById("result_par").innerHTML = text[4];

		break;

		case "Roberta":

		document.getElementById("result_winner").innerHTML = result[5];
		document.getElementById("result_image").src = image[5];
		document.getElementById("result_par").innerHTML = text[5];

		break;

		case "Siana":

		document.getElementById("result_winner").innerHTML = result[6];
		document.getElementById("result_image").src = image[6];
		document.getElementById("result_par").innerHTML = text[6];

		break;

		case "Tanvi":

		document.getElementById("result_winner").innerHTML = result[7];
		document.getElementById("result_image").src = image[7];
		document.getElementById("result_par").innerHTML = text[7];

		break;

		case "Tsvety":
		document.getElementById("result_winner").innerHTML = result[8];
		document.getElementById("result_image").src = image[8];
		document.getElementById("result_par").innerHTML = text[8];

		break;

		case "Xuyi":
		document.getElementById("result_winner").innerHTML = result[9];
		document.getElementById("result_image").src = image[9];
		document.getElementById("result_par").innerHTML = text[9];	

	}

	showChar();

}

function findPercentage(array){
		const totalItems = array.length
const uniqueItems = [...new Set(array)]
uniqueItems.forEach(currColor => {
  const numItems = array.filter(color => color === currColor) 
  console.log(`color ${currColor} represents ${numItems.length * 100 / totalItems}%`)
})
}

function showChar() {
  document.getElementById("all_char").style.display = "block";
}