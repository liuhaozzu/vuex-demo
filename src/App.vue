<template>
  <div id="app">
    <h3>welcome vuex demo</h3>
    <button value="增加" @click="increment">增加</button>
    <button value="增加" @click="decrement">减少</button>
    <button value="增加" @click="clickOdd">偶数才能点击</button>
    <button value="增加" @click="clickAsync">异步操作</button>
    <div>
      now number is : {{count}}，是个{{getOdd}}
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default{
      methods:mapActions([
          'increment',
          'decrement',
          'clickOdd',
          'clickAsync'
      ]),
      computed:mapGetters([
          'count',
          'getOdd'
      ])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
