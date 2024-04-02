<template>
  <div>
    이름 : <input v-model="data.name">
    가격 : <input v-money v-model="data.money">
    <button @click="test">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data : {
        money : "",
        name : "",
      }
    }
  },
  methods: {
    test(){
      this.$apiCall.get('https://jsonplaceholder.typicode.com/todos/1', this.data, this.success, this.error );
    },
    success(data) {
      console.log('success : ', data);
    }, 
    error(data) {
      console.log('error : ', data);
    }
  }
}
</script>
