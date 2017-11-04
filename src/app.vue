<template>
  <div id="app">
      <my-header></my-header>
      <my-content></my-content>
      <my-footer></my-footer>
  </div>
</template>
<script  type="es6">



  import header from './components/header/header.vue'
  import content from './components/content/content.vue'
  import footer from './components/footer/footer.vue'
export default {
    components:{
      'my-header':header,
      'my-content':content,
      'my-footer':footer
    }
}
</script>

<style>

</style>
