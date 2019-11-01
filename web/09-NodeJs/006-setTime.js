console.log('t0')

const t1 = setTimeout(()=>{
	console.log('t1')
},0)

const t2 = setInterval(()=>{
	console.log('t2')
},1000)

const t3 = setImmediate(()=>{
	console.log('t3')
})

const t4 = process.nextTick(()=>{
	console.log('t4')
})