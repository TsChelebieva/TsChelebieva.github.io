
function totalResult() {

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
var image = ["images/jt_quiz/adela.jpg","images/jt_quiz/siana.jpg","images/jt_quiz/candice.jpg","images/jt_quiz/jamie.jpg","images/jt_quiz/kristine.jpg" ,"images/jt_quiz/summer.jpg","images/jt_quiz/tsvety.jpg" , "images/jt_quiz/patrick.jpg"]
var text = [
"Mama Mia! Some people might perceive you as cold and bitchy, but you are a literal cuddly ball of happiness! You have the most prominent cheek bones (which might be the reason why people mistake you for Maleficent, while you are actually one of the puffy animals). Your singing voice always leaves your flatmates with their mouth open. You are a night owl, and you do get shit done - without even complaining that you haven\'t slept for DAYS!",
 "You have a cute and feminine personality. Kind of obsessed with boyz and kpop drama, you established yourself as the bubbly one of the group.", 
 "You always feel like Gucci! You have amazing sense of personal style. You are graceful and beautiful. You are just as sweet as your favourite flavour of ice cream is. You always always share your sweet tooth cravings with us! Your family is just as amazing and nice as you are. You have amazing cooking skills and are determined to succeed! ",
 "Your quirkiness and odd sense of humor raise some eyebrows but also spark a lot of laughter. You are always open for some banter and everlasting English hits. Keep it up, cheerios! ",
 "'Uhm, is that vegetarian?' You are very conscious of your impact on the environment. Always up for some mulled wine and organic treats, you are the hipster one of the bunch.", 
  "You are a ray of sunshine! The real Chinese rapper girl: you got swag, you got style. You might struggle with finding the right words sometimes, but you always know how to properly diss your roommates. Chaos in the kitchen is your super power. You are compassionate and ready to help. You like hugs, even though you are reluctant to admit it.", 
  'You are the ultimate chill friend! You are always ready to listen to your friends\' problems, even though you rarely actually "hear" them. You do give good advice, although it\'s mostly through sleep talking. You are obsessed with Bulgarian yogurt and Japanese culture. You are one of the most organised and hard-working people we know.', 
  "Are you even a resident here? You are mysterious and you barely make your presence felt. It's still unclear if you actually hate people or you just enjoy the loneliness of your room a little bit too much. "
];
  document.getElementById("results").style.display = "block";

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

showChar()

}

function showChar() {
  document.getElementById("all_char").style.display = "block";
}

(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery)