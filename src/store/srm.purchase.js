export default {
  get: function (current, size) {
    let arr = []
    for (let i = 0; i < 888; i++) {
      arr.push({date: '2016-05-02',
        name: '王小虎',
        qty: 120,
        price: 200.23,
        amount: 1000.23,
        address: '上海市普陀区金沙江路 1518 弄'})
    }
    return arr
  }
}
