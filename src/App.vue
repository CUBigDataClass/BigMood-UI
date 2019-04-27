<template>
  <div id="app">
    <NavBar/>
    <!-- <div v-if="showCityView"> -->
      <CityView
        :cityTrends="cityTrends"
        :countryCode="countryCode"
        :urls="cityUrls"
        :defaultWords="cityWords"
        :countryTrends="singleCountry"
        :country="country"
      />
    <!-- </div> -->
    <!-- World View -->
    <!-- <div v-else> -->
      <div class="chart" v-if="!loading">
        <WorldMap :data="countryTrends" @selectedCountry="showCityInfo"/>
      </div>
      <div class="margin" v-if="!loading">
        <WordCloud :words="defaultWords" :urls="urls"/>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import WordCloud from "./components/WordCloud.vue";
import WorldMap from "./components/WorldMap.vue";
import CityView from "./components/CityView.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    WorldMap,
    NavBar,
    WordCloud,
    CityView
  },
  data() {
    return {
      loading: true,
      defaultWords: null,
      urls: {},
      trends: [],
      countryTrends: [],
      cityTrends: [],
      countryCode: null,
      cityUrls: {},
      showCityView: false,
      cityWords: null,
      singleCountry: null,
      showCityView: false,
      country: ""
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

    showCityInfo(country) {
      this.country = country;
      this.cityTrends = this.trends.filter(
        item => item.country == country && item.locationType == "City"
      );
      if (this.cityTrends) {
        this.countryCode = this.cityTrends[0].countryCode;
        [this.cityWords, this.cityUrls] = this.getWords(this.cityTrends);
        this.singleCountry = this.trends.filter(
          item => item.country == country && item.locationType == "Country"
        )[0].trends;
        this.showCityView = true;
      } else {
        console.log("No Trends");
      }
    },

    getWords(trends) {
      const words = [];
      let urls = {};
      trends.forEach(item => {
        item.trends.forEach(trend => {
          urls[trend.name] = trend.url;
          words.push(trend.name);
        });
      });
      const wordle = this.counter(words);
      const defaultWords = [];
      Object.keys(wordle).map(key => {
        defaultWords.push({
          name: key,
          value: wordle[key]
        });
      });
      return [defaultWords, urls];
    }
  },
  beforeCreate() {
    axios
      .get("http://35.239.169.14:3000/bigmoodapi/trends")
      .then(response => {
        this.trends = response.data;
        [this.defaultWords, this.urls] = this.getWords(this.trends);
        this.countryTrends = this.trends.filter(
          item => item.locationType == "Country"
        );
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
  background-image: url("./assets/bg.png");
  background-size: cover;
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
