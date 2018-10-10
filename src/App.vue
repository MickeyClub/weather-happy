<template>
  <div id="app">
    <!-- <img src="./assets/img/girl.jpg" alt=""> -->
    <HelloWorld ></HelloWorld>
    <happy :xxx='imgList'></happy>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import happy from "./components/happy.vue";

export default {
  name: "app",
  data(){
    return{
        imgList: [
          "./assets/img/happy/01.jpg",
          "./assets/img/happy/02.jpg",
          "./assets/img/happy/03.jpg",
          "./assets/img/happy/04.jpg",
          "./assets/img/happy/05.jpg",
          "./assets/img/happy/06.jpg",
          "./assets/img/happy/07.jpg",
          "./assets/img/happy/08.jpg",
          ]
    }
  },


  components: {

    HelloWorld,
    happy
  }
};
</script>

<style>
/* body {
  background-color: red;
} */
</style>

