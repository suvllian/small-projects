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