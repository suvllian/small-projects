module.exports = {
	/*
	 * 获取videoList
	 */
	query_videos: 'SELECT * FROM videolist ORDER BY id DESC LIMIT 0, 8',
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
	query_content_list: 'SELECT message.aTime, message.content, user.username FROM message, user WHERE videoId = ? AND message.authorId = user.id ORDER BY message.id DESC',
	/**
	 * 搜索视频
	 */
	query_video_byinput: "SELECT * FROM videolist WHERE title = '%' + ?  + '%' OR content = '%' + ?  + '%'",
	/**
	 * 查询该用户是否喜欢该视频
	 */
	query_user_love_video: 'SELECT * FROM lovevideo WHERE authorId = ? AND videoId = ?',
	/**
	 * 新增视频喜欢数量
	 */
	insert_user_love: 'INSERT INTO lovevideo (authorId, videoId) VALUES(?, ?)',
	/**
	 * 更新视频喜欢数量
	 */
	delete_user_love: 'DELETE FROM lovevideo WHERE authorId = ? AND videoId = ?',
	/**
	 * 查询该用户是否收藏该视频
	 */
	query_user_collect_video: 'SELECT * FROM collectvideo WHERE authorId = ? AND videoId = ?',
	/**
	 * 新增视频收藏数量
	 */
	insert_user_collect: 'INSERT INTO collectvideo (authorId, videoId) VALUES(?, ?)',
	/**
	 * 更新视频收藏数量
	 */
	delete_user_collect: 'DELETE FROM collectvideo WHERE authorId = ? AND videoId = ?',
	/**
	 * 查询某个视频收藏数量
	 */
	query_video_collect_count: 'SELECT COUNT(*) FROM collectvideo WHERE videoId = ?',
	/**
	 * 查询某个视频被喜欢的数量
	 */
	query_video_love_count: 'SELECT COUNT(*) FROM lovevideo WHERE videoId = ?'
}

