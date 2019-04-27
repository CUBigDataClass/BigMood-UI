<template>
  <v-card class="mx-auto" color="#212121" dark max-width="70%" height="500">
    <v-card-title>
      <v-icon large center>mdi-twitter</v-icon>
      <span class="title font-weight-heavy center">Twitter Trend Word Cloud</span>
    </v-card-title>
    <v-card-text>
      <wordcloud
        :data="words"
        nameKey="name"
        valueKey="value"
        :wordClick="wordClickHandler"
        :showTooltip="false"
      ></wordcloud>
    </v-card-text>
  </v-card>
</template>

<script>
// TO DO: Add cursor:pointer to wordcloud
import wordcloud from "vue-wordcloud";

export default {
  name: "WordCloud",
  components: {
    wordcloud
  },
  props: ["words", "urls"],
  watch: {
    words: function(newWords) {
      this.words = newWords
      console.log('WordCloud Component', this.words)
    },
    urls: function(newUrls) {
      this.urls = newUrls
    }
  },
  methods: {
    wordClickHandler(name) {
      const url = this.urls[name];
      window.open(url, "_blank");
    }
  },
};
</script>

<style>
.cursor {
  cursor: pointer;
}
</style>
