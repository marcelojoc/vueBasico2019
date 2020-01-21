<template>
    <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-4" />
          <span class="font-semibold text-xl tracking-tight">PlatziExchange</span>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">

    <router-link
      class="mt-5 text-xl text-green-600 hover:underline"
      to="/about"
    >about</router-link>
            
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",

  components: { PxIcon }
};
</script>