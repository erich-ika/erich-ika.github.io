const author = 'erich_ika'

const by = 'erich_ika'
const to = 'Meu aniversário! :)'
const at = 1724036400000

function get(target) {
  return document.getElementById(target)
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

  get('at').innerText = new Time(at - now)

  setTimeout(renderClock, 1E3 - (now % 1E3))
}

renderClock()

get('to').innerText = to;
get('by').innerText = by;
get('author').innerText = author;