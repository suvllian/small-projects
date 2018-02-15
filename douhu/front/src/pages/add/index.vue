<template>
  <div>
    <ManageNav :active-key="'2'" />
    <el-form ref="addForm" :model="form" :rules="rules" label-width="100px" class="add-form">
      <el-form-item label="文章标题:" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="文章简介:" prop="intro">
        <el-input v-model="form.intro" />
      </el-form-item>
      <el-form-item label="文章类型:" prop="article_type">
        <el-select v-model="form.article_type" placeholder="请选择文章类型">
          <el-option v-for="articleType in articleTypes" 
          :label="articleType.text" :value="articleType.value" :key="articleType.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章链接:" prop="link">
        <el-input v-model="form.link" />
      </el-form-item>
      <el-form-item :label="id ? '重新上传图片:' : '上传图片:'">
        <img :src="form.imgUrl" alt="image preview" class="preview-img" v-if="id" />
        <el-upload ref="upload"
          :action="`${APIURL}/uploadImage`"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{ id ?'立即修改' : '立即添加'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import api from '../../api'
import { APIURL } from '../../config'
import ManageNav from '../../common/components/manage-nav.vue'

export default {
  components: { ManageNav },
  data () {
    return {
      id: 0,
      form: {
        title: '',
        intro: '',
        article_type: '',
        imgUrl: '',
        link: ''
      },
      rules: {
        title: [{required: true, message: '请输入活动名称', trigger: 'blur'}],
        intro: [{required: true, message: '请输入文章简介', trigger: 'blur'}],
        article_type: [{required: true, message: '选择文章类型'}],
        link: [{required: true, message: '请输入文章链接', trigger: 'blur'}]
      },
      articleTypes: [
        { text: '清洁', value: 1 },
        { text: '护肤', value: 2 },
        { text: '防晒', value: 3 },
        { text: '敏感', value: 4 },
        { text: '痘痘', value: 5 },
        { text: '痘印', value: 6 },
        { text: '黑头', value: 7 }
      ],
      fileList: [],
      APIURL
    }
  },
  methods: {
    onSubmit () {
      this.$refs['addForm'].validate(valid => {
        if (valid) {
          const path = this.id ? 'editArticle' : 'addArticle'
          api.postMethod(path, this.form).then(res => {
            if (res.status === 200 && res.data.success) {
              this.$message({
                message: '添加/修改成功',
                type: 'success'
              })
              this.$refs['addForm'].resetFields()
              this.$refs['upload'].clearFiles()
              this.id = 0
            }
          })
        } else {
          this.$message({
            message: '请将内容填写完整',
            type: 'fail'
          })
          return false
        }
      })
    },
    uploadSuccess (res, file, fileList) {
      this.form.imgUrl = `${APIURL}/public/images/${res.newFileName}`
    },
    uploadError (err, file, fileList) {
      console.log(err)
    }
  },
  created () {
    const { id } = this.$route.query
    this.id = id
    if (id) {
      api.getMethod('getArticle', { id }).then(res => {
        this.form = res
      })
    }
  }
}
</script>