<template>
  <div>
    <el-carousel :interval="5000" arrow="always" class="header">
      <el-carousel-item v-for="item in 3" :key="item">
        <img src="./../../assets/1.jpg">
      </el-carousel-item>
    </el-carousel>
    <div>
      <ul class="nav">
        <li class="nav-item" 
          v-for="(nav, index) in navList" 
          @click="getArticles(nav.value)">{{nav.text}}</li>
      </ul>
    </div>
    <div v-for="article in articleList">
      <a :href="article.link" target="_blank">
        <section class="article">
          <div class="article-image">
            <img :src="article.imgUrl" alt="image">
          </div>
          <div class="article-intro">
            <h3 class="article-title">{{article.title}}</h3>
            <p class="intro-p">{{article.intro}}</p>
          </div>
        </section>
      </a>
    </div>
  </div>
</template>

<script>
import api from '../../api'

export default {
  props: ['navList'],
  data () {
    return {
      articleList: []
    }
  },
  methods: {
    getArticles (articleType) {
      api.getMethod('getArticles', { article_type: articleType, pageIndex: 1 }).then(res => {
        this.articleList = res
      })
    }
  },
  created () {
    this.getArticles(this.navList[0].value)
  }
}
</script>
