<template>
  <HelloWorld/>
  <div class="box" @click="BoxClick">
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    console.log('con:', this.$store.state.con);
    this.$store.commit('letConZero');
    console.log('con2:', this.$store.state.con);
    this.$store.commit('pushNewDay', {date:'20221130'});
    console.log('dayDlist:',this.$store.state.dayList);
  },
  methods:{
    BoxClick(){
      console.log('hello')
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      console.log('hello2')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
  background-color: aqua;
  width: 200px;
  height: 200px;
}
</style>
