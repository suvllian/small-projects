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
        { text: '清洁', value: 1 },
        { text: '护肤', value: 2 },
        { text: '防晒', value: 3 }
      ]
    }
  }
}
</script>
