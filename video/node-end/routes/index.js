const express = require('express');
const request = require('request');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest:'public/images/' });
const utils = require('./../utils/index.js');
const Model = require('./../models/model');
const config = require('./../config/index.js');
const services = require('./../services/index');

router.get('/', function (req, res, next) {
  res.json({ author: 'suvllian' })
})

// 获取首页信息
router.get('/get_index_info', function (req, res, next) {
  const { videoClass } = req.query

  new Model('query_videos').operate([videoClass]).then(result => {
    return utils.successRes(res, {
      data: result
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '获取视频列表失败'
    })
  })
})

// 获取视频信息
router.get('/get_video_info', function (req, res, next) {
  const { videoId } = req.query

  new Model('query_video_info').operate([videoId]).then(result => {
    return utils.successRes(res, {
      data: result
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '获取视频列表失败'
    })
  })
})


// search value
router.get('/search', function (req, res, next) {
  const { searchValue } = req.query

  if (!searchValue) {
    return utils.successRes(res, {
      data: []
    })
  }

  const sql = "SELECT * FROM videolist WHERE title LIKE '%" + searchValue  + "%' OR content LIKE '%" + searchValue + "%'"

  new Model(sql).operate([], true).then(result => {
    return utils.successRes(res, {
      data: result
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '获取视频列表失败'
    })
  })
})


// 登录
router.post('/login', function (req, res, next) {
  const { username, password } = req.body

  new Model('query_user_password').operate([username]).then(result => {
    if (result.length === 0 || !result) {
      return utils.failRes(res, {
        msg: '用户不存在'
      })
    }

    if (result && result[0] && result[0].password == password) {
      return utils.successRes(res, {
        userId: result[0].id,
        username: result[0].username,
        csrf_token: encodeURI(username)
      })
    }
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '登录失败',
      data: req.body
    })
  })
})

// 注册
router.post('/register', function (req, res, next) {
  const { username, password } = req.body

  new Model('insert_new_user').operate([username, password]).then(result => {
    const { insertId } = result

    return insertId ? utils.successRes(res, {
      csrf_token: encodeURI(username)
    }) : utils.failRes(res, {
      msg: '注册失败'
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '注册失败',
      data: req.body
    })
  })
})

// 评论
router.post('/comment', function (req, res, next) {
  const { userId, content, videoId } = req.body
  const commentTime = new Date().getTime()

  new Model('insert_new_content').operate([userId, commentTime, videoId, content]).then(result => {
    const { insertId } = result

    return insertId ? utils.successRes(res) : utils.failRes(res, {
      msg: '评论失败'
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '评论失败',
      data: req.body
    })
  })
})


// 获取评论
router.get('/comment_list', function (req, res, next) {
  const { videoId } = req.query

  new Model('query_content_list').operate([videoId]).then(result => {
    return utils.successRes(res, {
      data: result
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '获取评论失败',
      data: req.query
    })
  })
})

router.post('/love', function (req, res, next) {
  const { userId, videoId } = req.body

  if (!userId || !videoId) {
    return utils.failRes(res)
  }

  new Model('query_user_love_video').operate([userId, videoId]).then(result => {
    let sqlSentence = (!result || !result.length) ? 'insert_user_love' : 'delete_user_love'

    new Model(sqlSentence).operate([userId, videoId]).then(result => {

      return utils.successRes(res)
    }).catch(error => {
      console.log(error)
      return utils.failRes(res, {
        msg: '操作失败',
        data: req.body
      })
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '操作失败',
      data: req.body
    })
  })
})

router.post('/collect', function (req, res, next) {
  const { userId, videoId } = req.body

  if (!userId || !videoId) {
    return utils.failRes(res)
  }

  new Model('query_user_collect_video').operate([userId, videoId]).then(result => {
    let sqlSentence = (!result || !result.length) ? 'insert_user_collect' : 'delete_user_collect'

    new Model(sqlSentence).operate([userId, videoId]).then(result => {

      return utils.successRes(res)
    }).catch(error => {
      console.log(error)
      return utils.failRes(res, {
        msg: '操作失败1',
        data: req.body
      })
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '操作失败2',
      data: req.body
    })
  })
})

router.get('/collectLoveCount', function (req, res, next) {
  const { userId, videoId } = req.query

  if (!videoId) {
    return utils.failRes(res)
  }


  new Model('query_video_collect_count').operate([videoId]).then(collectCount => {
    new Model('query_video_love_count').operate([videoId]).then(loveCount => {
      if (!userId) {
        return utils.successRes(res, {
          collectCount,
          loveCount
        })
      }

      new Model('query_user_collect_video').operate([userId, videoId]).then(isCollect => {
        new Model('query_user_love_video').operate([userId, videoId]).then(isLove => {
          return utils.successRes(res, {
            isCollect: isCollect && isCollect.length > 0 ? true : false,
            isLove: isLove && isLove.length > 0 ? true : false,
            collectCount,
            loveCount
          })
        }).catch(error => {
          console.log(error)
          return utils.failRes(res, {
            msg: '操作失败1'
          })
        })
      }).catch(error => {
        console.log(error)
        return utils.failRes(res, {
          msg: '操作失败2'
        })
      })
    }).catch(error => {
      console.log(error)
      return utils.failRes(res, {
        msg: '操作失败3'
      })
    })
  }).catch(error => {
    console.log(error)
    return utils.failRes(res, {
      msg: '操作失败4'
    })
  })
})

router.post('/uploadFile', function (req, res, next) {
  const { content } = req.body

  new Model('query_video_byinput').operate([content]).then(result => {
    return utils.successRes(res, {
      data: []
    })
  }).catch(error => {
    return utils.failRes(res, {
      msg: '搜索失败',
      data: req.body
    })
  })
})

// router.post('/uploadFile', upload.single('file'), (req, res, next) => {
// 	const { file } = req
// 	const { originalname, filename, fieldname } = file
// 	const extension = originalname.substring(originalname.lastIndexOf('.'))
// 	const newFileName = `${filename}${extension}`
// 	fs.renameSync(`public/images/${filename}`, `public/images/${filename}${extension}`)
// 	res.json({ newFileName, success: true })
// });


module.exports = router;
