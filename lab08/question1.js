class Meditation {
  #counter = 5;
  start() {
    let timerId = setInterval(() => {
      console.log(this.#counter);
      this.#counter--;
    }, 1000);
    // after 5 seconds stop
    setTimeout(() => {
      clearInterval(timerId);
      console.log(this.#counter);
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
