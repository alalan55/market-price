<script setup>
import { useRouter } from "vue-router";
import Logo from "../atoms/logo.vue";
import Cart from "../atoms/mpCart.vue";

const router = useRouter();
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
    <div class="navBar__logo">
      <span @click="goRoute(`home`)">Market Price V2.</span>
      <!-- <Logo @click="goRoute(`home`)" /> -->
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

    <div class="navBar__cart" @click="goRoute(`resume`)">
      <Cart/>
      <!-- <figure>
        <img src="/imgs/cart.svg" alt="Carrinho de compras" />
      </figure> -->
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

  &__logo {
    cursor: pointer;
    span {
      font-weight: 800;
      font-size: 1.2em;
      color: $pink-1;
      text-transform: uppercase;
    }

    figure {
      border: 1px solid;
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
    // border: 1px solid;
  }
}
</style>
