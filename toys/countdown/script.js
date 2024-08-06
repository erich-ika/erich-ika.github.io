const author = 'erich_ika'
let params = {
  by: 'erich_ika',
  to: 'Meu aniversário! :)',
  at: 1724036400000,
}

function get(target) {
  return document.getElementById(target)
}

function getParams() {
  const urlParams = new URLSearchParams(window.location.search);
  params = {
    by: urlParams.get('by'),
    to: urlParams.get('to'),
    at: urlParams.get('at'),
  }
  get('to').innerText = params.to;
  get('by').innerText = params.by;
  get('author').innerText = author;
}

class Time {
  constructor(m) {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    this.days = ~~(m / DAY)
    this.hours = ~~(m % DAY / HOUR)
    this.minutes = ~~(m % HOUR / MINUTE)
    this.seconds = ~~(m % MINUTE / SECOND) + 1
  }
  toString() {
    return `${this.days
      }d ${this.hours.toString().padStart(2, '0')
      }h ${this.minutes.toString().padStart(2, '0')
      }m ${this.seconds.toString().padStart(2, '0')
      }s`
  }
}

function renderClock() {
  const now = new Date();
  get('at').innerText = new Time(params.at - now)
  setTimeout(renderClock, 1E3 - (now % 1E3))
}

getParams();
renderClock()

