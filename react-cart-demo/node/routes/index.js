var express = require('express');
var router = express.Router();
const homeRouters = require('./home');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.type('html');
  res.render('index', { title: 'Expresssdddddssssss' });
});

router.get('/maka',homeRouters.defaultRoute); // 获取个人信息路由
// router.get('/insert',homeRouters.insertList); // 作添加使用路由

router.get('/getlist',homeRouters.findList) // 查询列表数据

router.get("/details",homeRouters.detailsFind) // 查询详情数据

module.exports = router;
