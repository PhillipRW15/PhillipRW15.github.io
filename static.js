var DadJokes = ["Dad, did you get a haircut?", "Why don't eggs tell jokes?","This graveyard looks overcrowded.","Why did the math book look so sad?","What time did the man go to the dentist?","How do you make a tissue dance?","What kind of shoes do ninjas wear?","What's brown and sticky?","What do you call an elephant that doesn't matter?","What do you call a fake noodle","What's an astronaut's favorite part of a computer?"];
var answers = ["No, I got them all cut!", "They'd crack each other up.","People must be dying to get in.","Because of all of its problems!","Tooth hurt-y.","You put a little boogie in it.","Sneakers!","A stick","An irrelephant.","An impasta.","The space bar."];
var randomIndex = Math.floor(Math.random() * Math.floor(DadJokes.length));
var last = randomIndex;
var done = false;
$(document).ready(function(){
    var jokes = $("#jokes");
    jokes.prepend("<h1 id="+randomIndex+">" + DadJokes[randomIndex]+"</h1>");

    $("#button").click(function(){
        if(!done){
        jokes.append("<h1 id="+randomIndex+">" + answers[randomIndex]+"</h1>");
        done = true;
        }
    });
    $("#reset").click(function(){
        $("h1").remove("#"+randomIndex.toString());
        randomIndex = Math.floor(Math.random()*Math.floor(DadJokes.length));
        while(last == randomIndex)
        {
            randomIndex = Math.floor(Math.random()*Math.floor(DadJokes.length));
        }
        last = randomIndex;
        jokes.prepend("<h1 id=" +randomIndex+">" + DadJokes[randomIndex]+"</h1>");
        done = false;
    });
});

