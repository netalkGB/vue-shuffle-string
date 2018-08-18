export default (time) => {
  return new Promise((resolve) => {
    if (time <= 0) {
      resolve()
    } else {
      setInterval(() => {
        resolve()
      }, time)
    }
  })
}
