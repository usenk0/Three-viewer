<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Three viewer</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <span v-if="this.$store.state.userData" class="body-1 mr-5">Hello: {{this.$store.state.userData.login}}</span>
      <v-toolbar-items v-if="this.$store.state.userData">
        <v-btn text><router-link to="/profile">Profile</router-link></v-btn> 
        <v-btn text @click="logOut">Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped fixed>
      <v-list dense>
        <v-list-item v-if="this.$store.state.userData" link>
          <v-list-item-action>
            <v-icon>mdi-tree</v-icon>
          </v-list-item-action>
          <router-link to="/generate-tree">
            <v-list-item-content>
              <v-list-item-title>Generate Tree</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-list-item v-if="this.$store.state.userData" link>
          <v-list-item-action>
            <v-icon>mdi-monitor</v-icon>
          </v-list-item-action>
          <router-link to="/display-tree">
            <v-list-item-content>
              <v-list-item-title>Display existing tree</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-list-item v-if="!this.$store.state.userData" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <router-link to="/">
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  // vuetify: new Vuetify(),
  data: () => ({
    //
    drawer: true
  }),
  methods:{
    logOut(){
      this.$store.commit("logOutUser");
      this.$router.push("/");
    }
  }
};
</script>
