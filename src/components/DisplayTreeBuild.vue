<template>
  <v-card
    class="mx-auto"
    max-width="500"
   
  >
    <v-card-text  v-if ="this.$store.state.allTree" >
      <v-treeview :items="this.$store.state.allTree" :open-on-click="true" :hoverable="true" :selectable="true"></v-treeview>
      <v-btn color="primary" text @click="saveThree">Save Three</v-btn>
     </v-card-text>
    <v-card-text  v-if ="!this.$store.state.allTree" >
      <router-link to="/generate-tree">
             <v-btn color="primary" text>Generate Tree</v-btn>
          </router-link>
     </v-card-text>

  </v-card>
  
</template>

<script>
export default {
  name: 'DispayTreeBuild',

  data: () => ({
 
  }),
  computed: {
    
  },
  methods: {
   saveThree(){
     
   }
  },
}
</script>