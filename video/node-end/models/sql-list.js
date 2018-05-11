module.exports = {
	/*
	 * 根据openid获取userid
	 */
	query_userid_by_openid: 'SELECT id FROM user WHERE open_id = ? AND phone = ?'
}

