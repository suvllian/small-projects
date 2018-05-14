import { postFetch, getFetch } from './resource.js';

exports.getIndexData = () => {
	return getFetch('get_index_info');
}

exports.loginFetch = (data) => {
	return postFetch('login', data);
}

exports.registerFetch = (data) => {
	return postFetch('register', data);
}

exports.commentFetch = (data) => {
	return postFetch('comment', data);
}

exports.getCommentFetch = (id) => {
	return getFetch(`comment_list?videoId=${id}`);
}