<template>
  <div
    class="image"
    data-aos="slide-up"
    data-aos-delay="200"
    v-on:mouseenter="mouseover"
  >
    <div class="row">
      <div class="">
        <div class="background-logo center">
          <div class="center" v-html="iconLogo.image"></div>
        </div>
        <span class="text">{{ iconLogo.title }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientLogo",
  props: {
    iconLogo: Object
  },
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    mouseover() {
      this.isHover = true;
    },
    mouseout() {
      this.isHover = false;
    },
    classHover() {
      return { "background-hover": this.isHover };
    }
  },
  computed: {
    classIcon() {
      return {};
    }
  }
};
</script>

<style>
.background-logo {
  background-color: white;
  height: 140px;
  width: 140px;
  border-radius: 50%;
}
.background-logo:hover,
.background-logo:active {
  background-color: #183f36;
  height: 140px;
  width: 140px;
  border-radius: 50%;
}
.center {
  display: flex;
  align-content: center;
  justify-content: center;
}
.size-icon {
  font-size: 40px;
  color: #e7e5e5;
}
.text {
  margin: 10px 0;
  text-align: center;
  display: inline;
  display: block;
}
</style>
