import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useUserstore = defineStore("user", {
  state: () => {
    return {
      user: {},
      password: "",
      profileName: "",
      username: "",
      token: "",
      listProduct: {
        id: "",
        namaBarang: "",
        harga: "",
        stok: "",
        supplier: {},
      },
    };
  },

  actions: {
    handleRegister() {
      axios
        .post("http://159.223.57.121:8090/auth/register", {
          password: this.password,
          profileName: this.profileName,
          username: this.username,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleLogin() {
      axios
        .post("http://159.223.57.121:8090/auth/login", {
          password: this.password,
          username: this.username,
        })
        .then(({ data }) => {
          //   console.log(data.data.token);
          //   this.token = data.data.token;
          localStorage.setItem("token", data.data.token);
          console.log(localStorage.token);
          //   router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getBarang() {
      axios
        .get("http://159.223.57.121:8090/barang/find-all?limit=10&offset=1", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWxhIiwiZXhwIjoxNjc3MzA0NDQ1LCJpYXQiOjE2NzcyODY0NDV9.YUogbZFlXg1BunrgFB5wlOh-H09l0iC11nrov1TWeTgFJxh5L5Ck4N_0Cc--n-TbRX9UNatTmJ-wKFL_HAfgRQ",
          },
        })
        .then(({ data }) => {
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
