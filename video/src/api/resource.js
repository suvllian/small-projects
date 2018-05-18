import fetch from 'isomorphic-fetch'

const URL = location.href.includes('localhost') ?  "http://localhost:9000" : "http://suvllian.top:9000"

const getInit = {
	method: "GET",
	mode: "cors",
	cache: "default"
}

const postInit = (formData) => {
	return {
		method: "POST",
		mode: "cors",
		cache: "default",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: formData
	}
}

exports.postFetch = (path, formData) => {
	return fetch(`${URL}/${path}`, postInit(formData)).then(response => response.json());
}

exports.getFetch = (path) => {
	let urlWithParams = URL + "/" + path;
	return fetch(urlWithParams).then(response => response.json());
}