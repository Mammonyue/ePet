<template>
  <div class="brand">
      <div class="titleImg">
        <img :src="datas[5].value[0].image" alt="">
      </div>
      <div class="title">
        <p>《大牌提前购》</p>
        <p>精选国内外大牌 双11底价全面揭露</p>
      </div>
      <div class="brandlis">
        <div class="divboximg">
          <div class="divboximgTop">
            <div class="divimg">
              <a :href="img.target.param" v-for="img in datas[6].content_images[0]">
                  <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg" >
              <a :href="img.target.param"  v-for="img in datas[6].content_images[1]">
                <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg" >
              <a :href="img.target.param"  v-for="img in datas[6].content_images[2]">
                <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg" >
              <a :href="img.target.param"  v-for="img in datas[6].content_images[3]">
                <img :src="img.image" alt="">
              </a>

            </div>
          </div>
          <div class="divboximgBottom" >
            <div class="divimg">
              <a :href="datas[7].content_images[0][0].target.param">
                <img :src="datas[7].content_images[0][0].image" alt="" >
              </a>
            </div>
            <div class="divimg">
              <a :href="datas[7].content_images[1][0].target.param">
                <img :src="datas[7].content_images[1][0].image" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="divboximg">
          <div class="divboximgTop">
            <div class="divimg">
              <a :href="img.target.param" v-for="img in datas[8].content_images[0]">
                <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg" >
              <a :href="img.target.param"  v-for="img in datas[8].content_images[1]">
                <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg" >
              <a :href="img.target.param"  v-for="img in datas[8].content_images[2]">
                <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg" >
              <a :href="img.target.param"  v-for="img in datas[8].content_images[3]">
                <img :src="img.image" alt="">
              </a>

            </div>
          </div>
          <div class="divboximgBottom" >
            <div class="divimg">
              <a :href="datas[9].content_images[0][0].target.param">
                <img :src="datas[9].content_images[0][0].image" alt="" >
              </a>
            </div>
            <div class="divimg">
              <a :href="datas[9].content_images[1][0].target.param">
                <img :src="datas[9].content_images[1][0].image" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="title">
        <p>《特色栏目》</p>
        <p>贴近宠物生活 为爱宠创建无限美好</p>
      </div>
      <div class="brandlis">
        <div class="divboximg">
          <div class="divboximgBottom">
            <div class="divimg">
              <a href="javascript" v-for="img in datas[10].content_images[0]">
                <img :src="img.image" alt="">
              </a>
            </div>
            <div class="divimg">
              <a href="javascript" v-for="img in datas[10].content_images[1]">
                <img :src="img.image" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="title_spec">
        <p>《E宠狂欢节11.9-11.11等你来购》</p>
      </div>
      <div class="videodiv">
        <div class="videobox">
          <img :src="datas[11].value.first_img.image" v-show="isShow" @click="play">
          <video v-show="!isShow" :src="datas[11].value.video.url"  width="100%" height="100%" controls></video>
        </div>

      </div>
      <div class="grounding">
      <img :src="datas[12].value[0].image" alt="">
    </div>

  </div>
</template>

<script type="es6">
export default {
  data(){
    return{
      isShow:true
    }
  },
  props: {
    datas: Array
  },
  methods:{
    play(){
      this.isShow=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
