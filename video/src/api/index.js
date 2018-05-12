import { postFetch, getFetch } from './resource.js';

exports.login = (formData) => { 
	formData.append("concrete", "login");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.getIndexData = () => {
	return getFetch('get_index_info');
}

exports.login = (data) => {
	return postFetch('login', data);
}