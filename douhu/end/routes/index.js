const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest:'public/images/' });
const utils = require('./../utils/index.js');
const dbConfig = require('./../models/db-config');
const articleSql = require('./../models/article-sql');
const pool = mysql.createPool(dbConfig.mysql);
 
router.get('/', (req, res, next) => {
	res.send('suvllian')
});

router.get('/getArticle', (req, res, next) => {
  pool.getConnection((err, connection) => {
    const { id } = req.query
    connection.query(articleSql.querySingle, [id], (err, article) => {
      responseJSON(res, article[0], 'get');
      connection.release()
    });
  });
});

router.get('/getArticles', (req, res, next) => {
  pool.getConnection((err, connection) => {
    const { article_type, pageIndex } = req.query
    connection.query(articleSql.query, [article_type, (pageIndex-1)*10], (err, articles) => {
      responseJSON(res, articles, 'get');
      connection.release()
    });
  });
});

router.get('/getAllArticles', (req, res, next) => {
  pool.getConnection((err, connection) => {
    const { pageIndex, article_type } = req.query
    connection.query(articleSql.queryAll, [JSON.parse(article_type), (pageIndex-1)*10], (err, articles) => {
    	connection.query(articleSql.queryCount, (err, count) => {
    		const result = { total: count[0]['COUNT(*)'], articles }
    		responseJSON(res, result, 'get');
      		connection.release()
    	})
    });
  });
});

router.post('/editArticle', (req, res, next) => {
	pool.getConnection((err, connection) => {
		const { title, intro, article_type, imgUrl, link, id } = req.body
		connection.query(articleSql.update, [article_type, title, intro, imgUrl, link, id], (err, result) => {
			responseJSON(res, result, 'post');
			connection.release()
		})
	});
});

router.post('/addArticle', (req, res, next) => {
	pool.getConnection((err, connection) => {
		const { title, intro, article_type, imgUrl, link } = req.body
		connection.query(articleSql.insert, [article_type, title, intro, imgUrl, link], (err, result) => {
			responseJSON(res, result, 'post');
			connection.release()
		})
	});
});

router.post('/deleteArticle', (req, res, next) => {
	pool.getConnection((err, connection) => {
		const { id } = req.body
		connection.query(articleSql.delete, [id], (err, result) => {
			responseJSON(res, result, 'post');
			connection.release()
		})
	});
});

router.post('/uploadImage', upload.single('file'), (req, res, next) => {
	const { file } = req
	const { originalname, filename, fieldname } = file
	const extension = originalname.substring(originalname.lastIndexOf('.'))
	const newFileName = `${filename}${extension}`
	fs.renameSync(`public/images/${filename}`, `public/images/${filename}${extension}`)
	res.json({ newFileName, success: true })
});

module.exports = router;
