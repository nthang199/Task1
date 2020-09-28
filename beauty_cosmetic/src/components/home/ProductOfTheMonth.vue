<template>
  <div class="container">
    <div class="row">
      <div
        v-bind:class="activeClassProductMain(item.image.imagesub)"
        v-for="(item, index) in products"
        v-bind:key="index"
        data-aos="slide-up"
        data-aos-delay="300"
      >
        <div class="center" v-if="item.image.imagesub != ''">
          <div class="main-image">
            <img v-bind:src="item.image.imagemain" alt="" />
          </div>
          <div class="sub-image">
            <img v-bind:src="item.image.imagesub" alt="" />
          </div>
          <div class="title-image">
            <p>{{ item.title }}</p>
          </div>
        </div>
        <!-- </div> -->

        <!-- <div class="col-6 "> -->
        <div v-if="item.image.imagesub == ''" class=" center">
          <div class="main-image-product center">
            <img v-bind:src="item.image.imagemain" alt="" />
          </div>
          <div class="title-image-product">
            <div class="center">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productOfTheMonth",
  data() {
    return {
      products: [
        {
          image: {
            imagemain:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_L_23_L012_2.png",
            imagesub:
              "http://www.innisfree.com/vn/vi/upload/product/34801_l.png"
          },
          title: "Vivid Cotton Stick"
        },
        {
          image: {
            imagemain:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_L_23_L012_3.png",
            imagesub:
              "http://www.innisfree.com/vn/vi/upload/product/28148_l.png"
          },
          title: "Jeju Pomegranate Revitalizing Serum"
        },
        {
          image: {
            imagemain:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_L_23_L012.jpg",
            imagesub: ""
          },
          title: "Jeju Orchid Enriched Cream"
        }
      ]
    };
  },
  methods: {
    activeClassProductMain(string) {
      return {
        "col-3 center": string != "",
        "col-6": string == ""
      };
    }
  }
};
</script>

<style scope>
.col-3 img {
  width: 85%;
  height: auto;
}
.col-6 .main-image-product img {
  width: 70%;
  height: auto;
  margin: auto;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-image {
  position: relative;
}
.main-image:hover {
  position: relative;
  transform: scale(1.05);
  transition: all 0.5s ease;
}
.sub-image {
  position: absolute;
  bottom: 15%;
  z-index: 1;
  /* transform: translate(0%, -65%); */
}
.title-image {
  position: absolute;
  text-align: center;
  font-size: 20px;
  /* left: 20%; */
  z-index: 2;
  top: 85%;
  text-transform: capitalize;
}
.main-image-product {
  position: relative;
  margin: auto;
}
.title-image-product {
  position: absolute;
  font-size: 20px;
  left: 30%;
  top: 100%;
  text-transform: capitalize;
}
</style>
