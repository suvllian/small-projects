var express = require('express');
var request = require('request');
var router = express.Router();
var utils = require('./../utils/index.js');
var Model = require('./../models/model');
var config = require('./../config/index.js');
var services = require('./../services/index');

router.get('/', function(req, res, next) {
  res.json({ author: 'suvllian'})
})


// 获取卡券列表
router.get('/get_page_information', function(req, res, next) {
  const { pageType } = req.query

  new Model('query_page_information').operate([pageType]).then(result => {
    return utils.successRes(res, {
      data: result
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '获取页面失败'
    })
  })
})

module.exports = router;
