<template>
  <div
    class="image"
    data-aos="slide-up"
    data-aos-delay="200"
    v-bind:style="{ backgroundImage: 'url(' + review.image + ')' }"
    v-on:mouseenter="mouseover"
  >
    <div v-on:mouseleave="mouseout" class="background-hover" v-if="isHover">
      <div>
        <div class="row container ">
          <div class="col-4">
            <div class="margin-auto ">
              <i class="fab fa-instagram size"></i>
            </div>
          </div>
          <div class="col-8">
            <p class="size-text">
              {{ review.user }}<br />{{ review.datetime }}
            </p>
          </div>
        </div>
        <div class="container ">
          <p class=" over ">
            {{ review.review }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "review",
  props: {
    review: Object
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
  }
};
</script>

<style>
.size-text {
  font-size: 15px;
  color: rgb(219, 226, 222);
  font-weight: 500;
  padding-top: 10px;
  width: 100%;
}
.over {
  height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 5px;
  font-size: 15px;
  color: rgb(219, 226, 222);
  font-weight: 500;
}
.image img {
  width: 210px;
  height: 210px;
  border-radius: 5px;
}
.image {
  width: 210px;
  height: 210px;
  border-radius: 5px;
  background-size: cover;
  border: 1px solid gray;
}
.background-hover {
  width: 210px;
  height: 210px;
  border-radius: 5px;
  background-image: linear-gradient(rgba(24, 92, 54, 0.85));
}
.size {
  color: rgb(219, 226, 222);
  font-size: 35px;
}
.margin-auto {
  padding: 15px 5px;
}
</style>
