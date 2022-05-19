const Timer = {
  handler: null,
  counter: 0,
  initial: 30,
  duration: 1000, // One second
  container: document.querySelector(".js-wpm-time"),

  init: function () {
    this.counter = this.initial;
    this.container.innerText = this.initial;
  },

  start: function (func) {
    if (this.handler === null) {
      this.handler = setInterval(func, this.duration);
    }
  },

  stop: function () {
    this.pause();
    this.counter = 0;
  },

  pause: function () {
    clearInterval(this.handler);
    this.handler = null;
  },

  resume: function (func) {
    this.handler = setInterval(func, this.duration);
  },
};

export default Timer;
