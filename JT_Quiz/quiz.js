
function hey() {

	var all = document.querySelectorAll('input[type=radio]:checked')

		if (all.length < 7) {
			alert("You have not answered all questions!");
		}

	var q1 = document.querySelector("input[name='q1']:checked").value;
	var q2 = document.querySelector("input[name='q2']:checked").value;
	var q3 = document.querySelector("input[name='q3']:checked").value;
	var q4 = document.querySelector("input[name='q4']:checked").value;
	var q5 = document.querySelector("input[name='q5']:checked").value;
	var q6 = document.querySelector("input[name='q6']:checked").value;
	var q7 = document.querySelector("input[name='q7']:checked").value;

	var result = [q1,q2,q3,q4,q5,q6,q7];
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

var result = ["You are Adela!", "You are Siana!", "You are Candice!", "You are Jamie!", "You are Kristine!", "You are Summer!", "You are Tsvety!", "You are Patrick!"];
var image = ["img/adela.jpg","img/siana.jpg","img/candice.jpg","img/jamie.jpg","img/kristine.jpg" ,"img/summer.jpg","img/tsvety.jpg" , "img/patrick.jpg"]
var text = [
"Lorem ipsum dolor sit \
amet, consectetur adipiscing elit, sed do eiu \
smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
 quis nostrud exercitation ullamco laboris nis i ut aliquip ex ea commodo consequat. \
 Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat \
 nulla pariatur. Excepteur sint occaecat cupidatat non proident \
  sunt in culpa qui officia deserunt mollit anim id est laborum.", "", "", "", "", 
  "You are a ray of sunshine! The real Chinese rapper girl: you got swag, you got style. You might struggle with finding the right words sometimes, but you always know how to properly diss your roommates. Chaos in the kitchen is your super power. You are compassionate and ready to help. You like hugs, even though you are reluctant to admit it.", 
  'You are the ultimate chill friend! You are always ready to listen to your friends\' problems, even though you rarely actually "hear" them. You do give good advice, although it\'s mostly through sleep talking. You are obsessed with Bulgarian yogurt and Japanese culture. You are one of the most organised and hard-working people we know.', 
  ""


]

switch(item){
	
	case "Adela":

	document.getElementById("result_winner").innerHTML = result[0];
	document.getElementById("result_image").src = image[0];
	document.getElementById("result_par").innerHTML = text[0];

	break;

	
	case "Siana":
	
	document.getElementById("result_winner").innerHTML = result[1];
	document.getElementById("result_image").src = image[1];
	document.getElementById("result_par").innerHTML = text[1];	
	break;
	
	case "Candice":
	
	document.getElementById("result_winner").innerHTML = result[2];
	document.getElementById("result_image").src = image[2];
	document.getElementById("result_par").innerHTML = text[2];
	
	break;
	
	case "Jamie":
	
	document.getElementById("result_winner").innerHTML = result[3];
	document.getElementById("result_image").src = image[3];
	document.getElementById("result_par").innerHTML = text[3];
	
	break;
	
	case "Kristine":
	
	document.getElementById("result_winner").innerHTML = result[4];
	document.getElementById("result_image").src = image[4];
	document.getElementById("result_par").innerHTML = text[4];
	
	break;
	
	case "Summer":
	
	document.getElementById("result_winner").innerHTML = result[5];
	document.getElementById("result_image").src = image[5];
	document.getElementById("result_par").innerHTML = text[5];
	
	break;
	
	case "Tsvety":
	
	document.getElementById("result_winner").innerHTML = result[6];
	document.getElementById("result_image").src = image[6];
	document.getElementById("result_par").innerHTML = text[6];
	
	break;
	
	case "Patrick":
	
	document.getElementById("result_winner").innerHTML = result[7];
	document.getElementById("result_image").src = image[7];
	document.getElementById("result_par").innerHTML = text[7];
	
	break;
}

}

