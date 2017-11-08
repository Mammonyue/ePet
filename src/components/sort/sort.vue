<template>
  <div id="sortWrap">
      <div class="sortHeader">
        <a href="javascript:;"><span class="cur" @click="">分类</span></a>
        <a href="javascript:;"><span>品牌</span></a>
      <img src="./search.png" alt="">
      </div>

    <div class="twoWrap">
      <!-- 左侧内容-->
      <div class="sortMenu">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li class="on"  >
              <span class="text border-1px">为您推荐</span>
            </li>
            <li >
              <span class="text border-1px">狗狗主粮</span>
            </li>
            <li >
              <span class="text border-1px">狗狗零食</span>
            </li>
            <li >
              <span class="text border-1px">狗狗服饰</span>
            </li>
            <li >
              <span class="text border-1px">狗狗窝垫</span>
            </li>
            <li >
              <span class="text border-1px">狗狗生活</span>
            </li>
            <li >
              <span class="text border-1px">狗狗玩具</span>
            </li>
            <li >
              <span class="text border-1px">狗狗保健</span>
            </li>
            <li >
              <span class="text border-1px">狗狗医疗</span>
            </li>
            <li >
              <span class="text border-1px">狗狗牵引</span>
            </li>
            <li >
              <span class="text border-1px">狗狗美容</span>
            </li>
            <li >
              <span class="text border-1px">狗狗周边</span>
            </li>
            <li >
              <span class="text border-1px">狗狗清洁</span>
            </li>
          </ul>
        </div>
      </div>
      <!--右侧内容-->
      <div class="sort-content">
        <div class="hot-title" ref="contentWrapper">
          <a href="javascript:;" class="title">热门分类</a>
          <ul class="clearfix">
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_1.jpg" >
                </div>
                <p class="ftc">进口狗粮</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_2.jpg" >
                </div>
                <p class="ftc">肠胃调理</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_3.jpg" >
                </div>
                <p class="ftc">体内驱虫</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_4.jpg" >
                </div>
                <p class="ftc">国产狗粮</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_1.jpg" >
                </div>
                <p class="ftc">进口狗粮</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_2.jpg" >
                </div>
                <p class="ftc">肠胃调理</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_3.jpg" >
                </div>
                <p class="ftc">体内驱虫</p>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;" class="db">
                <div class="rela">
                  <img class="image" src="./sort_4.jpg" >
                </div>
                <p class="ftc">国产狗粮</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
   import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(()=>{
        this._initScroll()
      })
    },
    methods:{
      _initScroll(){
        new BScroll(this.$refs.menuWrapper,{
         // scrollY: true,
          click: true,
          //momentum:true
        })
        new BScroll(this.$refs.contentWrapper,{
          // scrollY: true,
          click: true,
          //momentum:true
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">






</style>
