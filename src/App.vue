<template>
  <v-app>
    <v-app-bar
        app
        color="secondary"
        dark
    >
      <v-spacer />
      <div class="title">
        Монетосчитатель
      </div>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
