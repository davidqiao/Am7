export default {
  login: async function (username, password) {
    await sleep(2000)
  }
}

function sleep (ms) {
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  )
}
