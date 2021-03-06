import {getResource,postResource} from './resource';

export default{
	getArticle:(id) => { return getResource.get({ do:"get", concrete:"article", id:id})},

	getAlbum:() => { return getResource.get({ do:"get", concrete:"album"})},

	getHot:() => { return getResource.get({ do:"get", concrete:"hot"})},

	getTeacher:() => { return getResource.get({ do:"get", concrete:"teacher"})},

	getPerson:() => { return getResource.get({ do:"get", concrete:"person"})},

	getClass:() => { return getResource.get({ do:"get", concrete:"classes"})},

	postEmail:(value) => { return postResource.save({ do:"post", concrete:"email", email:value})},

	postJoin:(form) => { return postResource.save({ do:"post", concrete:"join", name:form.name, company:form.company,
					teacher: form.teacher, email: form.email, allow: form.allowSend})},

}