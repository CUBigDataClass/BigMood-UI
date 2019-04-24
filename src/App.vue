<template>
  <div id="app">
    <NavBar/>
    <div class="chart" v-if="!loading">
      <WorldMap :data='countryTrends'/>
    </div>
    <div class="margin" v-if="!loading">
      <WordCloud :words="defaultWords" :urls="urls"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import WordCloud from "./components/WordCloud.vue";
import WorldMap from "./components/WorldMap.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    WorldMap,
    NavBar,
    WordCloud
  },
  data() {
    return {
      loading: true,
      defaultWords: null,
      urls: {},
      trends: [],
      countryTrends: [],
    };
  },
  methods: {
    counter(arr) {
      let a = {},
        prev;
      arr.sort();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
          a[arr[i]] = 1;
        } else {
          a[arr[i]] += 1;
        }
        prev = arr[i];
      }
      return a;
    },

    getWords() {
      const words = [];
      this.trends.forEach(item => {
        item.trends.forEach(trend => {
          this.urls[trend.name] = trend.url;
          words.push(trend.name);
        });
      });
      const wordle = this.counter(words);
      this.defaultWords = [];
      Object.keys(wordle).map(key => {
        this.defaultWords.push({
          name: key,
          value: wordle[key] * 10
        });
      });
    }
  },
  beforeCreate() {
    axios
      .get("http://35.239.169.14:3000/bigmoodapi/trends")
      .then(response => {
        this.trends = response.data;
        this.getWords(this.trends);
        this.countryTrends = this.trends.filter(item => item.locationType == 'Country');
        // console.log(this.countryTrends);
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.chart {
  margin-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.margin {
  margin-top: 40px;
  margin-bottom: 40px;
}
body {
  background-image: url("./assets/bg.png");
  background-size: cover;
}
</style>
