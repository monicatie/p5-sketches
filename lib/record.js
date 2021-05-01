var capturer;
var startMillis;

/**
 * 
 * @param {number} duration - milliseconds
 * @param {function} main - main draw function
 * @returns void
 */
function record(duration, main) {
  if (frameCount === 1) {
    // start the recording on the first frame
    // this avoids the code freeze which occurs if capturer.start is called
    // in the setup, since v0.9 of p5.js
    capturer.start();
    console.log("capture start")
  }

  if (startMillis == null) {
    startMillis = millis();
  }

  // compute how far we are through the animation as a value between 0 and 1.
  var elapsed = millis() - startMillis;
  var t = map(elapsed, 0, duration, 0, 1);

  // if we have passed t=1 then end the animation.
  if (t > 1) {
    noLoop();
    console.log('finished recording.');
    capturer.stop();
    capturer.save();
    return;
  }

  main();

  // handle saving the frame
  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));
}