const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var router = express.Router();

/* GET home page. */
// get/post/put/delete 함수의 첫 번째 파라미터는 서버 리소스를 가리키는 URI 문자열을 지정한다.
// 두 번째 파라미터는 라우팅 로직 함수를 콜백 형태로 구현한다. 첫 번째 파라미터의 URI로 요청이 들어오면
// 두 번째 파라미터의 구현 함수가 동작한다.
// req.param(): url로 들어오는 파라미터
// req.params: url로 들어오는 쿼리값
// req.body: url로 들어오는 POST나 PUT 요청에서의 바디 데이터
// res는 요청한 클라이언트로 응답시 사용하는 객체
// res.render()는 템플릿 엔진을 렌더링하여 클라이언트로 내보낸다.
// res.send()는 헤더만 보내고, res.json()은 본문만 보낸다.
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send(202, 'with text');
});

// app.js로 모듈 연결
module.exports = router;