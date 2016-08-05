var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '5-12 request方法 測試',
	'cid': 348
})

var option = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	header: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-TW,zh;q=0.8,en-US;q=0.6,en;q=0.4',
		'Connection':'keep-alive',
		'Content-Length': postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=9c07ae94-5b82-4da6-9e17-701608246d91; imooc_isnew_ct=1469957449; loginstate=1; apsid=M5ZDQzMDU2M2RmYTc3NTMwM2Q3NDQ4ODM4NDA3YTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjc3NzIyNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6ZW50aW0zMjQ4QGdtYWlsLmNvbQAAAAAAAAAAAAAAAGM5MjZhMzNjZTQ3MjI1YjE3MjlkMGEzM2JhNjU1Yzlh08adV9PGnVc%3DZm; last_login_username=zentim3248%40gmail.com; PHPSESSID=vkheis40betnugbobmeefmg2e0; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1470190747,1470215303,1470370693,1470382247; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1470392227; imooc_isnew=2; cvde=57a440ccbac17-31',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}


var req = http.request(options, function (res) {
	console.log('Status: ' + res.statusCode)
	console.log('hearders: ' + JSON.stringify(res.headers))

	res.on('data', function (chunk) {
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end', function () {
		console.log('評論完畢! ')
	})
})

req.on('error', function (e) {
		console.log('Error: ' + e.message)
	})

	req.write(postData)
	req.end()