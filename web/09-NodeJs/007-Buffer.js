const buf1 = Buffer.from('好')
console.log(buf1)//<Buffer e5 a5 bd>
const buf2 = Buffer.alloc(3)
console.log(buf2)
buf2[0] = 0xe5
buf2[1] = 0xa5
buf2[2] = 0xbd
console.log(buf2)
console.log(buf2.toString())
