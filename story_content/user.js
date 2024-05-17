function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5npqnR6wwb1":
        Script1();
        break;
      case "64bhjbn2c1m":
        Script2();
        break;
      case "5vZOvJt1ZKB":
        Script3();
        break;
      case "66nElkim4B5":
        Script4();
        break;
      case "6TL3HyfPIuW":
        Script5();
        break;
      case "5XFoyhRvfnP":
        Script6();
        break;
      case "5wpNB5hDsPn":
        Script7();
        break;
      case "6Lobxvae4as":
        Script8();
        break;
      case "6RMM6q938vX":
        Script9();
        break;
      case "6PLPzhM22Wr":
        Script10();
        break;
      case "6bney1LfKRA":
        Script11();
        break;
      case "5cx1VrF9EId":
        Script12();
        break;
      case "5ctkvC3C1Up":
        Script13();
        break;
      case "6WKCaRLB3iI":
        Script14();
        break;
      case "6n1yTnzMN9w":
        Script15();
        break;
      case "6mOXpzbgyDW":
        Script16();
        break;
      case "6epWicEfKFR":
        Script17();
        break;
      case "5zitwjQFQVn":
        Script18();
        break;
      case "6ANKKDVdRho":
        Script19();
        break;
      case "6AUMF6Q5uID":
        Script20();
        break;
      case "6aSlWLQqrBT":
        Script21();
        break;
      case "5vYYRC9BDsn":
        Script22();
        break;
      case "6fYv0BbJVph":
        Script23();
        break;
      case "6qAoJOkHyR9":
        Script24();
        break;
      case "6Dys63BJYcw":
        Script25();
        break;
      case "6F6MnDB3gMd":
        Script26();
        break;
      case "5qH3IN2UFlt":
        Script27();
        break;
      case "6WcYNmty5uN":
        Script28();
        break;
      case "6czCkMJ0mVr":
        Script29();
        break;
      case "5viY1fA1JA5":
        Script30();
        break;
      case "6U5PCI20273":
        Script31();
        break;
      case "6SNkrldyhy1":
        Script32();
        break;
      case "619LTy9hKTj":
        Script33();
        break;
      case "6kkOwqtonGL":
        Script34();
        break;
      case "5XfzYCCwtLG":
        Script35();
        break;
      case "6XdqJWMKHjT":
        Script36();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script2 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script3 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script4 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script5 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script6 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script7 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script8 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script9 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script10 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script11 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script12 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script13 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script14 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script15 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script16 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script17 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script18 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script19 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script20 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script21 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script22 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script23 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script24 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();


}

window.Script25 = function()
{
  const target = object('6G05Z3IMXs1');
const duration = 750;
const easing = 'ease-out';
const id = '5cI7NTwBVFx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6OKPz2iXL7J');
const duration = 750;
const easing = 'ease-out';
const id = '638I1gRLldf';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5X38Lm2Kub5');
const duration = 750;
const easing = 'ease-out';
const id = '60mQrF3oSDs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('681BkKnvSog');
const duration = 750;
const easing = 'ease-out';
const id = '68NUtvjiwSu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5tonaBNYZXZ');
const duration = 750;
const easing = 'ease-out';
const id = '5kIoC1y1MPz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6mazMyZCP2y');
const duration = 750;
const easing = 'ease-out';
const id = '5vdwkqBUgjW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('60RXV5TeL5L');
const duration = 750;
const easing = 'ease-out';
const id = '6OBJ9xfrFV0';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('5z1Jr5SAegb');
const duration = 750;
const easing = 'ease-out';
const id = '6OlNyp2Vs8T';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6gAFX43tVHy');
const duration = 750;
const easing = 'ease-out';
const id = '6asMgfB0lnI';
const shakeAmount = 2;
const delay = 1000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  // Add this JavaScript code to each slide where you want to monitor for inactivity

var inactivityTimer; // Variable to store the timer

function startInactivityTimer() {
    inactivityTimer = setTimeout(onInactivityTimeout, 20000); // 20 seconds timer
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    startInactivityTimer(); // Reset the timer
}

function onInactivityTimeout() {
    var player = GetPlayer();
    player.SetVar("RestartCourse", true); // Set the variable to true to indicate course restart
}

// Event listeners to reset the timer on activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Touch events for touch-based devices
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);
document.addEventListener('touchend', resetInactivityTimer);

// Start the timer when the slide timeline starts
startInactivityTimer();

}

window.Script35 = function()
{
  const target = object('5ZFiO2bP7tZ');
const duration = 750;
const easing = 'ease-out';
const id = '6XCfXIThskk';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  player.once(() => {
const target = object('6ERqFrkyzX3');
const duration = 750;
const easing = 'ease-out';
const id = '6asMgfB0lnI';
const shakeAmount = 2;
const delay = 1000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
