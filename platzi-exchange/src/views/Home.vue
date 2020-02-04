<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#3498db'" :size="200" />
    <PxAssetsTable v-if="!isLoading" :assets="assets"> </PxAssetsTable>
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: []
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then(assets => (this.assets = assets)) // uso  finally  para  que  dispare  una  funcion al momento de terminar  el proceso,  con error  o no
      .finally(() => (this.isLoading = false)); // funcion anomina  arrow function para  modificar  el parametro  isLoading
  }
};
</script>
