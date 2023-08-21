<script>
import { RouterLink, RouterView } from 'vue-router'
import SectionTitle from './components/SectionTitle.vue'
import HeaderTop from './components/HeaderTop.vue'

export default {
  data() {
    return {
      
    }
  },
  components:{
    HeaderTop,
    SectionTitle
  }
};

</script>

<template>

  <body>

    <!-- <el-header></el-header> -->
    <HeaderTop></HeaderTop>

  </body>

  <RouterView />
</template>

<style scoped>

</style>
