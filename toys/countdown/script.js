const target = 1724036400000
console.log(new Date())

class Time {
  SECOND = 1000;
  MINUTE = this.SECOND * 60;
  HOUR = this.MINUTE * 60;
  DAY = this.HOUR * 24;
  constructor(m) {
    this.days = ~~(m / this.DAY)
    this.hours = ~~(m % this.DAY / this.HOUR)
    this.minutes = ~~(m % this.HOUR / this.MINUTE)
    this.seconds = ~~(m % this.MINUTE / this.SECOND)
  }
  toString() {
    return `${this.days}d ${this.hours}h ${this.minutes}m ${this.seconds}s`
  }
}

function renderClock() {
  const now = new Date();

  document.getElementById('clock').innerText = `${now.getDate().toString().padStart(2, '0')
    }/${(now.getMonth() + 1).toString().padStart(2, '0')
    }/${now.getFullYear()
    } ${now.getHours().toString().padStart(2, '0')
    }:${now.getMinutes().toString().padStart(2, '0')
    }:${now.getSeconds().toString().padStart(2, '0')
    }`

  document.getElementById('clock2').innerText = new Time(target - now)

  setTimeout(renderClock, 1E3 - (now % 1E3))
}

renderClock()
