
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