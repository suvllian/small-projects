const ArticleSql = {
  insert: 'INSERT INTO article(article_type, title, intro, imgUrl, link) VALUES(?, ?, ?, ?, ?)',
  update: 'UPDATE article SET article_type = ?, title = ?, intro = ?, imgUrl = ?, link = ? WHERE id = ?',
  query: 'SELECT * FROM article WHERE article_type = ? LIMIT ?, 10',
  querySingle: 'SELECT * FROM article WHERE id = ?',
  queryAll: 'SELECT * FROM article WHERE article_type in (?) ORDER BY id DESC LIMIT ?, 10',
  queryCount: 'SELECT COUNT(*) FROM article',
  delete: 'DELETE FROM article WHERE id = ?'
};

module.exports = ArticleSql