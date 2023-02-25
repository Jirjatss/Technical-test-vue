<template>
  <Navbar />
  <div class="m-auto w-full md:mx-2">
    <section>
      <div class="flex bg-white px-5">
        <div class="profile">
          <div class="grid grid-rows-3 space-y-2 px-8">
            <div class="shadow-2xl mt-3 rounded-lg">
              <img class="w-48" src="../assets/pp.png" alt="" />
              <h1 class="bg-[#00a8e7] py-2 text-center text-black rounded-b-lg">Nama</h1>
            </div>
            <div class="shadow-2xl rounded-lg h-32">
              <h1 class="bg-[#00a8e7] py-2 text-center text-black rounded-t-lg">Nama</h1>
              <div class="mb-3 px-3 hover:bg-blue-300 mt-3 text-black"><a href="">Barang</a></div>
              <div class="px-3 hover:bg-blue-300 text-black"><a href="">Supplier</a></div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full mx-4">
          <div class="bg-[#00a8e7] py-3 px-5 rounded-t-lg text-black">Dashboard</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserstore } from "../stores/users";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useUserstore, ["listProduct"]),
  },
  methods: {
    ...mapActions(useUserstore, ["getBarang"]),
  },
  created() {
    this.getBarang();
  },
};
</script>

<style></style>
