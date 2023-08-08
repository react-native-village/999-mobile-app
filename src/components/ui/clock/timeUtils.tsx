export function getCurrentTime(): string {
  const now = new Date()
  const hours = padNumber(now.getHours())
  const minutes = padNumber(now.getMinutes())
  return `${hours}:${minutes}`
}

export function padNumber(num: number): string {
  return num < 10 ? `0${num}` : num.toString()
}
