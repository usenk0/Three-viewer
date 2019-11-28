<template>
  <v-card class="mx-auto" max-width="500">
    <v-card ref="form">
      <v-card-text>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{this.$store.state.userData.login}}</v-list-item-title>
               <v-list-item-subtitle>  <v-icon>mdi-calendar</v-icon>  {{this.$store.state.userData.birthday}}</v-list-item-subtitle>
                <v-list-item-subtitle> <v-icon>mdi-email</v-icon>  {{this.$store.state.userData.email}}</v-list-item-subtitle>
                <v-list-item-subtitle>  <v-icon>mdi-account</v-icon> {{this.$store.state.userData.gender}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "ProfileUser",
  data: () => ({
  }),
  watch: {
  },
  computed: {
  },
  methods: {
  }
};
</script>
