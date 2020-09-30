<template>
  <div
    class=" center"
    v-bind:class="{ contactus: showContact, 'feedback-contact ': !showContact }"
  >
    <div v-if="showContact">
      <form
        id="singup-form"
        method="post"
        action="#"
        v-on:submit.prevent="submit()"
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
              v-bind:class="{
                'is-invalid': validationStatus($v.fullname)
              }"
              placeholder="Full Name"
            />
            <div v-if="!$v.fullname.required" class="invalid-feedback">
              Bạn chưa nhập tên !
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
              Bạn chưa nhập email
            </div>
            <div v-if="!$v.email.email" class="invalid-feedback">
              Email chưa đúng ! {{ $v.email.$param.length }}
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
              Bạn chưa nhập số điện thoại !
            </div>
            <div v-if="!$v.phone.minLength" class="invalid-feedback">
              Số điện thoại chưa đúng !
            </div>
            <div v-if="!$v.phone.maxLength" class="invalid-feedback">
              Số điện thoại chưa đúng !
            </div>
          </div>
          <div class="col-10 form-group">
            <button class="btn btn-vue col-10" type="submit">
              Nhận thông tin
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <div class="circle">
        <h3>Cảm ơn bạn đã liên hệ với chúng tôi!</h3>
      </div>
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
    sendHttpRequest(method, url, dataPost) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.setRequestHeader(
          "Content-Type",
          "application/json"
          // x-www-form-urlencoded
        );

        xhr.onload = () => {
          resolve(xhr.responseText);
        };
        console.log(JSON.stringify(dataPost));
        xhr.send(JSON.stringify(dataPost));
      });
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;
      this.showContact = false;
      let data = {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone
      };
      this.sendHttpRequest("POST", "http://localhost/contactCustomer", {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone
      }).then(responseData => {});
    }
  }
};
</script>

<style>
.contactus {
  margin-top: 100px;
  margin-bottom: 0;
  background-image: url("https://www.innisfree.com/vn/vi/resources/images/member/BG_member.jpg");
  background-size: cover;
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
.feedback-contact {
  margin-top: 100px;
}
.circle {
  width: 100%;
  margin: 20px;
  color: #0c4b3c;
}
</style>
