<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th>logo</th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in assets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            class="h-8 w-8"
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
          <b>#{{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover: underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            {{ a.name }}
          </router-link>
          <small class="ml-1 text-gray-500"> {{ a.symbol }} </small>
        </td>
        <td>{{ a.symbol }}</td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td
          :class="a.changePercent24Hr > 0 ? 'text-green-600' : 'text-pink-600'"
        >
          {{ a.changePercent24Hr | porcentaje }}
        </td>
        <td class="hidden sm:block">
          <PxButton @custom-click="goToCoin(a.id)">
            <span> Detalles </span>
          </PxButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton";
export default {
  name: "PxAssetsTable",

  components: { PxButton },
  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id: id } }); // accede  a la insancia  del  router  para navegar
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
