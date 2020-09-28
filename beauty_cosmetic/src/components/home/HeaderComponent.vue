<template>
  <div class="container">
    <div class="header-component">
      <div class="content row" data-aos="slide-up" data-aos-delay="300">
        <p class="display-1 col-3">
          {{ intro.header }}
        </p>
        <div class="center col-4"><hr /></div>
      </div>
      <div class="row">
        <h3 class="col-3" data-aos="slide-up" data-aos-delay="300">
          {{ intro.subHeader }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComponent",
  props: {
    intro: { type: Object, default: {} }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
hr {
  height: 3px;
  width: 150px;
  background-color: rgb(33.8%, 34.9%, 35.5%);
}
</style>
