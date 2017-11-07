<template>
  <div class="goods">
     <div class="title">
       <p>《预售抢先购·放价3折起》</p>
       <p>买贵赔十 尾款可享折上折</p>
     </div>
    <div class="goodslis" >
      <!--<div class="goodsli">
        <img src="./goods1-1.png" alt="">
        <ul class="goodscon">
          <li>
            <img src="./goods1-2.png" alt="">
            <p>天衡宝成犬粮26磅</p>
            <span class="nowPrice">￥528.0</span><span class="oldPrice">￥628.0</span>
          </li>
          <li>
            <img src="./goods1-3.png" alt="">
            <p>渴望幼犬粮11.4kg</p>
            <span class="nowPrice">￥749.0</span><span class="oldPrice">￥1000.0</span>
          </li>
          <li>
            <img src="./goods1-4.png" alt="">
            <p>卡比全犬粮44磅</p>
            <span class="nowPrice">8.5折内</span><span class="oldPrice">￥729.0</span>
          </li>
          <li>
            <img src="./goods1-5.png" alt="">
            <p>福摩全犬粮5磅</p>
            <span class="nowPrice">￥174.0</span><span class="oldPrice">￥218.0</span>
          </li>
          <div style="clear:both"></div>
          <li>
            <img src="./goods1-2.png" alt="">
            <p>天衡宝成犬粮26磅</p>
            <span class="nowPrice">￥528.0</span><span class="oldPrice">￥628.0</span>
          </li>
          <li>
            <img src="./goods1-3.png" alt="">
            <p>渴望幼犬粮11.4kg</p>
            <span class="nowPrice">￥749.0</span><span class="oldPrice">￥1000.0</span>
          </li>
          <li>
            <img src="./goods1-4.png" alt="">
            <p>卡比全犬粮44磅</p>
            <span class="nowPrice">8.5折内</span><span class="oldPrice">￥729.0</span>
          </li>
          <li>
            <img src="./goods1-5.png" alt="">
            <p>福摩全犬粮5磅</p>
            <span class="nowPrice">￥174.0</span><span class="oldPrice">￥218.0</span>
          </li>
        </ul>
      </div>

      <div class="goodsli">
        <img src="./goods1-1.png" alt="">
        <ul class="goodscon">
          <li>
            <img src="./goods1-2.png" alt="">
            <p>天衡宝成犬粮26磅</p>
            <span class="nowPrice">￥528.0</span><span class="oldPrice">￥628.0</span>
          </li>
          <li>
            <img src="./goods1-3.png" alt="">
            <p>渴望幼犬粮11.4kg</p>
            <span class="nowPrice">￥749.0</span><span class="oldPrice">￥1000.0</span>
          </li>
          <li>
            <img src="./goods1-4.png" alt="">
            <p>卡比全犬粮44磅</p>
            <span class="nowPrice">8.5折内</span><span class="oldPrice">￥729.0</span>
          </li>
          <li>
            <img src="./goods1-5.png" alt="">
            <p>福摩全犬粮5磅</p>
            <span class="nowPrice">￥174.0</span><span class="oldPrice">￥218.0</span>
          </li>
          <div style="clear:both"></div>
          <li>
            <img src="./goods1-2.png" alt="">
            <p>天衡宝成犬粮26磅</p>
            <span class="nowPrice">￥528.0</span><span class="oldPrice">￥628.0</span>
          </li>
          <li>
            <img src="./goods1-3.png" alt="">
            <p>渴望幼犬粮11.4kg</p>
            <span class="nowPrice">￥749.0</span><span class="oldPrice">￥1000.0</span>
          </li>
          <li>
            <img src="./goods1-4.png" alt="">
            <p>卡比全犬粮44磅</p>
            <span class="nowPrice">8.5折内</span><span class="oldPrice">￥729.0</span>
          </li>
          <li>
            <img src="./goods1-5.png" alt="">
            <p>福摩全犬粮5磅</p>
            <span class="nowPrice">￥174.0</span><span class="oldPrice">￥218.0</span>
          </li>
        </ul>
      </div>-->
      <img :src="img.image"  v-for="img in goods">
     <!-- <img :src="goods.value2.image" >
      <img :src="goods.value3.image" >
      <img :src="goods.value4.image" >
      <img :src="goods.value5.image" >-->
    </div>
  </div>
</template>

<script type="es6">
  import axios from 'axios'
export default {
    data(){
      return{
        goods:Array
      }
    },
    mounted(){
      axios.get('/api2/goods')
        .then(response => {
          const result = response.data
          if(result.code===0) {
            this.goods=result.data
            console.log('goods请求成功！')
          }
        },(response)=>{
          console.log("请再次请求数据")
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
