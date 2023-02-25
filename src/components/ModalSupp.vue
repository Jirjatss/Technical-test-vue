<template>
  <div :v-if="product">
    <input type="checkbox" :id="product?.supplier?.id" class="modal-toggle" />
    <div class="modal">
      <div class="bg-white rounded-xl w-1/2">
        <h1 class="text-xl font-bold text-blue-500 md:text-2xl text-start py-5 px-3 rounded-t-xl bg-blue-300">Tambah Supplier</h1>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-3" @submit.prevent="">
            <div class="flex justify-between">
              <label for="name" class="block mb-2 text-sm text-black my-auto">Nama Supplier</label>
              <input v-model="namasupplier" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-3/4 p-2.5 text-black" :placeholder="product?.supplier?.namaSupplier" />
            </div>
            <div class="flex justify-between">
              <label for="name" class="block mb-2 text-sm text-black my-auto">No Telp Supplier</label>
              <input v-model="stokbarang" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-3/4 p-2.5 text-black" :placeholder="product?.supplier?.noTelp" />
            </div>
            <div class="flex justify-between">
              <label for="name" class="block mb-2 text-sm text-black my-auto">Alamat Supplier</label>
              <input v-model="hargabarang" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-3/4 p-2.5 text-black" :placeholder="product?.supplier?.alamat" />
            </div>

            <hr />
            <div class="flex justify-between">
              <label :for="product?.supplier?.id" class="px-3 py-3 block my-auto text-white bg-gray-500 rounded-lg cursor-pointer">Kembali</label>
              <button type="submit" class="px-3 py-3 block my-auto text-white bg-blue-500 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div :v-else-if="product === undefined">
    <input type="checkbox" id="modalsupplier" class="modal-toggle" />
    <div class="modal">
      <div class="bg-white rounded-xl w-1/2">
        <h1 class="text-xl font-bold text-blue-500 md:text-2xl text-start py-5 px-3 rounded-t-xl bg-blue-300">Tambah Supplier</h1>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-3" @submit.prevent="">
            <div class="flex justify-between">
              <label for="name" class="block mb-2 text-sm text-black my-auto">Nama Supplier</label>
              <input v-model="namasupplier" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-3/4 p-2.5 text-black" placeholder="Masukkan Nama Supplier" />
            </div>
            <div class="flex justify-between">
              <label for="name" class="block mb-2 text-sm text-black my-auto">No Telp Supplier</label>
              <input v-model="stokbarang" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-3/4 p-2.5 text-black" placeholder="Masukkan No Telp Supplier" />
            </div>
            <div class="flex justify-between">
              <label for="name" class="block mb-2 text-sm text-black my-auto">Alamat Supplier</label>
              <input v-model="hargabarang" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-3/4 p-2.5 text-black" placeholder="Masukkan Alamat Supplier" />
            </div>

            <hr />
            <div class="flex justify-between">
              <label for="modalsupplier" class="px-3 py-3 block my-auto text-white bg-gray-500 rounded-lg cursor-pointer">Kembali</label>
              <button type="submit" class="px-3 py-3 block my-auto text-white bg-blue-500 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSupp",
  props: ["product", "index"],
};
</script>

<style></style>
