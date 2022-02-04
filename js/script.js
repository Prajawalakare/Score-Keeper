function incA(){
    var score = parseInt(document.getElementById("btnScoreA").innerHTML);
    score++;
    document.getElementById("btnScoreA").innerHTML = score;
}

function incB(){
    var score = parseInt(document.getElementById("btnScoreB").innerHTML);
    score++;
    document.getElementById("btnScoreB").innerHTML = score;
}

function decA(){
    var score = parseInt(document.getElementById("btnScoreA").innerHTML);
    score--;
    document.getElementById("btnScoreA").innerHTML = score;
}

function decB(){
    var score = parseInt(document.getElementById("btnScoreB").innerHTML);
    score--;
    document.getElementById("btnScoreB").innerHTML = score;
}