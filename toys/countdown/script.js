const author = 'erich_ika'
let params = {}

function get(target) {
  return document.getElementById(target)
}

function formMode(bool) {
  document.querySelectorAll('.in')
    .forEach(e => e.style.display = bool ? 'unset' : 'none')
  document.querySelectorAll('.out')
    .forEach(e => e.style.display = bool ? 'none' : 'unset')
  if (!bool) {
    const now = new Date();
    get('at').innerText = new Time(params.at - now)
  }
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
  formMode(params.at == 'NaN' || !params.at || !params.by || !params.to)
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

function buttonCreate() {
  const url = new URL(window.location.href);
  url.search = '';
  window.history.pushState({}, document.title, url)
  getParams();
}

function buttonMake() {
  const form = {
    to: get('to-in').value,
    at: new Date(get('at-in').value).getTime(),
    by: get('by-in').value,
  };

  if (!form.to || !form.at || !form.by) {
    window.alert('Preencha todos os três campos')
    return
  }

  const url = new URL(window.location.href);
  url.searchParams.set('to', form.to);
  url.searchParams.set('at', form.at);
  url.searchParams.set('by', form.by);
  window.history.pushState({}, document.title, url);
  getParams();
}

getParams();
renderClock()
