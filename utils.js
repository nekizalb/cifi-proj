function formatInteger(i) {
  try {
    return Intl.NumberFormat().format(Math.floor(i))
  } catch (e) {
    return `${i}`
  }
}

function formatLargeInteger(i) {
  if (i < 1e6) return formatInteger(i)

  return i.toExponential(2).replace('+', '')
}

function initTooltips() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  )
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
  )
}
