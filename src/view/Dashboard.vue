<template>
  <Navbar />
  <div class="m-auto w-full md:mx-2 py-10">
    <section>
      <div class="flex bg-white px-5">
        <div class="profile">
          <div class="grid grid-rows-3 space-y-2 px-2">
            <div class="shadow-2xl mt-3 rounded-lg mb-3">
              <img class="w-48" src="../assets/pp.png" alt="" />
              <h1 class="bg-[#00a8e7] py-2 text-center text-black rounded-b-lg">{{ profileName }}</h1>
            </div>
            <div class="shadow-2xl rounded-lg h-32">
              <h1 class="bg-[#00a8e7] py-1 text-center text-black rounded-t-lg">Menu</h1>
              <div class="mb-3 px-3 hover:bg-blue-300 mt-3 text-black"><h1 class="cursor-pointer" @click="barang = 'supplier'">Barang</h1></div>
              <div class="px-3 hover:bg-blue-300 text-black"><h1 class="cursor-pointer" @click="barang = 'barang'">Supplier</h1></div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full mx-4 shadow">
          <div class="bg-[#00a8e7] py-3 px-5 rounded-t-lg text-black font-medium text-xl">Dashboard</div>
          <div v-if="barang === 'supplier'">
            <h1 class="my-5 mx-5 font-medium text-black text-lg">Barang</h1>
            <table class="table-auto w-full border border-black">
              <thead>
                <tr class="border border-gray-400">
                  <th class="border border-gray-400">No</th>
                  <th class="border border-gray-400">Nama Barang</th>
                  <th class="border border-gray-400">Stok</th>
                  <th class="border border-gray-400">Harga</th>
                  <th class="border border-gray-400">Nama Supplier</th>
                  <th class="border border-gray-400">Alamat Supplier</th>
                  <th class="border border-gray-400">No Telp Supplier</th>
                  <th class="border border-gray-400">Aksi</th>
                </tr>
              </thead>
              <TableVue v-for="(product, i) in listProduct" :key="product.id" :product="product" :index="i" />
            </table>
          </div>
          <div v-else-if="barang === 'barang'">
            <h1 class="my-5 mx-5 font-medium text-black text-lg">Supplier</h1>
            <table class="table-auto w-full border border-black mx-3">
              <thead>
                <tr class="border border-gray-400">
                  <th class="border border-gray-400">No</th>
                  <th class="border border-gray-400">Nama Supplier</th>
                  <th class="border border-gray-400">Alamat</th>
                  <th class="border border-gray-400">No Telp</th>
                  <th class="border border-gray-400">Aksi</th>
                </tr>
              </thead>
              <TableSuppVue v-for="(product, i) in listProduct" :key="product.id" :product="product" :index="i" />
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserstore } from "../stores/users";
import Navbar from "../components/Navbar.vue";
import TableVue from "../components/Table.vue";
import TableSuppVue from "../components/TableSupp.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    TableVue,
    TableSuppVue,
  },
  computed: {
    ...mapState(useUserstore, ["listProduct", "profileName"]),
  },
  methods: {
    ...mapActions(useUserstore, ["getBarang", "getSupplier"]),
  },
  created() {
    this.getBarang();
    this.getSupplier();
  },
  data() {
    return {
      barang: "barang",
    };
  },
};
</script>

<style></style>
