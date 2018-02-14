<template>
  <div>
    <ManageNav :active-key="'1'" />
    <el-table
      :data="articleList"
      border
      stripe
      style="width: 100%">
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="intro" label="文章介绍" />
      <el-table-column prop="link" label="文章链接" />
      <el-table-column
        prop="imgUrl"
        label="图片"
        width="200"
        align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl" alt="image" class="preview-img" />
        </template>
      </el-table-column>
      <el-table-column
        prop="article_type"
        label="分类"
        width="100"
        align="center">
        <template slot-scope="scope">
          <el-tag type="primary"
            close-transition>{{articleTypes[scope.row.article_type-1].text}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <router-link :to="{path:'add', query: {id: scope.row.id}}">
            <el-button size="mini">编辑</el-button>
          </router-link>
          <el-button
            size="mini"
            type="danger"
            @click="deleteArticle(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="pageIndex"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total" />
  </div>
</template>

<script>
import api from '../../api'
import ManageNav from '../../common/components/manage-nav.vue'

export default {
  components: { ManageNav },
  data () {
    return {
      pageIndex: 1,
      article_type: [1, 2, 3, 4, 5, 6, 7],
      filterType: 0,
      total: 0,
      articleList: [],
      articleTypes: [
        { text: '清洁', value: 1 },
        { text: '护肤', value: 2 },
        { text: '防晒', value: 3 },
        { text: '敏感', value: 4 },
        { text: '痘痘', value: 5 },
        { text: '痘印', value: 6 },
        { text: '黑头', value: 7 }
      ]
    }
  },
  methods: {
    getAllArticles (pageIndex, articleType) {
      this.pageIndex = pageIndex
      api.getMethod('getAllArticles', { pageIndex, article_type: JSON.stringify(articleType) }).then(res => {
        this.articleList = res.articles
        this.total = res.total
      })
    },
    deleteArticle (index, row) {
      this.$confirm('确认删除该文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        api.postMethod('deleteArticle', { id: row.id }).then(res => {
          if (res.data.success) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getAllArticles(this.pageIndex)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleCurrentChange (pageIndex) {
      this.getAllArticles(pageIndex, this.article_type)
    }
  },
  created () {
    this.getAllArticles(1, this.article_type)
  }
}
</script>
