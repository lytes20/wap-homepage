class Meditation {
  start() {
    let timerId = setInterval(() => {
      console.log("5");
    }, 1000);
    // after 5 seconds stop
    setTimeout(() => {
      clearInterval(timerId);
      console.log("Jay Guru Dev");
    }, 5000);
  }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev
