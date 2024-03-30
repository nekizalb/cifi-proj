function padZero(v) {
  if (v < 10) return '0' + v
  return v
}

function formatFloat(i) {
  try {
    return Intl.NumberFormat().format(i)
  } catch (e) {
    return `${i}`
  }
}

function formatInteger(i) {
  try {
    return Intl.NumberFormat().format(Math.floor(i))
  } catch (e) {
    return `${i}`
  }
}

function formatNotation(i) {
  const n = ['k', 'm', 'b', 't', 'qa', 'qu', 'sx', 'sp', 'o', 'n', 'd']

  const level = Math.min(Math.floor(Math.log10(i) / 3), n.length)
  if (level < 1) return formatInteger(i)

  return (i / Math.pow(10, 3 * level)).toFixed(2) + n[level - 1]
}

function formatLargeInteger(i) {
  if (i < 1e6) return formatInteger(i)

  if (i < 1e36) return formatNotation(i)

  return i.toExponential(2).replace('+', '')
}

/*
  1 d 02 h
  10 h 04 m
  40 m
  40 s
*/
function formatDuration(time) {
  if (time > 3600 * 24) {
    let hours = Math.round(time / 3600)
    const days = Math.floor(hours / 24)
    hours -= days * 24

    return `${days} d ${padZero(hours)} h`
  }

  if (time > 3600) {
    const hour = Math.floor(time / 3600)
    const min = Math.floor((time % 3600) / 60)
    return `${hour} h ${padZero(min)} m`
  }

  if (time > 60) {
    const min = Math.floor(time / 60)
    return `${min} m`
  }

  const sec = Math.floor(time)

  return `${sec} s`
}

function formatDuration2(seconds) {
  let hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600

  let minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60

  if (hours > 0) {
    seconds = Math.round(seconds)
  }

  let time = Math.round(seconds * 100) / 100
  if (minutes > 0 || hours > 0) {
    time = minutes + ':' + (seconds < 10 ? '0' : '') + Math.round(time)
    if (hours > 0) {
      time = hours + ':' + (minutes < 10 ? '0' : '') + time
    }
  } else {
    time = time + 's'
  }

  return time
}

function initTooltips() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  )
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
  )
}

function initPopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
  )
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
  )
}
