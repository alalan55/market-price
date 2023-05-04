<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import Cart from "../atoms/mpCart.vue";

const router = useRouter();
const store = useUserStore();
const goRoute = (path) => router.push({ name: path });

const links = [
  {
    path: "/",
    name: "Home",
    pathName: "home",
  },
  {
    path: "/resume",
    name: "Resumo",
    pathName: "resume",
  },
  {
    path: "/profile",
    name: "Perfil",
    pathName: "profile",
  },
];
</script>

<template>
  <nav class="navBar">
    <div class="navBar__profile">
      <router-link to="/profile">
        <figure>
          <img src="/imgs/static/user.png" />
          <!-- <img src="/imgs/user-icon.svg" /> -->
        </figure>
      </router-link>
      <span
        >Olá <strong>{{ store.$user.name }}</strong
        >!</span
      >
    </div>

    <div class="navBar__links">
      <ul>
        <li v-for="item of links" :key="item.path">
          <router-link :to="item.path">
            <span>{{ item.name }}</span></router-link
          >
        </li>
      </ul>
    </div>

    <div class="navBar__cart">
      <Cart @click="goRoute(`resume`)" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.navBar {
  height: $navbarHeight;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $space-1-5;
  text-decoration: none;
  color: $pink-4;

  // &__logo {
  //   cursor: pointer;
  //   span {
  //     font-weight: 800;
  //     font-size: 1.2em;
  //     color: $pink-1;
  //     text-transform: uppercase;
  //   }

  //   figure {
  //     border: 1px solid;
  //   }
  // }

  &__profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    figure {
      padding: 0 !important;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    span {
      font-weight: 500;
    }
  }
  &__links {
    ul {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: $space-1;
      li {
        list-style: none;

        a {
          text-decoration: none;
          color: $pink-4;
          font-weight: 700;
        }
        .router-link-exact-active {
          border-bottom: 3px solid;
        }
      }
    }
  }
  &__cart {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  & > div {
    flex: 1 1 500px;
  }
}
</style>
