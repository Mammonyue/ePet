<template>
  <div id="app">
      <my-header></my-header>
      <my-content :datas="datas"></my-content>
      <my-footer :datas="datas"></my-footer>
  </div>
</template>
<script  type="es6">



  import header from './components/header/header.vue'
  import content from './components/content/content.vue'
  import footer from './components/footer/footer.vue'
 // import BScroll from 'better-scroll'

  import axios from "axios"

  export default {
    data(){
      return{
        datas:[]
      }
    },
    components:{
      'my-header':header,
      'my-content':content,
      'my-footer':footer
    },
    mounted(){
      axios.get('/api2/datas')
        .then(response => {
          const result = response.data
          this.datas=result.data
          console.log('datas请求成功！')
        },(response)=>{
          console.log("请再次请求数据")
        })

     /* new BScroll(this.$refs.scrollWrapper,{
        scrollX: true,
        click: true,
        momentum:true
      })*/
    }

}
</script>

<style>

</style>
