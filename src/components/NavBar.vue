<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dark color = 'blue darken-2'>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="text-lg-center">BigMood Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>