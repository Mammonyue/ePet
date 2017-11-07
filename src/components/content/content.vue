<template>
  <div id="contentWrap">
    <scroller>
      <div id="content">
    <div class="cTimeActi">
        <ul class="cActivity" >
          <li>
            <p>11.1-11.8</p>
            <span>·三折起预售·</span>
            <div class="mask"> > </div>
          </li>
          <li>
            <p>11.9-11.11</p>
            <span>1折起狂欢·折上再9折</span>
            <div  class="mask"> > </div>
          </li>
          <li>
            <p>11.12-11.19</p>
            <span>享全年折上8.8折</span>
          </li>
        </ul>
    </div>
    <div class="banner">
      <div class="ban_wrap">
        <mt-swipe :auto="1000"  >
          <mt-swipe-item v-if="datas[0]">
            <a :href="datas[0].value1.param">
              <img :src="datas[0].value1.image"  >
            </a>
          </mt-swipe-item>
          <mt-swipe-item  v-if="datas[0]">
            <a :href="datas[0].value2.param" >
              <img :src="datas[0].value2.image" alt="" >
            </a>
          </mt-swipe-item>
          <mt-swipe-item >
            <a :href="datas[0].value3.param" v-if="datas[0]" >
              <img :src="datas[0].value3.image" alt="" >
            </a>
          </mt-swipe-item>
          <mt-swipe-item >
            <a :href="datas[0].value4.param" v-if="datas[0]">
              <img :src="datas[0].value4.image" alt="" >
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="fixBanner" v-if="datas[1]" >
      <img :src="datas[1].image" alt="">
    </div>
    <div class="classify" v-if="datas[2]">
      <div class="rows" v-if="datas[2]">
        <div v-for="img in datas[2].menus1">
          <a :href="img.target.param">
            <img :src="img.image" alt="">
          </a>
        </div>
      </div>
      <div class="rows" v-if="datas[2]">
        <div v-for="img in datas[2].menus2">
          <a :href="img.target.param">
            <img :src="img.image" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="strategy" v-if="datas">
      <div class="mBanner1" v-if="datas[3]">
        <a :href="datas[3].param">
          <img :src="datas[3].image" alt="">
        </a>
      </div>
      <div class="mBanner2" v-if="datas[4]">
        <a :href="datas[4].param">
          <img :src="datas[4].image" alt="">
        </a>
      </div>
    </div>
    <div class="surprise" v-if="sales">
          <div class="surprise-tit ">
            <div class="main">
              <div class="titimg" v-if="sales.surprise_icon">
                <img :src="sales.surprise_icon.image" />
              </div>
              <div class="word" >距本场结束</div>
              <div class="time" >
                <span class="time1-1">00</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
              </div>
              <div class="more" v-if="sales.right_image">
                <a href="javascript:;" >
                  <img :src="sales.right_image.image" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="surprise-pro" >
            <div class="surprise-container"  ref="salesWrapper">
              <ul class="main"  v-if="sales">
                <li v-for="good in sales.goods" >
                  <a href="javascript:;">
                    <div class="goods-img" >
                      <img :src="good.image.image" alt="">
                    </div>
                    <div class="money">
                      <span>¥</span>
                      <span>{{good.sale_price}}</span>
                      <p >{{good.little_price}}</p>
                      </div>
                    </a>
                </li>
              </ul>
            </div>
          </div>
    </div>
    <goods ></goods>
    <brand :datas="datas" ></brand>
    <div class="bottom">
      <div class="bottomM">
        <span class="bt" title="触屏版">触屏版</span>
        <span><a href="javascript:;">手机客户端</a></span>
        <span><a href="javascript:;">关于我们</a></span>
        <span><a href="javascript:;">联系我们</a></span>
      </div>
      <div class="btt">© wap.epet.com 版权：重庆易宠科技有限公司</div>
    </div>


    <!--content结束标签  -->
    </div>
    </scroller>
  </div>
</template>

<script type="es6">
  import goods from '../goods/goods.vue'
  import brand from '../brand/brand.vue'
  import BScroll from 'better-scroll'
  import axios from "axios"

export default {
    data(){
      return{
        sales:Object,
        time:{}
      }
    },
    components:{
      goods,
      brand
    },
    props: {
      datas: Array,
    },
    mounted(){
      axios.get('/api2/sales')
        .then(response => {
          const result = response.data
          if(result.code===0){
            this.sales=result.data
            console.log('sales请求成功！')

            this.$nextTick(()=>{
              this._initScroll()
            })
          }

        },(response)=>{
          console.log("请再次请求数据")
        })
    },
      methods:{
        _initScroll(){
          new BScroll(this.$refs.salesWrapper,{
            scrollX: true,
            click: true,
            momentum:true
          })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
