function decimalAdjust(type, value, exp) {
  type = String(type)
  if (!['round', 'floor', 'ceil'].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    )
  }
  exp = Number(exp)
  value = Number(value)
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN
  } else if (exp === 0) {
    return Math[type](value)
  }
  const [magnitude, exponent = 0] = value.toString().split('e')
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`)
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e')
  return Number(`${newMagnitude}e${+newExponent + exp}`)
}

// Decimal round
export const round10 = (value, exp) => decimalAdjust('round', value, exp)
// Decimal floor
export const floor10 = (value, exp) => decimalAdjust('floor', value, exp)
// Decimal ceil
export const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp)
