<template>
    <div class="container" >
        <br>
        <br>
        <br>
        <h2>请选择您今天的快乐套餐</h2>
        <input @click="prev" type="button" name="" id="" value="←">
        <img class="pic" :src="imgList[index]" alt="">
        <input @click="next" type="button" name="" id="" value="→">
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import img1 from '../assets/img/happy/01.jpg';
import img2 from '../assets/img/happy/02.jpg';
import img3 from '../assets/img/happy/03.jpg';
import img4 from '../assets/img/happy/04.jpg';
import img5 from '../assets/img/happy/05.jpg';
import img6 from '../assets/img/happy/06.jpg';
import img7 from '../assets/img/happy/07.jpg';
import img8 from '../assets/img/happy/08.jpg';
import img9 from '../assets/img/happy/09.jpg';

export default {
  props: ["xxx"],
  data: function() {
    return {
      index: 0,
      xxx1: this.xxx,

      imgList: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
      ]
    };
  },
  methods: {
    prev() {
      this.index--;
      if (this.index <= 0) {
        this.index = this.imgList.length - 1;
      }
    },
    next() {
      this.index++;
      if (this.index > this.imgList.length - 1) {
        this.index = 0;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: skyblue;
}
.pic {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}
#app {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
