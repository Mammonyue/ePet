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

       <div id="headernav">
        <ul id="headernavLis">
            <li><a href="javascript:;"><span class="rela"><span>首页</span><i></i></span></a></li>
            <li><a href="javascript:;"><span ><span>服饰城</span><i></i></span></a></li>
            <li><a href="javascript:;"><span ><span>狗狗主粮</span><i></i></span></a></li>
            <li><a href="javascript:;"><span ><span>医疗保健</span><i></i></span></a></li>
            <li><a href="javascript:;"><span ><span>零食玩具</span><i></i></span></a></li>
            <li><a href="javascript:;"><span ><span>日用外出</span><i></i></span></a></li>
            <li><a href="javascript:;"><span ><span>美容香波</span><i></i></span></a></li>
        </ul>
      </div>
    </div>
</template>

<script>

  export default {}

 /* document.addEventListener('touchstart',function(event){
      event.preventDefault();
  });*/

  //导航交互
/*  navs();
  function navs(){
    let navsWrap = document.querySelector('headernav');
    let navsList = document.getElementById('headernavLis');

    //定义元素初始位置，手指初始位置
    let eleX = 0;
    let startX = 0;

    //加速
    let beginTime = 0;
    let beginValue = 0;
    let endTime = 0;
    let endValue = 0;
    //距离差时间差
    let disTime = 1;
    let disValue = 0;

    navsWrap.addEventListener('touchstart',function(event){
      let touch = event.changedTouches[0];

      //清除过渡
      navsList.style.transition = 'none';

      eleX = transformCss(navsList,'translateX');
      startX = touch.clientX;

      beginTime = new Date().getTime();   //毫秒
      beginValue = eleX;

      //清除速度
      disValue = 0;
    });
    navsWrap.addEventListener('touchmove',function(event){
      console.log('运行了')
      let touch = event.changedTouches[0];
      //手指结束位置
      let endX = touch.clientX;
      //手指距离差
      let disX = endX - startX;

      //范围限定
      //橡皮筋拖的效果     越来越难拖
      let translateX = disX+eleX;
      let scale = 0;
      let minX = document.documentElement.clientWidth-navsList.offsetWidth;
      if(translateX > 0){
        //比例：越来越小
        //    留白/屏幕宽度 （保证不同机型，实现相同效果）
        //留白 逐渐增大 ，scale逐渐减小，   1-留白/屏幕宽度
        scale = 1 - translateX/document.documentElement.clientWidth;

        translateX = 0 + translateX * scale;
      }else if(translateX <  minX){
        //    留白/屏幕宽度 （保证不同机型，实现相同效果）
        let over = minX - translateX ;
//					let over = Math.abs(translateX) - Math.abs(minX);
        scale = 1 - over/document.documentElement.clientWidth;

        translateX = minX - over* scale;
      };

      transformCss(navsList,'translateX',translateX);


      endTime = new Date().getTime();
      endValue = translateX;
      disValue = endValue - beginValue;
      disTime = endTime - beginTime;

    });
    //快速滑屏（加速）
    navsWrap.addEventListener('touchend',function(event){
      let touch = event.changedTouches[0];
      //速度
      let speed = disValue / disTime;
      console.log(speed);
//				endTime = new Date().getTime();
//				let speed = disValue / (endTime - beginTime);
      // 0 / 0 = NaN

      //目标位移距离  = touchmove产生的距离 + 速度计算出的结果
      let target = transformCss(navsList,'translateX') + speed * 100;

      let minX = document.documentElement.clientWidth-navsList.offsetWidth;
      //橡皮筋回弹效果
      //cubic-bezier(.09,1.61,.92,1.45)
      let bezier = '';
      if(target > 0){
        target = 0;
        bezier = 'cubic-bezier(.09,1.61,.92,1.45)';
      }else if(target < minX){
        target = minX;
        bezier = 'cubic-bezier(.09,1.61,.92,1.45)';
      };

      navsList.style.transition = '3s '+ bezier;
      transformCss(navsList,'translateX',target);
    });


  };*/
</script>




<style >


</style>
