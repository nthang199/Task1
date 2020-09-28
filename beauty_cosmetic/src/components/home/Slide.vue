<template>
  <div class="slides">
    <div
      v-bind:id="listdata.title"
      class="carousel slide "
      data-ride="carousel"
      data-aos="slide-up"
      data-aos-delay="200"
    >
      <ol class="carousel-indicators">
        <li
          v-bind:data-target="'#' + listdata.title"
          v-for="(item, index) in listdata.listData"
          v-bind:key="index"
          v-bind:data-slide-to="index"
          v-bind:class="activeClass(index)"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-bind:class="activeClass(index)"
          v-for="(item, index) in listdata.listData"
          v-bind:key="index"
        >
          <img
            class="d-block w-100"
            v-bind:src="item.image"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ item.headertext }}</h3>
            <p>{{ item.subheadertext }}</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        v-bind:href="'#' + listdata.title"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        v-bind:href="'#' + listdata.title"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    listdata: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      activeSlide: 0
      // slides: [
      //   {
      //     id: 0,
      //     image:
      //       "http://www.innisfree.com/vn/vi/upload/banner/VN_R_75_L012.jpg",
      //     headertext: "Đánh thức làn da mỗi sớm mai. Gìn giữ thanh xuân.",
      //     subheadertext: "Jeju orchid day & night routine",
      //   },
      //   {
      //     id: 1,
      //     image:
      //       "http://www.innisfree.com/vn/vi/upload/banner/VN_R_76_L012.jpg",
      //     headertext: "Tông đất thời thượng - Mịn lì chất son.",
      //     subheadertext: "vidit cotton stick",
      //   },
      // ],
    };
  },
  methods: {
    activeClass(index) {
      return { active: this.activeSlide == index };
    }
  }
};
</script>

<style>
.carousel-inner img {
  width: 100%;
  height: 100%;
}
h3 {
  text-transform: uppercase;
  color: black;
}

p {
  color: black;
}
</style>
