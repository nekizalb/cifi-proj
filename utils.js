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
