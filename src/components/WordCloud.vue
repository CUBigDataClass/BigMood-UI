<template>
  <section class='wordcloud'>
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
  background-color: #2d4053;
}
</style>

