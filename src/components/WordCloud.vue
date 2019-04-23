<template>
  <v-card class="mx-auto" color="#212121" dark max-width="800">
    <v-card-title>
      <v-icon large left>mdi-twitter</v-icon>
      <span class="title font-weight-heavy">Twitter Trend Word Cloud</span>
    </v-card-title>
    <v-card-text v-if="!loading">
      <wordcloud :data="defaultWords" nameKey="name" valueKey="value" :wordClick="wordClickHandler"></wordcloud>
    </v-card-text>
  </v-card>
  <!-- <div id="app"  v-if="!loading">
    <wordcloud :data="defaultWords" nameKey="name" valueKey="value" :wordClick="wordClickHandler"></wordcloud>
  </div>-->
</template>

<script>
import axios from "axios";
import wordcloud from "vue-wordcloud";

export default {
  name: "WordCloud",
  components: {
    wordcloud
  },

  beforeCreate() {
    axios
      .get("http://35.239.169.14:3000/bigmoodapi/trends")
      .then(response => {
        this.trends = response.data;
        const words = [];
        this.trends.forEach(item => {
          item.trends.forEach(trend => words.push(trend.name));
        });
        const wordle = this.counter(words);
        this.defaultWords = [];
        Object.keys(wordle).map(key => {
          this.defaultWords.push({
            name: key,
            value: wordle[key] * 300
          });
        });
        console.log(this.defaultWords);
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    wordClickHandler(name, value, vm) {
      console.log("wordClickHandler", name, value, vm);
    },

    counter(arr) {
      let a = {},
        prev;
      arr.sort();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
          a[arr[i]] = 1;
        } else {
          a[arr[i]] += 1;
          // b[b.length - 1]++;
        }
        prev = arr[i];
      }
      return a;
    }
  },
  data() {
    return {
      defaultWords: null,
      loading: true
    };
  }
};
</script>