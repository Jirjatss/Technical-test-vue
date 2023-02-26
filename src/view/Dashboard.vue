<template>
  <Navbar />
  <div class="m-auto w-full md:mx-2 py-10">
    <section>
      <div class="flex bg-white px-5">
        <div class="profile">
          <div class="grid grid-rows-3 space-y-2 px-2">
            <div class="shadow-2xl mt-3 rounded-lg mb-3">
              <img class="w-48" src="../assets/pp.png" alt="" />
              <h1 class="bg-[#00a8e7] py-2 text-center text-black rounded-b-lg">
                {{ profileName }}
              </h1>
            </div>
            <div class="shadow-2xl rounded-lg h-32">
              <h1
                class="bg-[#00a8e7] py-2 text-center text-black rounded-t-lg h-12"
              >
                Menu
              </h1>
              <div class="px-3 hover:bg-blue-300 text-black h-10">
                <h1 class="cursor-pointer" @click="barang = 'supplier'">
                  Barang
                </h1>
              </div>
              <div class="px-3 hover:bg-blue-300 text-black h-10 rounded-b-lg">
                <h1 class="cursor-pointer" @click="barang = 'barang'">
                  Supplier
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full mx-4 shadow">
          <div
            class="bg-[#00a8e7] py-3 px-5 rounded-t-lg text-black font-medium text-xl"
          >
            Dashboard
          </div>
          <div v-if="barang === 'supplier'" class="px-4">
            <div class="flex justify-between">
              <h1 class="my-5 mx-3 font-medium text-black text-lg">Barang</h1>
              <div class="flex">
                <button
                  class="bg-blue-700 h-10 px-5 m-auto block rounded-md text-white"
                >
                  Tambah Barang
                </button>
              </div>
            </div>
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
              <TableVue
                v-for="(product, i) in listProduct"
                :key="product.id"
                :product="product"
                :index="i"
              />
            </table>
          </div>
          <div v-else-if="barang === 'barang'" class="px-4">
            <div class="flex justify-between">
              <h1 class="my-5 mx-3 font-medium text-black text-lg">Supplier</h1>
              <div class="flex">
                <!-- <p>{{ listProduct }}</p> -->
                <label
                  for="modalsupplier"
                  class="bg-blue-700 h-10 px-5 py-2 m-auto block rounded-md text-white cursor-pointer"
                  >Tambah Supplier</label
                >
                <ModalSuppVue
                  v-for="(product, i) in listProduct"
                  :key="product.id"
                  :product="product"
                  :index="i"
                />
              </div>
            </div>

            <table class="table-auto w-full border border-black">
              <thead>
                <tr class="border border-gray-400">
                  <th class="border border-gray-400">No</th>
                  <th class="border border-gray-400">Nama Supplier</th>
                  <th class="border border-gray-400">Alamat</th>
                  <th class="border border-gray-400">No Telp</th>
                  <th class="border border-gray-400">Aksi</th>
                </tr>
              </thead>
              <TableSuppVue
                v-for="(product, i) in listProduct"
                :key="product.id"
                :product="product"
                :index="i"
              />
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
import ModalSuppVue from "../components/ModalSupp.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    TableVue,
    TableSuppVue,
    ModalSuppVue,
  },
  data() {
    return {
      barang: "barang",
      user: "user",
    };
  },
  computed: {
    ...mapState(useUserstore, ["listProduct", "profileName", "user"]),
  },
  methods: {
    ...mapActions(useUserstore, ["getBarang", "getSupplier", "getUser"]),
  },
  created() {
    this.getBarang();
    this.getSupplier();
    this.getUser();
  },
};
</script>

<style></style>
