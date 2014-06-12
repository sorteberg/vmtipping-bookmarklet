javascript:

var matches = document.querySelectorAll(".match");

var guesses = [];
for (var i = 0, length = matches.length; i < length; i++) {
 	guesses.push({ 
     	hometeam: getTeam(matches[i], "home"),
        homescore: getScore(matches[i], "home"),
        awayscore: getScore(matches[i], "away"),
     	awayteam: getTeam(matches[i], "away")
 	});
}

document.body.innerHTML = JSON.stringify(guesses);

function getScore(match, homeOrAway) {
    return match.querySelectorAll("." + homeOrAway + "-score")[0].value;    
}

function getTeam(match, homeOrAway) {
	return match.querySelectorAll(".teamname." + homeOrAway)[0].querySelectorAll(".team-name")[0].textContent.trim();
}
