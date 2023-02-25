<template>
  <tbody>
    <tr class="border border-black">
      <td class="text-center border border-gray-400">{{ index + 1 }}</td>
      <td class="text-center border border-gray-400">{{ product.namaBarang }}</td>
      <td class="text-center border border-gray-400">{{ product.stok }}</td>
      <td class="text-center border border-gray-400">
        {{
          product.harga.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })
        }}
      </td>
      <td class="text-center border border-gray-400">{{ product.supplier.namaSupplier }}</td>
      <td class="text-center border border-gray-400">{{ product.supplier.alamat }}</td>
      <td class="text-center border border-gray-400">{{ product.supplier.noTelp }}</td>
      <td class="text-center border border-gray-400 space-x-2">
        <button class="btn btn-error">Hapus</button>
        <button class="btn btn-warning">Update</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "TableVue",
  props: ["product", "index"],
};
</script>

<style></style>
