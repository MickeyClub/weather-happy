<template>
 <div class="weather">
        <h2>请输入城市查询天气预报</h2>
        <input placeholder="请输入要查询的城市,回车查询" type="text" v-model="city" @keyup.enter="search">
        <transition-group name="list" tag="ul">
            <li v-for="(item, index) in weatherList" :style="{transitionDelay:index*100+'ms'}" :key="item.date">
                {{item.date}}:{{item.high}}~{{item.low}}-{{item.fengxiang}}
            </li>
        </transition-group>
    </div>
</template>



<script>
  // 引入axios
import axios from 'axios';
export default {
  // 数据
  data: function() {
    return {
      // 城市
      city: "",
      // 天气信息
      weatherList: []
    };
  },
  methods: {
    search() {
      // 调用接口 获取数据 渲染页面
      // this.$http.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
      // .then(function(response){
      //     // console.log(response);
      //     console.log(this);
      //     // this.weatherList = response.body.data.forecast;
      // })
      // console.log(this);
      // 清空数据
      this.weatherList = [];
      // axios获取数据
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then(response => {
          // console.log(response);
          // console.log(this);
          this.weatherList = response.data.data.forecast;
        });
    }
  }
};
</script>




<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
            /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100px);
}

body {
  background-color: #81b4a1;
}
.weather input {
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  margin: 20px;
  padding-left: 10px;
  outline: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
}
li {
  border: 1px solid #000;
  padding: 10px;
  background-color: skyblue;
  color: white;
  font-weight: 700;
  font-size: 20px;
  width: 400px;
  border-radius: 10px;
  margin: 5px;
}
#app {
  width: 800px;
  margin: 200px auto;
  text-align: center;
}
</style>
