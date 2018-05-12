module.exports = {
	/*
	 * 获取videoList
	 */
	query_videos: 'SELECT * FROM videoList ORDER BY id DESC LIMIT 0, 7',
	/**
	 * 查询用户密码
	 */
	query_user_password: 'SELECT password FROM user WHERE username = ?'
}

