<template>
  <div class="hello">
    <Slide v-bind:listdata="listSlideHeader"></Slide>
    <div class="mr-auto">
      <HeaderComponent v-bind:intro="introProduct"></HeaderComponent>
      <ProductOfTheMonth></ProductOfTheMonth>
    </div>
    <div class="container mr-auto">
      <HeaderComponent v-bind:intro="introProductNew"></HeaderComponent>
      <Slide v-bind:listdata="listSildeProductNew"></Slide>
      <HeaderComponent v-bind:intro="introReview"></HeaderComponent>
      <ReviewsOfCustomer></ReviewsOfCustomer>
    </div>

    <StoresBrand></StoresBrand>
  </div>
</template>

<script>
import Slide from "../components/home/Slide.vue";
import HeaderComponent from "../components/home/HeaderComponent.vue";
import ProductOfTheMonth from "../components/home/ProductOfTheMonth.vue";
import ReviewsOfCustomer from "../components/home/ReviewsOfCustomer.vue";
import Review from "../components/home/Review.vue";
import StoresBrand from "../components/home/Stores_Brand.vue";
export default {
  name: "Home",
  components: {
    Slide,
    HeaderComponent,
    ProductOfTheMonth,
    ReviewsOfCustomer,
    StoresBrand,
    Review
  },
  data() {
    return {
      introReview: {
        header: "Reviews",
        subHeader: "Of The Month"
      },
      introProduct: {
        header: "Product",
        subHeader: "Of The Month"
      },
      introProductNew: {
        header: "News",
        subHeader: "Of The Month"
      },
      listSlideHeader: {
        title: "slideHeader",
        listData: [
          {
            id: 0,
            image:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_R_75_L012.jpg",
            headertext: "Đánh thức làn da mỗi sớm mai. Gìn giữ thanh xuân.",
            subheadertext: "Jeju orchid day & night routine"
          },
          {
            id: 1,
            image:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_R_76_L012.jpg",
            headertext: "Tông đất thời thượng - Mịn lì chất son.",
            subheadertext: "vidit cotton stick"
          }
        ]
      },
      listSildeProductNew: {
        title: "slideProduct",
        listData: [
          {
            id: 0,
            image:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_M_187_L012.jpg",
            headertext: "Phép màu cho làn da căng mướt",
            subheadertext: "Eju Pomegranate Revitalizing Serum "
          },
          {
            id: 1,
            image:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_M_188_L012.jpg",
            headertext: "Store Event",
            subheadertext: "Ưu Đãi Tháng 10"
          },
          {
            id: 2,
            image:
              "http://www.innisfree.com/vn/vi/upload/banner/VN_M_189_L012.jpg",
            headertext: "Find your Perfect Match",
            subheadertext: "Double Cleancing"
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 100px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mr-auto {
  margin-top: 80px;
}
</style>
