import SunCalc from 'suncalc'

export function getCurrentTime(): string {
  const now = new Date()
  const hours = padNumber(now.getHours())
  const minutes = padNumber(now.getMinutes())
  return `${hours}:${minutes}`
}

export function padNumber(num: number): string {
  return num < 10 ? `0${num}` : num.toString()
}

export function getSolarNoon({lat, lon}: any) {
  const now = new Date()
  const sunPos = SunCalc.getTimes(now, lat, lon)
  console.log('now', now)
  console.log('Sun Position:', sunPos)
  return sunPos.solarNoon
}
