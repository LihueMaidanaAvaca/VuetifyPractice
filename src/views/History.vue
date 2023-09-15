<template>
  <user-banner-vue/>
  <div class="text-center my-4"> <!-- Agrega espacio vertical con my-4 -->
    <h2>Ultimos pagos registrados</h2>
  </div>
  <list-payment/>
</template>

<script>
import UserBannerVue from '@/components/AppBar.vue';
import ListPayment from '@/components/lists/ListPayment.vue';
export default {
  name: 'Payments', 
  components: {
      UserBannerVue,
      ListPayment      
  }
}
</script>

<style scoped>
  .text-center {
    text-align: center;
}
</style>
