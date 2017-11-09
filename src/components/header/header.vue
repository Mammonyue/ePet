<template>
    <div id="header">
      <div id="titleWrap">
        <div id="title">
          <div class="t_left">
            <a href="javascript:;">
              <span class="title1">狗狗站</span>
              <span>|</span>
              <span class="title2">重庆</span>
              <i></i>
            </a>
          </div>
          <p class="search-text">
            <a href="javascript:;">
              <input type="text" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="serach-icon">
                <img src="./search.png" alt="">
              </span>
            </a>
          </p>
          <a  class="t_right" href="javascript:;">
            <img src="./mydope.png" alt="">
          </a>
        </div>
      </div>

      <div id="headernav" ref="scrollWrapper">
        <ul id="headernavLis">
            <li v-for="(menu, index) in menus" :key="index" :class="{rela:menu.menu_type==1}" @click="clickNav(menu)"><a href="javascript:;"><span><span>{{menu.menu_name}}</span><i></i></span></a></li>
        </ul>
      </div>
      <div class="fix"></div>
      <!--点击狗狗-->
      <div class="mask">
        <div class="mask-wrapper">

        </div>
      </div>
    </div>
</template>

<script type="es6">
  import axios from "axios"
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        menus:[]
      }
    },
    methods:{
      clickNav(menu){
          this.menus.forEach(item=>{
              item.menu_type=0
          })
        menu.menu_type=1
      }
    },
    mounted(){
      axios.get('/api2/menus')
        .then(response => {
          const result = response.data
          this.menus=result.data
          console.log('menus请求成功！')
        },(response)=>{
          console.log("请再次请求数据")
        })

        new BScroll(this.$refs.scrollWrapper,{
          scrollX: true,
          click: true,
          momentum:true
        })
    }
  }


</script>

<style >


</style>
