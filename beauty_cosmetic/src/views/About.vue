<template>
  <div class="about">
    <BrandStory></BrandStory>
    <ListIngredients></ListIngredients>
  </div>
</template>

<script>
import BrandStory from "../components/about/BrandStory";
import ListIngredients from "../components/about/ListIngredients.vue";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    BrandStory,
    ListIngredients
  }
};

</script>

<style>
.about {
  margin-top: 100px;
}
</style>
