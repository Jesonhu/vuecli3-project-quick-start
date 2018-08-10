<template>
  <div class="p-test">
    <v-validate></v-validate>
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
    }
  }
</script>
