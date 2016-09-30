// your code here:
window.onload = function() {

  var buttonStart = document.getElementById('start');
  var buttonPause = document.getElementById('pause');
  var buttonReset = document.getElementById('reset');
  var count = 0;
  var x = 0;

  // object.onclick=function(){
  // myScript
  // }; syntax for onclick function
  buttonStart.onclick = function() {
  x = window.setInterval(startTimer, 1000);
}
// To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in milliseconds

//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();

  buttonPause.onclick = function() {
    window.clearInterval(x);
  }

  buttonReset.onclick = function () {
    var timerId = document.getElementById('timer');
    window.clearInterval(x);
    count = 0;
    timerId.textContent = "Stop Watch";
  }

  function startTimer (){
    var timerId = document.getElementById('timer');
    timerId.textContent =  "Time elapsed " + count;
    count++;
  }
}
