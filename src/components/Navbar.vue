<template>
  <div class="bg-blue-300 py-3 px-8 flex justify-between">
    <div class="text-2xl text-blue-600 font-medium flex"><span>MARKETPLACE </span> <img src="../assets/logonavbar.png" class="w-24 h-8" alt="" /></div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost rounded-btn text-black">
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
      </label>
      <ul tabindex="0" class="menu dropdown-content p-2 shadow rounded-box w-24 mt-4 bg-blue-300">
        <li class="text-black"><button @click="Logout">Logout</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Navbar",
  methods: {
    Logout: function () {
      localStorage.clear();
      router.push("/login");
    },
  },
};
</script>

<style></style>
