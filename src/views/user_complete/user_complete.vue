<template>
  <div class="p_user_complete">
    <h3>设置用户: {name: '张山', avatar: '//xxx.com/xxx.png'}</h3>
    <h4 v-show="isLogin">添加成功，3s后返回上一页</h4>
    <button @click="setUserInfo">添加用户</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    /** `用户信息`完善页面 */
    name: 'user_complete',
    data() {
      return {}
    },
    computed: {
      ...mapState({
        isLogin: state => state.user.isLogin
      })
    },
    methods: {
      setUserInfo() {
        const mockData = {name: '张山', avatar: '//xxx.com/xxx.png'};
        // 派发消息
        // @see 'src/store/modules/user.js'
        this.$store.dispatch('setUserInfo', mockData);
        this.returnPrevPage();
      },
      /**
       * 返回上一个页面
       */
      returnPrevPage() {
        setTimeout(() => {
          const prevPage = this.$route.query.redirect;
          console.log(`返回 ${prevPage}`);
          this.$router.push({
            path: prevPage
          });
        }, 3000);
      }
    }
  }
</script>
