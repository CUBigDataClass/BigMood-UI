<template>
  <section class="wordcloud">
    <div class="box">
      Twitter Trend Word Cloud
    </div>
    <AppCloud
      :data="words"
      nameKey="name"
      valueKey="value"
      :wordClick="wordClickHandler"
      :showTooltip="false"
    ></AppCloud>
  </section>
</template>

<script>
import AppCloud from "vue-wordcloud";

export default {
  name: "WordCloud",
  props: {
    words: {
      type: Array,
      default: () => []
    },
    urls: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AppCloud
  },
  methods: {
    wordClickHandler(name) {
      const url = this.urls[name];
      window.open(url, "_blank");
    }
  }
};
</script>
<style>
.wordcloud {
  background-color: #262933;
}
.box {
  color: white;
  padding: 10px;
  font-family: "Fira Sans Regular";
  font-size: 18px;
  text-align: center;
}
</style>

