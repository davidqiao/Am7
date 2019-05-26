/**
 * struct: {
    prop: 'name'            对应列内容的字段名
    label: 'name'           显示的标题
    width: 100              对应列的宽度
  }
 */
export default {
  get: async function (query) {
    await sleep(1000)
    let size = random
    let arr = []
    let struct = []
    let i = (query.page - 1) * 100
    let limit = query.page * query.limit < size ? query.page * query.limit : size
    struct.push({
      prop: 'date',
      label: '日期',
      width: 150
    }, {
      prop: 'name',
      label: '姓名',
      width: 150
    }, {
      prop: 'qty',
      label: '数量',
      width: 150
    }, {
      prop: 'price',
      label: '单价',
      width: 150
    }, {
      prop: 'amount',
      label: '金额',
      width: 150
    }, {
      prop: 'address',
      label: '地址'
    })
    for (i; i < limit; i++) {
      let price = (Math.random() * 900 + 100 + 1).toFixed(2)
      arr.push({
        id: i,
        date: '1990-09-23',
        name: '乔磊' + i,
        qty: i,
        price: price,
        amount: (i * price).toFixed(2),
        address: '株洲市汽车城A8栋406'
      })
    }

    return {
      count: size,
      data: arr,
      struct: struct
    }
  }
}

function sleep (ms) {
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  )
}

const random = Math.ceil(Math.random() * 19900 + 100 + 1)
