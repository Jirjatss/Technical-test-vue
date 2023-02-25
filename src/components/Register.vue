<template>
  <div class="flex h-screen bg-white">
    <div class="m-auto w-full md:mx-2">
      <section>
        <div class="md:flex flex-cols-2 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 md:space-x-24">
          <div class="md:flex hidden w-96"><img src="../assets/logo.png" /></div>
          <div class="md:w-1/2 w-full bg-white shadow-2xl md:mt-0 rounded-xl">
            <h1 class="text-xl font-bold text-blue-500 md:text-2xl text-center py-5 px-3 rounded-t-xl bg-blue-300">Register</h1>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-3" @submit.prevent="handleRegister">
                <div>
                  <label for="name" class="block mb-2 text-sm text-black">Username</label>
                  <input v-model="username" type="text" name="name" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black" placeholder="Enter Username" />
                </div>
                <div>
                  <label for="profilname" class="block mb-2 text-sm text-black">Profil Name</label>
                  <input v-model="profileName" type="text" name="profilename" id="profilname" placeholder="Enter Profil Name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm text-black">Password</label>
                  <input v-model="password" type="password" name="password" id="password" placeholder="Enter Password" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black mb-5" />
                </div>

                <button type="submit" class="px-3 py-3 block mx-auto text-white bg-blue-500 rounded-lg">Daftar</button>
                <p class="text-sm text-blue-500 font-medium underline text-center"><router-link class="nav-link" to="/login">Sudah punya akun</router-link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useUserstore } from "../stores/users";
export default {
  name: "Registerpage",
  computed: {
    ...mapWritableState(useUserstore, ["password", "profileName", "username"]),
  },
  methods: {
    ...mapActions(useUserstore, ["handleRegister"]),
  },
};
</script>

<style></style>
