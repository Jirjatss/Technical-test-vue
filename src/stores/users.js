import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useUserstore = defineStore("user", {
  state: () => {
    return {
      token: "",
      user: "",
      password: "",
      profileName: "",
      username: "",
      token: "",
      namaSupplier: "",
      noTelp: "",
      alamat: "",
      listProduct: {
        id: "",
        namaBarang: "",
        harga: "",
        stok: "",
        // supplier: {
        //   id: "",
        //   namaSupplier: "",
        //   noTelp: "",
        //   alamat: "",
        // },
      },
    };
  },

  actions: {
    getUser() {
      this.user = localStorage.profileName;
      if (this.user === undefined) {
        router.push("/login");
      } else {
        router.push("/");
      }
    },

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
          this.token = data.data.token;
          console.log(this.token);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("profileName", data.data.profileName);
          console.log(localStorage.token);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getBarang() {
      axios
        .get("http://159.223.57.121:8090/barang/find-all?limit=20&offset=1", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then(({ data }) => {
          this.listProduct = data.data;
          this.profileName = localStorage.profileName;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSupplier() {
      axios
        .get("http://159.223.57.121:8090/supplier/find-all?limit=20&offset=1", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then(({ data }) => {
          this.listProduct = data.data.supplier;
          this.profileName = localStorage.profileName;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addSupplier() {
      axios({
        method: "post",
        url: "/http://159.223.57.121:8090/supplier/create",
        data: {
          namaSupplier: this.namaSupplier,
          noTelp: this.noTelp,
          alamat: this.alamat,
        },
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
