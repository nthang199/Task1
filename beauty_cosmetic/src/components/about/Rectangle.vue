<template>
  <div class="container">
    <div class="row center" data-aos="slide-up" data-aos-delay="100">
      <div class="col-6 ">
        <div class="title">
          <h4>
            innisfree, đảo tinh khiết nơi mà thiên nhiên sạch và vẻ đẹp khỏe
            khoắn cùng tồn tại hài hòa.
          </h4>
        </div>
        <div class="content">
          <p>
            innisfree là thương hiệu chia sẻ những lợi ích của thiên nhiên từ
            hòn đảo Jeju tinh khiết, mang đến vẻ đẹp của cuộc sống xanh, thân
            thiện với môi trường nhằm bảo vệ cân bằng sinh thái.
          </p>
        </div>
      </div>
      <div class="col-6">
        <img
          src="http://www.innisfree.com/vn/vi/resources/images/about/brand_concept_section2.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rectangle",
  data() {
    return {};
  }
};
</script>

<style scope>
.title {
  margin: 30px auto;
}
.title h4 {
  font-weight: 500;
  color: #183f36;
  font-size: 20px;
}
.content {
  font-size: 17px;
  color: black;
  font-weight: 450;
  margin-bottom: 60px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-6 img {
  width: 95%;
  height: auto;
}
</style>
