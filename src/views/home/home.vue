<template>
  <div class="p_home">
    <h3 class="hello_notice">{{hello}}</h3>
    <h3>是否登录: {{isLogin}}</h3>
    <button @click="removeUserInfo">删除用户</button>
  </div>
</template>

<script>
  // @see [mapstate-辅助函数](https://vuex.vuejs.org/zh/guide/state.html#mapstate-辅助函数)
  // @see [对象展开运算符](https://vuex.vuejs.org/zh/guide/state.html#对象展开运算符)
  import { mapState } from 'vuex';

  // @see `ES6 module`
  export default {
    name: 'home',
    data() {
      return {
        hello: 'Hello Vue and Vue-cli'
      }
    },
    computed: {
      // @see [mapstate-辅助函数](https://vuex.vuejs.org/zh/guide/state.html#mapstate-辅助函数)
      // @see [对象展开运算符](https://vuex.vuejs.org/zh/guide/state.html#对象展开运算符)
      ...mapState({
        isLogin: state => {
          return state.user.isLogin ? true : false;
        }
      })
    },
    methods: {
      setUserInfo() {
        const mockData = {name: '张山', avatar: '//xxx.com/xxx.png'};
        // 派发消息
        // @see 'src/store/modules/user.js'
        this.$store.dispatch('setUserInfo', mockData);
      },
      removeUserInfo() {
        // 派发消息
        // @see 'src/store/modules/user.js'
        this.$store.dispatch('removeUserInfo');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .p_home {
    .hello_notice {
      color: #e45656;
    }
  }
</style>
