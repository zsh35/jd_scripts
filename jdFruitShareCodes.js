/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
'daa215ccbff74b78ae3507287172fd48@8423a9fdde754de789d5154b03b9ea7b@49047a66dee7494d9cd21ece0c4fac7b@db50485052ef418a8ef219bf1606d79d@e0e1590199d940afba1b48b3394e44b3@a4d40aebb05242c4a15b2e534b1d64a6@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@8423a9fdde754de789d5154b03b9ea7b@49047a66dee7494d9cd21ece0c4fac7b@db50485052ef418a8ef219bf1606d79d@e0e1590199d940afba1b48b3394e44b3@a4d40aebb05242c4a15b2e534b1d64a6@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@daa215ccbff74b78ae3507287172fd48@49047a66dee7494d9cd21ece0c4fac7b@db50485052ef418a8ef219bf1606d79d@e0e1590199d940afba1b48b3394e44b3@a4d40aebb05242c4a15b2e534b1d64a6@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@daa215ccbff74b78ae3507287172fd48@8423a9fdde754de789d5154b03b9ea7b@db50485052ef418a8ef219bf1606d79d@e0e1590199d940afba1b48b3394e44b3@a4d40aebb05242c4a15b2e534b1d64a6@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@daa215ccbff74b78ae3507287172fd48@8423a9fdde754de789d5154b03b9ea7b@49047a66dee7494d9cd21ece0c4fac7b@e0e1590199d940afba1b48b3394e44b3@a4d40aebb05242c4a15b2e534b1d64a6@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@daa215ccbff74b78ae3507287172fd48@8423a9fdde754de789d5154b03b9ea7b@49047a66dee7494d9cd21ece0c4fac7b@db50485052ef418a8ef219bf1606d79d@a4d40aebb05242c4a15b2e534b1d64a6@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@daa215ccbff74b78ae3507287172fd48@8423a9fdde754de789d5154b03b9ea7b@49047a66dee7494d9cd21ece0c4fac7b@db50485052ef418a8ef219bf1606d79d@e0e1590199d940afba1b48b3394e44b3@031246914ece4dcab5422578d3ca2b39',
'65212747bf0b453db1baf91725803b72@daa215ccbff74b78ae3507287172fd48@8423a9fdde754de789d5154b03b9ea7b@49047a66dee7494d9cd21ece0c4fac7b@db50485052ef418a8ef219bf1606d79d@e0e1590199d940afba1b48b3394e44b3@a4d40aebb05242c4a15b2e534b1d64a6'

]

// 从日志获取互助码
const logShareCodes = require('./utils/jdShareCodes');
if (logShareCodes.FRUITSHARECODES.length > 0 && !process.env.FRUITSHARECODES) {
  process.env.FRUITSHARECODES = logShareCodes.FRUITSHARECODES.join('&');
}

// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您环境变量(FRUITSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
