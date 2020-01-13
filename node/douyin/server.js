const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const superagent = require("superagent");
const cheerio  = require("cheerio");
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'public')))

app.listen(8080, () => {
  console.log('App listening at port 8080')
})

app.post('/updateIds', async (req, res) => {
    const ids = req.body.ids
    let result = [];
    for (let i in ids) {
        const res = await getUserInfo(ids[i])
        result.push({...res, id: ids[i]})
    }
    res.send({
        data: result,
        status: 1,
        msg: '成功'
    })
})

var change = {
	'1': ['\ue602','\ue60E','\ue618'],
	'0': ['\ue603','\ue60d','\ue616'],
	'3': ['\ue604','\ue611','\ue61a'],
	'2': ['\ue605','\ue610','\ue617'],
	'4': ['\ue606','\ue60c','\ue619'],
	'5': ['\ue607','\ue60f','\ue61b'],
	'6': ['\ue608','\ue612','\ue61f'],
	'9': ['\ue609','\ue615','\ue61e'],
	'7': ['\ue60a','\ue613','\ue61c'],
	'8': ['\ue60b','\ue614','\ue61d']
}

function change_2_num (code) {
	for (var i in change) {
		if (change[i].indexOf(code) !== -1) {
			return i
		}
	}
}

function getNum (selector) {
	var str = selector.text().replace(/\s/g,'')
	var result = ''
	for (let code of str) {
		result += change_2_num(code) || code
	}
	return result
}


function getUserInfo (id) {
	return new Promise((resolve, reject) => {
        superagent
        .get("https://www.iesdouyin.com/share/user/" + id)
        .end((error,response)=>{

            //获取页面文档数据
            var content = response.text;
            //cheerio也就是nodejs下的jQuery 将整个文档包装成一个集合，定义一个变量$接收
            var $ = cheerio.load(content);
            var nickName = $('.nickname').text();
            var nickName = $('.nickname').text();
            var dyID = getNum($('p.shortid')).replace('抖音ID：', '')
            var follower = getNum($('span.follower')).replace('粉丝', '')
            resolve({
                nickName,
                dyID,
                follower
            }) 
        })
    })
}