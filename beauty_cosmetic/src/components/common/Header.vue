<template>
  <div class="container">
    <nav class="row navbar navbar-expand-sm navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li class="col-4" v-for="(item, index) in nav" v-bind:key="index">
          <router-link
            data-aos="slide-left"
            data-aos-delay="200"
            v-bind:class="activeClass(item.to)"
            v-bind:to="item.to"
            >{{ item.content }}</router-link
          >
        </li>
      </ul>
      <a class="navbar-brand col-8" href="#" v-on:click="chooseMenu($event, 0)"
        ><router-link to="/"
          ><img
            class="logo"
            src="http://www.innisfree.com/vn/vi/resources/images/renewal/header_logo.svg"
            alt="Logo"/></router-link
      ></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      localtion: "/",
      navActive: 0,
      nav: [
        { to: "/", content: "Home" },
        { to: "/about", content: "About" },
        { to: "/contact", content: "Contact" }
      ]
    };
  },
  methods: {
    activeClass(string) {
      return {
        active: string == this.$route.path,
        nonactive: string != this.$route.path
      };
    },
    chooseMenu(event, index) {
      console.log(this.$route.path);
    }
  }
};
</script>

<style>
/* .container {
  margin: 0;
  padding: 0;
} */
nav {
  height: 100px;
  background-color: white;
  border-bottom: 1px solid #ccc;
}
.nonactive {
  color: rgb(25%, 26%, 26.5%);
  font-size: 18px;
  font-weight: 500;
}
.active {
  color: black;
  font-size: 20px;
  font-weight: 700;
}
.logo {
  width: 250px;
}
</style>
