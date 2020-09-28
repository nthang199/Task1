<template>
  <div class="ingredients">
    <div
      class="ingredients-info"
      data-aos="slide-up"
      v-bind:style="{ backgroundImage: 'url(' + imageBg + ')' }"
    >
      <div class="container">
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6">
            <div class="txt-title">
              <h2>Thành Phần</h2>
              <p class="txt-title-sub">
                INNISFREE,<br />Chứa đựng cả hòn đảo Jeju trong lành
              </p>

              <div class="description">
                <p>
                  Có rất nhiều thương hiệu mới ra đời theo concept hướng đến
                  thiên nhiên,thúc đẩy Innisfree cân nhắc tạo ra hình ảnh thiên
                  nhiên đặc biệt tinh khiết của riêng mình. Innisfree đã suy
                  nghĩ lại từ đầu để tìm ra nguyên liệu đặc biệt của riêng
                  Innisfree, không phải loại nguyên liệu thiên nhiên mà mọi
                  người đều nhắc đến, thiên nhiên là điều mà ai cũng có thể nhắc
                  đến nhưng không phải tất cả đều hiểu rõ. Sau nhiều trăn trở,
                  cuối cùng Innisfree đã tìm ra thiên nhiên của riêng mình ở một
                  nơi rất gần.
                </p>
                <p>
                  Câu trả lời chính là ở mối lương duyên sâu đậm của đảo Jeju
                  trong lành với trà xanh từ 20 năm trước khi Innisfree ra đời.
                  Chủ nghĩa thiên nhiên mang tên "Natural Benefit from JEJU" năm
                  2010 (Quà tặng từ thiên nhiên trong lành đảo Jeju) đã được
                  hoàn thiện. Đảo Jeju với ánh nắng ấm áp, không khí trong lành,
                  những mảnh đất phì nhiêu cùng nguồn nước tinh khiết chính là
                  hòn đảo trong lành đích thực đối với Innisfree, và đảo núi lửa
                  Jeju có vai trò như bộ lọc từ thổ nhưỡng và thiên nhiên với
                  hàm lượng Canxi, Magie, Sắt oxi hóa và chất hữu cơ phong phú,
                  là nơi thích hợp nhất để có thể tạo ra những nguyên liệu tốt
                  nhất. Mối nhân duyên sâu đậm giữa Innisfree và đảo Jeju đã bắt
                  đầu như vậy từ những lá trà xanh trong nông trại trà hữu cơ ẩn
                  chứa nguồn năng lượng của hòn đảo Jeju trong lành.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ingredient-background">
      <div class="row ">
        <div
          class="col-xs-5ths center"
          v-for="(item, index) in listLogo"
          v-bind:key="index"
        >
          <IngredientLogo v-bind:iconLogo="item"></IngredientLogo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ingredient from "./Ingredient.vue";
import IngredientLogo from "./IngredientLogo.vue";
export default {
  name: "ListIngredients",
  data() {
    return {
      imageBg:
        "http://www.innisfree.com/vn/vi/resources/images/renewal/ingredients/ingredients_visual.jpg",
      listLogo: [
        { title: "Trà xanh", image: "<i class='fa fa-leaf size-icon'></i> " },
        { title: "Trà xanh", image: "<i class='fa fa-leaf size-icon'></i> " },
        {
          title: "Tro núi lửa",
          image: "<i class='fa fa-mountain size-icon'></i> "
        },
        {
          title: "Tro núi lửa",
          image: "<i class='fa fa-mountain size-icon'></i> "
        },
        { title: "Trà xanh", image: "<i class='fa fa-leaf size-icon'></i> " },
        {
          title: "Tro núi lửa",
          image: "<i class='fa fa-mountain size-icon'></i> "
        },
        { title: "Trà xanh", image: "<i class='fa fa-leaf size-icon'></i> " },
        {
          title: "Tro núi lửa",
          image: "<i class='fa fa-mountain size-icon'></i> "
        },
        { title: "Trà xanh", image: "<i class='fa fa-leaf size-icon'></i> " },
        {
          title: "Tro núi lửa",
          image: "<i class='fa fa-mountain size-icon'></i> "
        }
      ]
    };
  },
  components: {
    Ingredient,
    IngredientLogo
  }
};
</script>

<style>
.ingredients-info {
  background-size: cover;
  background-position: -170px 0px;
  /* height: 600px; */
  /* width: 120%; */
}
.ingredient-background {
  background-color: #fafafa;
}
.ingredient-background .row {
  margin: 0 12%;
  padding: 5px 0px;
  display: flex;
}
.txt-title {
  text-align: left;
}
.txt-title br {
}
.txt-title h2 {
  text-transform: uppercase;
  margin-top: 60px;
  margin-bottom: 15px;
  border-bottom: 2px solid#222222;
  font-size: 35px;
}
.txt-title .txt-title-sub {
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: 500;
  color: #183f36;
  font-size: 20px;
}
.description {
  font-size: 16px;
  color: black;
  font-weight: 450;
  text-align: left;
  margin-bottom: 60px;
}
.col-xs-5ths,
.col-sm-5ths,
.col-md-5ths,
.col-lg-5ths {
  position: relative;
  min-height: 1px;
  /* padding-right: 5px;
  padding-top: 5px;
  padding-left: 5px; */
  padding: 5px;
}
.col-xs-5ths {
  width: 20%;
  float: left;
}
@media (min-width: 768px) {
  .col-sm-5ths {
    width: 20%;
    float: left;
  }
}
@media (min-width: 992px) {
  .col-md-5ths {
    width: 20%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-5ths {
    width: 20%;
    float: left;
  }
}
</style>
