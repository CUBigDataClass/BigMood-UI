<template>
  <v-card class="mx-auto" color="#212121" dark max-width="800">
    <v-card-title>
      <v-icon large left>mdi-twitter</v-icon>
      <span class="title font-weight-heavy">Twitter Trend Word Cloud</span>
    </v-card-title>
    <v-card-text>
      <wordcloud :data="words" nameKey="name" valueKey="value" :wordClick="wordClickHandler"></wordcloud>
    </v-card-text>
  </v-card>
</template>

<script>
// import axios from "axios";
import wordcloud from "vue-wordcloud";

export default {
  name: "WordCloud",
  components: {
    wordcloud
  },
  props: ['words', 'urls'],
  methods: {
    wordClickHandler(name, value, vm) {
      // console.log("wordClickHandler", name, value);
      const url = this.urls[name]
      window.open(url, '_blank');
    },
  },
  data() {
    return {
      defaultWords: null,
      loading: true
    };
  }
};
</script>