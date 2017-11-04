<template>
  <div id="contentWrap">
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
        <ul class="ban_list">
          <li>
            <a href="javascript">
              <img src="./banner_1.jpg" alt="">
              <!--<img src="banner_1.jpg"/>-->
            </a>
          </li>
          <li>
            <a href="javascript">
              <img src="./banner_2.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript">
              <img src="./banner_3.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript">
              <img src="./banner_4.jpg" alt="">
            </a>
          </li>
        </ul>
        <div class="ban_navs">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="fixBanner">
      <img src="./fixban.jpg" alt="">
    </div>
    <div class="classify">
      <div class="rows">
        <div>
          <a href="javascript:;">
            <img src="./classify_1.jpg" alt="">
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img src="./classify_2.jpg" alt="">
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img src="./classify_3.jpg" alt="">
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img src="./classify_4.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="rows">
        <div>
          <a href="javascript:;">
            <img src="./classify_5.jpg" alt="">
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img src="./classify_6.jpg" alt="">
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img src="./classify_7.jpg" alt="">
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img src="./classify_8.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="strategy">
      <div class="mBanner1">
        <img src="./Mbanner1.jpg" alt="">
      </div>
      <div class="mBanner2">
        <img src="./Mbanner2.jpg" alt="">
      </div>
    </div>
    <div class="surprise">
          <div class="surprise-tit ">
            <div class="main">
              <div class="titimg">
                <img src="./suprice.png">
              </div>
              <div class="word" >距本场结束</div>
              <div class="time">
                <span class="time1-1">00</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
              </div>
              <div class="more">
                <a href="javascript:;" >
                  <img src="./more.png">
                </a>
              </div>
            </div>
          </div>
          <div class="surprise-pro">
            <div class="surprise-container surprise-scroll">
              <ul class="main">
                <li>
                  <a href="javascript:;">
                    <div class="goods-img">
                      <img src="./surprise_1.jpg" alt="">
                    </div>
                    <div class="money">
                      <span>¥</span>
                      <span>5.50</span>
                      <p >省￥49.50</p>
                      </div>
                    </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="goods-img">
                      <img src="./surprise_2.jpg" alt="">
                    </div>
                    <div class="money">
                      <span>¥</span>
                      <span>5.50</span>
                      <p >省￥49.50</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="goods-img">
                      <img src="./surprise_3.jpg" alt="">
                    </div>
                    <div class="money">
                      <span>¥</span>
                      <span>5.50</span>
                      <p >省￥49.50</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <div class="goods-img">
                      <img src="./surprise_4.jpg" alt="">
                    </div>
                    <div class="money">
                      <span>¥</span>
                      <span>5.50</span>
                      <p >省￥49.50</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </div>
    <goods></goods>
    <brand></brand>
    <div class="bottom">
      <div class="bottomM">
        <span class="bt" title="触屏版">触屏版</span>
        <span><a href="javascript:;">手机客户端</a></span>
        <span><a href="javascript:;">关于我们</a></span>
        <span><a href="javascript:;">联系我们</a></span>
      </div>
      <div class="btt">© wap.epet.com 版权：重庆易宠科技有限公司</div>
    </div>
    <div class="fix"></div>

    <!--content结束标签  -->
    </div>
  </div>
</template>

<script type="es6">
  import goods from '../goods/goods.vue'
  import brand from '../brand/brand.vue'

export default {
    components:{
      goods,
      brand
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
