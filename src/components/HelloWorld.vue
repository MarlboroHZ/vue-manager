<template>
  <div class="hello">
    <el-button>按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
    <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
