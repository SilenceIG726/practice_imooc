var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

//改變監聽最大值
life.setMaxListeners(11)

// addEventListener

function water(who) {
	console.log('給 ' + who + ' 倒水')
}

life.on('求安慰', water)

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' 揉肩')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' 做飯')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' 洗衣服')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' ...5')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' ...6')
})


life.on('求安慰', function (who) {
	console.log('給 ' + who + ' ...7')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' ...8')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' ...9')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' ...10')
})

life.on('求安慰', function (who) {
	console.log('給 ' + who + ' 你想累死我啊')
})

life.on('求溺愛', function (who) {
	console.log('給 ' + who + ' 買衣服')
})

life.on('求溺愛', function (who) {
	console.log('給 ' + who + ' 交工資')
})



life.removeListener('求安慰', water)
life.removeAllListeners('求安慰')

var hasConfortListener = life.emit('求安慰', '漢子')
var hasLovedListener = life.emit('求溺愛', '妹子')

//求數量
console.log(life.listeners('求安慰').length)
console.log(life.listeners('求溺愛').length)
// console.log(EventEmitter.listenerCount(life, '求安慰'))


// var hasPlayedListener = life.emit('求玩壞', '妹子和漢子')

// console.log(hasConfortListener)
// console.log(hasLovedListener)
// console.log(hasPlayedListener)