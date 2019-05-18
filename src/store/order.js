export default {
  get: async function (query) {
    await sleep(1000)
    let size = 8888888
    let arr = []
    let i = (query.page - 1) * 100
    let limit = query.page * query.limit < size ? query.page * query.limit : size
    for (i; i < limit; i++) {
      if (query.ormID === 'P') {
        arr.push({date: '2016-05-02',
          name: '王小虎' + i,
          qty: i,
          price: 200.23,
          amount: 1000.23,
          address: '上海市普陀区金沙江路 1518 弄'})
      } else if (query.ormID === 'W') {
        arr.push({date: '2016-05-02',
          name: '王大虎' + i,
          qty: i,
          price: 200.23,
          amount: 1000.23,
          address: '株洲市汽车城'})
      }
    }
    return {
      count: size,
      data: arr
    }
  }
}

function sleep (ms) {
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  )
}
