<template>
  <div class="row stores-brand" data-aos="slide-up" data-aos-delay="200">
    <div class="col-6">
      <img v-bind:src="infor.image" alt="" />
    </div>
    <div class="col-6">
      <div class="content-stores ">
        <div class="header">
          <p>Tìm cửa hàng</p>
        </div>
        <div class="description">
          <p>Tìm thông tin cửa hàng gần nhất, dịch vụ.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stores",
  data() {
    return {
      infor: {
        image:
          "http://www.innisfree.com/vn/vi/resources/images/renewal/storeVisual.jpg"
      }
    };
  }
};
</script>

<style>
.col-6 {
  margin: 0;
  padding: 0;
}
.col-6 img {
  height: auto;
  width: 100%;
}
.content-stores {
  background-color: #ebf2d5;
  height: 100%;
  width: 100%;
  display: block;
}
.stores-brand {
  margin-top: 50px;
}
.header,
.desciption {
  width: 100%;
  /* text-align: center; */
}
.header p {
  font-size: 40px;
  padding-top: 70px;
  color: #184037;
  text-align: center;
  text-transform: uppercase;
}
.desciption p {
  font-size: 30px;
  padding: 30px;
  font-weight: 500;
  color: #184037;
  text-align: center;
  text-transform: uppercase;
}
</style>
