console.log('this is react.js')

//第一种
// import {a,b} from './Module.js'
// console.log('a=',a)
// console.log('b=',b)

//第二种
// import {a} from './Module.js'
// import {b} from './Module.js'
// console.log('a=',a)
// console.log('b=',b)

//第三种
// import {a as aa} from './Module.js'
// import {b} from './Module.js'
// console.log('aa=',aa)
// console.log('b=',b)

//第四种
// import {a} from './Module.js'
// import {bb} from './Module.js'
// console.log('a=',a)
// console.log('bb=',bb)

//第五种
//default 导出时可以随意命名合法的名称
import c,{d} from './Module.js'
// import a,{d} from './Module.js'
console.log('c=',c)
// console.log('a=',a)

console.log('d=',d)
