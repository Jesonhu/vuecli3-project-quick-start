<template>
  <div class="p-test">
    <v-validate @validateStatus="onValidateStatus"></v-validate>
  </div>
</template>

<script>
  import validate from '@/components/example/vee_validate';

  export default {
    name: 'p-test',
    data() {
      return {}
    },
    components: {
      vValidate: validate
    },
    methods: {
      onValidateStatus(status) {
        console.log('验证结果');
      }
    }
  }
</script>
