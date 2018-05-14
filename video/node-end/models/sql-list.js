module.exports = {
	/*
	 * 获取videoList
	 */
	query_videos: 'SELECT * FROM videoList ORDER BY id DESC LIMIT 0, 7',
	/**
	 * 查询用户密码
	 */
	query_user_password: 'SELECT * FROM user WHERE username = ?',
	/**
	 * 添加用户
	 */
	insert_new_user: 'INSERT INTO user (username, password) VALUES(?, ?)',
	/**
	 * 添加评论
	 */
	insert_new_content: 'INSERT INTO message (authorId, aTime, videoId, content) VALUES (?, ?, ?, ?)',
	/**
	 * 获取所有评论
	 */
	query_content_list: 'SELECT message.aTime, message.content, user.username FROM message, user WHERE videoId = ? AND message.authorId = user.id'
}

