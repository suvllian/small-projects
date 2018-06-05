import { postFetch, getFetch } from './resource.js';

exports.getIndexData = (data) => {
	return getFetch(`get_index_info?${data}`);
}

exports.getVideoResource = (data) => {
	return getFetch(`get_video_info?${data}`);
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

exports.loveFetch = (data) => {
	return postFetch('love', data);
}

exports.collectFetch = (data) => {
	return postFetch('collect', data);
}

// upload file
exports.uploadFetch = (data) => {
	return postFetch('uploadFile', data);
}

// 获取收藏数量和评论数量
exports.getCollectLoveCount = data => {
	return getFetch(`collectLoveCount?${data}`)
}

// search value
exports.searchFetch = data => {
	return getFetch(`search?${data}`)
}

// love videos
exports.getlLoveVideosFetch = data => {
	return getFetch(`getLove?${data}`)
}

// love videos
exports.getlCollectVideosFetch = data => {
	return getFetch(`getCollect?${data}`)
}

exports.getCommentFetch = (id) => {
	return getFetch(`comment_list?videoId=${id}`);
}