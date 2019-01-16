<template>
  <div class="p_home">
    <h3 class="hello_notice">{{hello}}</h3>
    <h3>是否登录: {{isLogin}}</h3>
    <button @click="removeUserInfo">删除用户</button>
    <img v-lazy="`https://user-gold-cdn.xitu.io/2018/1/4/160bfdcf2a31ce4a?imageslim`" alt="">
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
    mounted() {
      const toast = this.$createToast({
        time: 6000,
        text: 'Toast time 1s'
      });
      toast.show();
      setTimeout(() => {
        toast.hide();
      }, 5000);
      // Toast.loading({
      //   duration: 0,       // 持续展示 toast
      //   forbidClick: true, // 禁用背景点击
      //   loadingType: 'spinner',
      //   message: '倒计时 10 秒'
      // });
      // setTimeout(() => {
      //   console.log('clear toast');
      //   Toast.clear();
      // }, 2000);
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
