const _A = document.getElementById('a'),
_O = document.querySelectorAll(`output[for='a'] span`),
_S = document.createElement('style');
let a = null;

console.log(_A.value)


function update() {
  if (a !== +_A.value) {
    _O[0].textContent = a = +_A.value;
    _S.textContent = `li:nth-child(-n + ${a}) { --s: 1 }`;
    _O[1].innerHTML = a ?
    a === 1 ? 'first item' : `first <code>${a}</code> items` :
    'nothing';
  }
}

update();
document.body.appendChild(_S);

addEventListener('input', update, false);
// addEventListener('change', update, false);

const _B = document.querySelector('.assembly'),
N = 6;

let i = 0;

addEventListener('animationend', e => {
  _B.classList.remove(`state${i}`);
  i = (i + 1) % N;
  _B.classList.add(`state${i}`);
}, false);

const _PTS = document.querySelectorAll('.point');

let sel = null, ani = false;

function trigger(el) {
  if (el.tagName.toLowerCase() === 'body') return null;
  if (el.tagName.toLowerCase() === 'dl') return el;
  return trigger(el.parentNode);
};

function switcha(e) {
  console.log('hey');
  if (e.target === _PTS[sel]) ani = !ani;
};

addEventListener('click', e => {
  const _T = e.target;

  if (_T.classList.contains('point')) {
    if (sel || sel === 0) _PTS[sel].classList.remove('sel');
    sel = +_T.dataset.i;
    _T.classList.add('sel');
  }
}, false);

addEventListener('dblclick', e => {
  const _T = trigger(e.target);

  if (_T && !ani && _T.parentNode === _PTS[sel]) {
    _T.parentNode.classList.remove('sel');
    sel = null;
  }
}, false);

class Stopwatch {
    constructor(display, results) {
      this.running = false;
      this.display = display;
      this.results = results;
      this.laps = [];
      this.reset();
      this.print(this.times);
    }
  
    reset() {
      this.times = [0, 0, 0];
    }
  
    start() {
      if (!this.time) this.time = performance.now();
      if (!this.running) {
        this.running = true;
        if (this.times[1] == 30) {
            this.time = null;
        }
        requestAnimationFrame(this.step.bind(this));
      }
    }
  
    lap() {
      let times = this.times;
      let li = document.createElement('li');
      li.innerText = this.format(times);
      this.results.appendChild(li);
    }
  
    stop() {
      this.running = false;
      this.time = null;
    }
  
    restart() {
      if (!this.time) this.time = performance.now();
      if (!this.running) {
        this.running = true;
        requestAnimationFrame(this.step.bind(this));
      }
      this.reset();
    }
  
    clear() {
      clearChildren(this.results);
    }
  
    step(timestamp) {
      if (!this.running) return;
      this.calculate(timestamp);
      this.time = timestamp;
      this.print();
      requestAnimationFrame(this.step.bind(this));
    }
  
    calculate(timestamp) {
      var diff = timestamp - this.time;
      // Hundredths of a second are 100 ms
      this.times[2] += diff / 10;
      // Seconds are 100 hundredths of a second
      if (this.times[2] >= 100) {
        this.times[1] += 1;
        this.times[2] -= 100;
      }
      // Minutes are 60 seconds
      if (this.times[1] >= 60) {
        this.times[0] += 1;
        this.times[1] -= 60;
      }
    }
  
    print() {
      this.display.innerText = this.format(this.times);
    }
  
    format(times) {
      return `\
  ${pad0(times[0], 2)}:\
  ${pad0(times[1], 2)}:\
  ${pad0(Math.floor(times[2]), 2)}`;
    }}
  
  
  function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
    result = '0' + result;
    return result;
  }
  
  function clearChildren(node) {
    while (node.lastChild)
    node.removeChild(node.lastChild);
  }
  
  let stopwatch = new Stopwatch(
  document.querySelector('.stopwatch'),
  document.querySelector('.results'));

        /* ---------------------------------------
                State Machine 
        ----------------------------------------*/

let result = document.getElementById('#breath-cycle-result');
document.getElementById(result).innerHTML = "Ready?";

let state = 'ready';
let cycle = 0;

while (cycle < 3) {

    const machine = {

        changeStateTo(newState) {
            this.state = newState;
        },


        transitions: {
            click: function () {
                this.changeStateTo('breathe')
            },
        },

        'breathe': {
            click: function () {
                this.changeStateTo('hold')
            },
            },
        },

        'hold': {
            click: function () {
                this.changeStateTo('relax');
            },
        },
        
        'relax': {
            click: function () {
                this.changeStateTo('inhale');
            },
        },

        'inhale': {
            cycle += 1;
            if (cycle < 3) {
                click: function () {
                    this.changeStateTo('breathe')
                    },
                } else {
                    end_machine ()
                        ...
                    },
                },
            },
        },
    }
} // Three cycles completed

let result = document.getElementById('#result');
let render = line => result.innerHTML = "Felicida!";

render(`initial state: ${ machine.state }`);

  