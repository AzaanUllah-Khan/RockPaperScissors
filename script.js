
var array = ["rock", "paper", "scissors"]
var comp;
var player = 0
var computering = 0
function generate() {
    var number = Math.floor(Math.random() * 3)
    var result = array[number]
    return result;
}
function start() {
    var comp = generate()
    document.getElementById("compName").innerHTML = comp
    if (comp == "rock") {
        document.getElementById("compImage").src = "./img/rock.png"
    }
    else if (comp == "paper") {
        document.getElementById("compImage").src = "./img/paper.png"
    }
    else {
        document.getElementById("compImage").src = "./img/scissors.png"
    }
    return comp;
}
// ---
function rock() {
    document.getElementById("playerOneImage").src = "./img/rock.png"
    document.getElementById("elementName").innerHTML = "rock"
    start()
    if (start() == document.getElementById("elementName").innerHTML) {
        document.getElementById("winner").value = "tie";
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
    else if (start() == "rock" && document.getElementById("elementName").innerHTML == "paper" || start() == "paper" && document.getElementById("elementName").innerHTML == "scissor" || start() == "scissors" && document.getElementById("elementName").innerHTML == "rock") {
        document.getElementById("winner").value = "player Wins";
        player++
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
    else {
        document.getElementById("winner").value = "Comp Wins";
        computering++
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
}
function paper() {
    document.getElementById("playerOneImage").src = "./img/paper.png"
    document.getElementById("elementName").innerHTML = "paper"
    start()
    if (start() == document.getElementById("elementName").innerHTML) {
        document.getElementById("winner").value = "tie";
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
    else if (start() == "rock" && document.getElementById("elementName").innerHTML == "paper" || start() == "paper" && document.getElementById("elementName").innerHTML == "scissor" || start() == "scissors" && document.getElementById("elementName").innerHTML == "rock") {
        document.getElementById("winner").value = "player Wins";
        player++
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
    else {
        document.getElementById("winner").value = "Comp Wins";
        computering++
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
}
function scissors() {
    document.getElementById("playerOneImage").src = "./img/scissors.png"
    document.getElementById("elementName").innerHTML = "scissor"
    start()
    if (start() == document.getElementById("elementName").innerHTML) {
        document.getElementById("winner").value = "tie";
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
    else if (start() == "rock" && document.getElementById("elementName").innerHTML == "paper" || start() == "paper" && document.getElementById("elementName").innerHTML == "scissor" || start() == "scissors" && document.getElementById("elementName").innerHTML == "rock") {
        document.getElementById("winner").value = "player Wins";
        player++
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
    else {
        document.getElementById("winner").value = "Comp Wins";
        computering++
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("compScore").innerHTML = computering;
    }
}
function refresh(){
    location.reload()
}
