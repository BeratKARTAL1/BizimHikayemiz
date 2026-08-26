const music = new Audio("ortak.mp3");

const startButton = document.getElementById("startButton");
const story = document.getElementById("story");

const title = document.querySelector("h1");

const nextButton = document.getElementById("nextButton");
const story2 = document.getElementById("story2");
const nextButton2 = document.getElementById("nextButton2");
const story3 = document.getElementById("story3");
const nextButton3 = document.getElementById("nextButton3");
const story4 = document.getElementById("story4");
const nextButton4 = document.getElementById("nextButton4");
const story5 = document.getElementById("story5");
const nextButton5 = document.getElementById("nextButton5");
const story6 = document.getElementById("story6");
const nextButton6 = document.getElementById("nextButton6");
const story7 = document.getElementById("story7");
const nextButton7 = document.getElementById("nextButton7");
const story8 = document.getElementById("story8");
const nextButton8 = document.getElementById("nextButton8");
const story9 = document.getElementById("story9");
const story10 = document.getElementById("story10");
const restartButton = document.getElementById("restartButton");
startButton.addEventListener("click", function() {
    music.play();

    startButton.style.display = "none";
    title.style.display = "none";
    story.style.display = "block";
});

nextButton.addEventListener("click", function() {
    story.style.display = "none";
    story2.style.display = "block";
});

nextButton2.addEventListener("click", function() {
    console.log(story2);
    console.log(story3);

    story2.style.display = "none";
    story3.style.display = "block";
});
nextButton3.addEventListener("click", function() {
    story3.style.display = "none";
    story4.style.display = "block";
});

nextButton4.addEventListener("click", function() {
    story4.style.display = "none";
    story5.style.display = "block";
});
nextButton5.addEventListener("click", function() {
    story5.style.display = "none";
    story6.style.display = "block";
});

nextButton6.addEventListener("click", function() {
    story6.style.display = "none";
    story7.style.display = "block";
});
nextButton7.addEventListener("click", function() {
    story7.style.display = "none";
    story8.style.display = "block";
});
nextButton8.addEventListener("click", function() {
    story8.style.display = "none";
    story9.style.display = "block";
});
nextButton9.addEventListener("click", function() {
    story9.style.display = "none";
    story10.style.display = "flex";
});
restartButton.addEventListener("click", function() {
    story10.style.display = "none";

    startButton.style.display = "block";
    title.style.display = "block";

    startButton.style.margin = "20px auto";
});
