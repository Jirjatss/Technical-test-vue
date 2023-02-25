import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useUserstore = defineStore("user", {
  state: () => {
    return {
      user: "",
      password: "",
      profileName: "",
      username: "",
      token: "",
      listProduct: {
        id: "",
        namaBarang: "",
        harga: "",
        stok: "",
        supplier: {
          id: "",
          namaSupplier: "",
          noTelp: "",
          alamat: "",
        },
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
          //   this.token = data.data.token;
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
            Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWxhIiwiZXhwIjoxNjc3MzQyMjg1LCJpYXQiOjE2NzczMjQyODV9.g2mcoMuu0V4XeHHeSvP4yl_tTkEowb8KJjur5VXdj46zC1XpQULjsDMLjFV5pvtmDlHa9vYYI5zn4CKjfp2Qow",
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
            Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWxhIiwiZXhwIjoxNjc3MzA0NDQ1LCJpYXQiOjE2NzcyODY0NDV9.YUogbZFlXg1BunrgFB5wlOh-H09l0iC11nrov1TWeTgFJxh5L5Ck4N_0Cc--n-TbRX9UNatTmJ-wKFL_HAfgRQ",
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
  },
});

// handleDeleteFavorite(id) {
//   Axios({
//     method: "delete",
//     url: `/accomodation/favorites/${id}`,
//     headers: {
//       access_token: localStorage.getItem("access_token"),
//     },
//   })
//     .then(({ data }) => {
//       console.log(data);
//       this.handleGetFavorites();
//       toaster.info(`success delete favorite`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// },
