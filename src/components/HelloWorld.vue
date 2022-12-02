<template>
  <div class="hello" @click="product">hello
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  methods:{
    product(){
      this.$store.commit('product')
      console.log('乘2之后的积：'+this.$store.state.con);
      console.log('push之后的lists：'+this.$store.getters.showList)
      this.$store.getters.lengthCount
      console.log(this.$store.state.lists)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:300px;
  height:300px;
  background-color: blueviolet;
}
</style>
