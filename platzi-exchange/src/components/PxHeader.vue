<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <px-icon class="mr-4" />

        <router-link
          class="font-semibold text-xl tracking-tight"
          :to="{ name: 'home' }"
        >
          Marce-Exchange
        </router-link>

        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">


            <router-link
              class="mt-5 m-3 text-xl text-gray-600 hover:underline"
              to="/about"
            >
              about
            </router-link>

            <router-link v-for="l in links" :key=l.title
              class="mt-5 m-3 text-xl text-gray-600 hover:underline"
              :to="l.to"
            >
            {{l.title}}
            </router-link>


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

  components: { PxIcon },

  props:{

    links:{

      type:Array,
      default: ()=>[]
    }


  }
};
</script>
