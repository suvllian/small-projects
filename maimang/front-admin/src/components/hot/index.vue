<template>
	<div v-if="userInfo.admin">
		<Nav></Nav>
		<div class="container">
			<section>
				<h3 class="container-h">
					<span>热门课程</span>
				</h3>
				<table>
					<thead>
						<tr>
							<th>序号</th>
							<th>图片</th>
							<th>外链</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in hots">
							<td>{{ index + 1 }}</td>
							<td @click="SET_HOT_IMAGE_INDEX({ index:index, id:item.id, isUploading:true })"><label for="uploadBtn"><img :src="'./static/img/' + item.imgsrc "></label></td>
							<td>{{ item.src }}</td>
							<td><span class="change" @click="CHANGE_HOT_INFO({index:index, id:item.id, isChanging:true})">修改</span></td>
						</tr>

						<!-- 修改栏 -->
						<tr v-if="isChanging" class="tr-change">
							<td>{{ item.id }}</td>
							<td><img :src="'./static/img/' + item.imgsrc "></td>
							<td><input type="text" v-model="item.src"></td>
							<td>
								<span class="change" @click="SUBMIT_HOT_INFO(item)">确定</span>
								<span class="change" @click="CHANGE_HOT_INFO({index:0, isChanging:false})">取消</span>
							</td>
						</tr>
						<h3 class="container-h" v-if="!changeSuccess"><span>修改失败，请重试</span></h3>
						<!-- 修改栏 -->

					</tbody>
				</table>

				<!-- 文件上传预览 -->
				<div v-if="isUploading">
					<h3 class="container-h" v-if="!uploadSuccess"><span>上传失败，请重试</span></h3>
					<img src="#" alt="图片预览" class="view" ref="imageView">
					<button class="blue-Btn" @click.prevent="uploadImage">上传</button>
					<button class="blue-Btn" @click.prevent="SET_HOT_IMAGE_INDEX({ index:0, id:0, isUploading:false })">取消</button>
				</div>
				<!-- 文件上传预览 -->
			</section>
			<input id="uploadBtn" type="file" @change="selectImage" ref="file">
		</div>
	</div>
</template>

<script>
import Nav from './../home/nav.vue';
import { mapActions, mapState} from 'vuex'
import { GET_HOT_INFO, SET_HOT_IMAGE_INDEX, 
	UPLOAD_HOT_IMAGE, CHANGE_HOT_INFO, SUBMIT_HOT_INFO } from './../../vuex/type.js'
import { preViewImg } from './../../utils/preImage.js'

export default{
	components: { Nav },
	computed: mapState({ 
		hots: store => store.HotInfo.hots,
		index: store => store.HotInfo.index,
		id: store => store.HotInfo.id,
		uploadSuccess: store => store.HotInfo.uploadSuccess,
		isUploading: store => store.HotInfo.isUploading,
		isChanging: store => store.HotInfo.isChanging,
		item: store => store.HotInfo.item,
		changeSuccess: store => store.HotInfo.changeSuccess,
		userInfo: store => store.Login.userInfo
	}),
	methods:{
		...mapActions([GET_HOT_INFO, SET_HOT_IMAGE_INDEX, UPLOAD_HOT_IMAGE, 
			CHANGE_HOT_INFO, SUBMIT_HOT_INFO]),
		selectImage(){
		    preViewImg(this.$refs.file.files[0], this.$refs.imageView);
		},
		uploadImage(){
			this.UPLOAD_HOT_IMAGE({data: this.$refs.file.files[0], id: this.id});
		}
	},
	created(){
		if (!this.userInfo.admin) {
			this.$router.replace("login");
			return;
		}
		this.GET_HOT_INFO();
	}
}
</script>