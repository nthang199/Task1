<template>
  <div class="contactus center">
    <div v-if="showContact">
      <form
        id="singup-form"
        method="post"
        v-on:submit="submit()"
        class="center"
      >
        <div class="row center">
          <div class="col-10">
            <h4>Have a nice day</h4>
          </div>
          <div class="col-10 form-group">
            <input
              type="text "
              v-model.trim="$v.fullname.$model"
              class="form-control form-control-lg"
              v-bind:class="{ 'is-invalid': validationStatus($v.fullname) }"
              placeholder="Full Name"
            />
            <div v-if="!$v.fullname.required" class="invalid-feedback">
              ban chua nhap ten
            </div>
          </div>
          <div class="col-10 form-group">
            <input
              type="email "
              v-model.trim="$v.email.$model"
              class="form-control form-control-lg"
              v-bind:class="{ 'is-invalid': validationStatus($v.email) }"
              placeholder="Email"
            />
            <div v-if="!$v.email.required" class="invalid-feedback">
              Ban chua nhap email
            </div>
            <div v-if="!$v.email.email" class="invalid-feedback">
              Email chua dusng {{ $v.phone.$param.length }}
            </div>
          </div>
          <div class="col-10 form-group">
            <input
              type="text "
              v-model.trim="$v.phone.$model"
              class="form-control form-control-lg"
              v-bind:class="{ 'is-invalid': validationStatus($v.phone) }"
              placeholder="Phone"
            />
            <div v-if="!$v.phone.required" class="invalid-feedback">
              Ban chua nhap sdt
            </div>
            <div v-if="!$v.phone.minLength" class="invalid-feedback">
              Do dai chua dung
            </div>
            <div v-if="!$v.phone.maxLength" class="invalid-feedback">
              Do dai chua dung
            </div>
          </div>
          <div class="col-10 form-group">
            <button class="btn btn-vue col-10 ">
              Nhận thông tin
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <p>thanks</p>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "Contact",
  data() {
    return {
      showContact: true,
      fullname: "",
      email: "",
      phone: ""
    };
  },
  validations: {
    fullname: { required },
    email: { required, email },
    phone: { required, minLength: minLength(10), maxLength: maxLength(11) }
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;
      this.showContact = false;
      let data = {
        fullname: "hang",
        email: "hang",
        phone: "hang"
      };
      this.sendHttpRequest(
        "POST",
        "http://localhost:8080",
        data
      ).then(responseData => {});
    },
    sendHttpRequest(method, url, dataPost) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        var str = "";
        for (let key in dataPost) {
          str += key + dataPost[key];
        }

        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );

        xhr.onload = () => {
          resolve(JSON.parse(xhr.responseText));
        };
        xhr.send(JSON.stringify(dataPost));
      });
    }
  }
};
</script>

<style>
.contactus {
  margin-top: 100px;
  margin-bottom: 0;
  background-image: url("https://www.innisfree.com/vn/vi/resources/images/member/BG_member.jpg");
}
.center {
  display: flex;
  align-content: center;
  justify-content: center;
}
.row .col-10 {
  margin: 20px auto;
}
#singup-form {
  width: 400px;
  height: 500px;
  background-color: white;
  margin: 80px auto;
  border-radius: 5px;
}
.btn-vue {
  background-color: #1a9679;
  color: #fff;
  font-size: 20px;
}
.invalid-feedback {
  text-align: left;
}
.btn-vue:hover {
  background-color: #22c2ce;
  color: #fff;
  font-size: 20px;
}
.col-10 h4 {
  color: #0c4b3c;
  font-weight: 600;
  font-size: 30px;
}
</style>
