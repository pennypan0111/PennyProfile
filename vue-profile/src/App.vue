<script>
import { RouterLink, RouterView } from 'vue-router'
import SectionTitle from './components/SectionTitle.vue'


export default {
  data() {
    return {
      
    }
  },
  components:{
    SectionTitle
  }
};

</script>

<template>

  <body>

    <el-header></el-header>

  </body>

  <RouterView />
</template>

<style scoped>

</style>
