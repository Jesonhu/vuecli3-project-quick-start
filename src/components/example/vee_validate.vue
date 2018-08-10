<template>
  <div class="c-example-vee-validate">
    <form @submit.prevent="onSubmit"></form>
    <div>
      <input v-validate="'required|email'" name="email" type="text" class="has-border"
       v-model="formData.email"><br>
      <p class="error_nocite">{{ errors.first('email') }}</p>
    </div>
    <div>
      <input v-validate="'required|phoneNumber'" name="phoneNumber" type="number" class="has-border"
       v-model="formData.phoneNumber"><br>
      <p class="error_nocite">{{ errors.first('phoneNumber') }}</p>
    </div>
    <button @click="onSubmit">提交</button>
  </div>
</template>

<script>
export default {
  name: "c-vee-valiate-example",
  data() {
    return {
      formData: {
        email: "",
        phoneNumber: 1
      }
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        // 通过验证
        if (result) {
          this.showToastTime();
          console.log("验证通过", this.formData);
          return;
        }
        console.log("没通过验证");
      });
    },
    showToastTime() {
      const toast = this.$createToast({
        time: 1000,
        txt: "验证通过"
      });
      toast.show();
    }
  }
};
</script>

<style lang="scss">
// @import url('../../assets/scss/index.scss');
@function pxTorem($px){
  @return $px / 75px * 1rem;
}

.error_nocite {
  // height: 30px;
  height: pxTorem(30px);
  width: 100%;
  padding: 0;
  margin: 0;
}
.has-border {
  width:200px;
  height: 30px;
  border:1px solid #333;
}
</style>

