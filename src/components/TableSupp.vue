<template>
  <tbody>
    <tr class="border border-black">
      <td class="text-center border border-gray-400">{{ index + 1 }}</td>
      <td class="text-center border border-gray-400">{{ product.supplier?.namaSupplier }}</td>
      <td class="text-center border border-gray-400">{{ product.supplier?.noTelp }}</td>
      <td class="text-center border border-gray-400">{{ product.supplier?.alamat }}</td>
      <td class="text-center border border-gray-400 py-1">
        <button class="py-2 px-2 rounded-l-lg bg-red-500 hover:bg-red-700 text-black hover:text-white">Hapus</button>
        <label :for="product?.supplier?.id" class="py-2 px-2 rounded-r-lg bg-yellow-400 text-black hover:bg-yellow-600 hover:text-white cursor-pointer">Update</label>
        <Modalsupp />
      </td>
    </tr>
  </tbody>
</template>

<script>
import ModalSupp from "./ModalSupp.vue";
export default {
  name: "TableVue",
  components: {
    ModalSupp,
  },
  props: ["product", "index"],
};
</script>

<style></style>
