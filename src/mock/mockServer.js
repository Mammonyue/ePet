import Mock from 'mockjs'
import data from './data.json'
//没有用了  用express获取到的数据
// 映射路由
Mock.mock('/api2/menus', {
  code: 0,
  data: data.menus
})
Mock.mock('/api2/datas', {
  code: 0,
  data: data.datas
})
Mock.mock('/api2/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/api2/sales', {
  code: 0,
  data: data.sales
})
