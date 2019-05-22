export default function (r, prop) {
  for (let i = 0; i < r.matched.length; i++) {
    if (prop in r.matched[i].meta) {
      return r.matched[i].meta[prop]
    }
  }
  return ''
}
