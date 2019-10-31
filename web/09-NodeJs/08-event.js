
const EventEmitter = require('events')//获取监听对象



const emitter = new EventEmitter();//生成监听事件实例
emitter.on('test',()=>{
	console.log('emitter')
})//监听事件
emitter.emit('test')//触发事件


//定义自己的类
class MyEmitter extends EventEmitter{}
const Memitter = new MyEmitter();//生成监听事件实例
Memitter.on('test1',()=>{
	console.log('myEmitter')
})//监听事件
Memitter.emit('test1')//触发事件


//事件监听的几种方式
const emitter1 = new MyEmitter();

emitter1.on('test01',()=>{
	console.log('test01...')
})


emitter1.addListener('test01',()=>{
	console.log('test02...')
})

emitter1.once('test01',()=>{
	console.log('once...')
})


emitter1.emit('test01')
emitter1.emit('test01')//多次调用会全部执行监听多次

//监听的参数设置（不用传event参数）
const emitter2 = new MyEmitter();
emitter2.on('test02',(arg1,arg2)=>{
	console.log(arg1,arg2)
	console.log('test02...')
})
emitter2.emit('test02','aaa','bbb')
const arr = [11,22]//数组的话用扩展运算传参数
emitter2.emit('test02',...arr)




//移除监听事件
const emitter3 = new MyEmitter();
const fn1 = ()=>{
	console.log('test03----01...')
}
const fn2 = ()=>{
	console.log('test03----02...')
}
emitter3.on('test03',fn1)
emitter3.on('test03',fn2)
emitter3.off('test03',fn1)//第一种
// emitter3.removeListener('test03',fn2)//第二种，
// 两种没有任何区别,都只能移除有名函数
emitter3.emit('test03')


//自动触发监听事件
const emitter4 = new MyEmitter();
emitter4.on('newListener',(eventname,fn)=>{
	console.log('newlistener...')
	console.log(eventname)
	console.log(fn)
})
emitter4.on('show',()=>{
	console.log('show...')
})
