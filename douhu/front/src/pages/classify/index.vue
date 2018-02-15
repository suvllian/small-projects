<template>
  <ArticleList :nav-list="navList" />
</template>

<script>
import ArticleList from '../../common/components/article-list.vue'

export default {
  components: { ArticleList },
  data () {
    return {
      navList: [
        { text: '敏感', value: 4 },
        { text: '痘痘', value: 5 },
        { text: '痘印', value: 6 },
        { text: '黑头', value: 7 }
      ]
    }
  }
}
</script>
