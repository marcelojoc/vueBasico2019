<template>
  <button
    @click="buttonClick"
    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  props:{
    isLoading:{
        type:Boolean,
        default: false
    }

  },
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    }
  }
};
</script>
