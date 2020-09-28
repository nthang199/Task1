<template>
  <div class="footer ">
    <div class="container ">
      <div class="row">
        <div
          class="col-3"
          v-for="(item, index) in listFooter"
          v-bind:key="index"
        >
          <div class="footer-content">
            <ul>
              <div class="title">
                <p>{{ item.title }}</p>
              </div>
              <li v-for="(value, key) in item.listContent" v-bind:key="key">
                {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="logo">
        <a
          class="navbar-brand col-8"
          href="#"
          v-on:click="chooseMenu($event, 0)"
          ><router-link to="/"
            ><img
              class="logo"
              src="http://www.innisfree.com/vn/vi/resources/images/renewal/header_logo.svg"
              alt="Logo"/></router-link
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      listFooter: [
        {
          title: "Sản phẩm",
          listContent: [
            "Chăm sóc da",
            "Trang điểm",
            "Chăm sóc cơ thể",
            "Tin mới"
          ]
        },
        {
          title: "Dịch vụ khách hàng",
          listContent: [
            "Hỏi đáp",
            "Liên hệ với chúng tôi",
            "Phần thường innisfree"
          ]
        },
        {
          title: "Về chúng tôi",
          listContent: [
            "Giới thiệu về thương hiệu",
            "Thành phần",
            "Chiến dịch từng xanh",
            "Tuyển dụng"
          ]
        },
        {
          title: "Sản phẩm",
          listContent: [
            "Chăm sóc da",
            "Trang điểm",
            "Chăm sóc cơ thể",
            "Tin mới"
          ]
        },
        {
          title: "Sản phẩm",
          listContent: [
            "Chăm sóc da",
            "Trang điểm",
            "Chăm sóc cơ thể",
            "Tin mới"
          ]
        },
        {
          title: "Dịch vụ khách hàng",
          listContent: [
            "Hỏi đáp",
            "Liên hệ với chúng tôi",
            "Phần thường innisfree"
          ]
        },
        {
          title: "Về chúng tôi",
          listContent: [
            "Giới thiệu về thương hiệu",
            "Thành phần",
            "Chiến dịch từng xanh",
            "Tuyển dụng"
          ]
        },
        {
          title: "Sản phẩm",
          listContent: [
            "Chăm sóc da",
            "Trang điểm",
            "Chăm sóc cơ thể",
            "Tin mới"
          ]
        }
      ]
    };
  }
};
</script>

<style>
.footer {
  background-color: #184038;
}
ul {
  list-style-type: none;
}
.title {
  display: flex;
  justify-content: left;
  align-items: left;
}
.title p {
  color: white;
  font-size: 20px;
  text-align: left;
}
ul li {
  color: gray;
  font-size: 15px;
  text-align: left;
}
ul {
  margin-top: 20px;
}
.logo {
}
</style>
