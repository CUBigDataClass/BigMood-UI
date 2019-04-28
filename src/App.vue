<template>
  <main id="app" class="grid-container">
    <div class="map">
      <div class="back" v-if="isCityView" @click="showCountryView">
        <img src="./assets/ic-back.png">
      </div>
      <CityView v-if="isCityView" :cityTrends="cityTrends" :countryCode="countryCode" :country="country"/>
      <WorldMap v-else :data="countryTrends" @selectedCountry="showCityInfo"/>
    </div>
    <WordCloud class="word-cloud" :words="defaultWords" :urls="urls" :key='isCityView'/>
    <TrendBarChart class="trends-volume" :barData="singleCountry"/>
  </main>
</template>

<script>
import WordCloud from "./components/WordCloud.vue";
import WorldMap from "./components/WorldMap.vue";
import CityView from "./components/CityView.vue";
import TrendBarChart from "./components/TrendBarChart.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    WorldMap,
    WordCloud,
    CityView,
    TrendBarChart
  },
  data() {
    return {
      loading: true,
      isCityView: false,
      defaultWords: [],
      urls: {},
      trends: [],
      countryTrends: [],
      cityTrends: [],
      countryCode: null,
      cityUrls: {},
      cityWords: null,
      singleCountry: [],
      country: "",
      barChartData: [],
    };
  },
  mounted() {
    this.getTrends();
    this.getGlobalTrends();
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
      this.isCityView = true;
      this.cityTrends = this.trends.filter(
        item => item.country == country && item.locationType == "City"
      );
      if (this.cityTrends) {
        this.countryCode = this.cityTrends[0].countryCode;
        [this.defaultWords, this.urls] = this.getWords(this.cityTrends);
        this.singleCountry = this.trends.filter(
          item => item.country == country && item.locationType == "Country"
        )[0].trends;
      } else {
        console.log("No Trends");
      }
    },

    showCountryView() {
      this.isCityView = false
      this.defaultWords = this.countryWords
      this.singleCountry = this.globalTrends
      this.urls = this.countryUrls

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
    },
    getTrends() {
      axios
        .get("http://35.194.37.111:3000/bigmoodapi/trends")
        .then(response => {
          this.trends = response.data;
          [this.defaultWords, this.urls] = this.getWords(this.trends);
          this.countryWords = this.defaultWords
          this.countryUrls = this.urls
          this.countryTrends = this.trends.filter(
            item => item.locationType == "Country"
          );
        })
        .catch(error => {
          this.error = error;
        })
        .finally(() => (this.loading = false));
    },

    getGlobalTrends() {
      axios
        .get("http://35.194.37.111:3000/bigmoodapi/globaltrends")
        .then(response => {
          this.singleCountry = response.data;
          this.globalTrends = this.singleCountry;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style>
body {
  font-family: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background: #f8f9f9;
  color: #333;
  -webkit-font-smoothing: antialiased;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
}

.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 500px 1max-content;
  grid-template-areas: "map map" "word-cloud trends-volume";
}

@media (max-width: 720px) {
  .grid-container {
    grid-template-columns: 100%;
    grid-template-rows: 500px 400px 500px;
    grid-template-areas: "map" "word-cloud" "trends-volume";
  }
}

.map {
  grid-area: map;
}

.word-cloud {
  grid-area: word-cloud;
}

.trends-volume {
  grid-area: trends-volume;
}

.back {
  position: fixed;
  cursor: pointer;
  left: 32px;
  top: 32px;
  z-index: 1;
  font-size: 18px;
  color: #fff;
}
</style>
