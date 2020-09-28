<template>
  <div id="brand-story">
    <div class="brand-story" data-aos="slide-up" data-aos-delay="100">
      <div>
        <div>
          <h2>Khái niệm thương hiệu</h2>
        </div>
        <div>
          <p>
            Giới thiệu về innisfree, hòn đảo mang đến vẻ đẹp tự nhiên
          </p>
        </div>
      </div>
    </div>
    <Rectangle></Rectangle>
    <div>
      <div>
        <h4>innisfree’s Brand Identity</h4>
      </div>
      <div class="container">
        <div class="row" data-aos="slide-up" data-aos-delay="100">
          <div
            class="col-4"
            v-for="(item, index) in listLogo"
            v-bind:key="index"
          >
            <img v-bind:src="item" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rectangle from "./Rectangle";
export default {
  name: "BrandStory",
  data() {
    return {
      image:
        "http://www.innisfree.com/vn/vi/resources/images/about/brand_concept_section1.jpg",
      listLogo: [
        "http://www.innisfree.com/vn/vi/resources/images/about/brand_concept_section3_logo1.gif",
        "http://www.innisfree.com/vn/vi/resources/images/about/brand_concept_section3_logo2.gif",
        "http://www.innisfree.com/vn/vi/resources/images/about/brand_concept_section3_logo3.gif"
      ]
    };
  },
  components: {
    Rectangle
  }
};
</script>

<style>
.brand-story {
  background-image: url("http://www.innisfree.com/vn/vi/resources/images/about/brand_concept_section1.jpg");
  /* background-color: aqua; */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}
.brand-story h2 {
  color: black;
  font-size: 35px;
  font-weight: 450;
  margin: 15px 0px;
}
.brand-story p {
  color: black;
  font-size: 25px;
  font-weight: 300;
  margin: 15px 0px;
}
#brand-story .row {
  margin: 30px auto;
}
</style>
