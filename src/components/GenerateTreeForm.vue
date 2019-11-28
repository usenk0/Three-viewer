<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
  <v-card ref="form">
    <v-card-text>
      <v-text-field
        type="number"
        ref="rootCount"
        v-model.number="formData.rootCount"
        :rules="[() => !!formData.rootCount || 'This field is required']"
        :error-messages="errorMessages"
        label="Количество рутовых нодов"
        placeholder="Количество рутовых нодов"
        required
                
      ></v-text-field>
      Возможное количество детей
      <v-range-slider
        v-model="formData.childCount"
        :max="100"
        :min="1"
        hide-details
        class="align-center"
      >
        <template v-slot:prepend>
          <v-text-field
            v-model="formData.childCount[0]"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
        <template v-slot:append>
          <v-text-field
            v-model="formData.childCount[1]"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-range-slider>
      <v-text-field
        type="number"
        ref="maxDepth"
        v-model.number="formData.maxDepth"
        :rules="[() => !!formData.maxDepth || 'This field is required']"
        :error-messages="errorMessages"
        label="Максимальная вложенность"
        placeholder="Максимальная вложенность"
        required
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="submit">Generate</v-btn>
    </v-card-actions>
  </v-card>
  </v-card>
</template>

<script>
import tree from "../service/tree";
export default {
  name: "GenerateTree",
  data: () => ({
    formData: {
      rootCount: 3,
      childCount: [1, 3],
      maxDepth: 3
    },
    errorMessages: "",
    formHasErrors: false
  }),
  computed: {
    form() {
      return {
        rootCount: this.formData.rootCount,
        maxDepth: this.formData.maxDepth
      };
    }
  },
  watch: {
    name() {
      this.errorMessages = "";
    }
  },
  methods: {
    submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
      if (!this.formHasErrors) {
        this.$store.commit("setTree", { ...this.formData });
        this.$store.commit("setAllTree", tree(this.$store.state.tree.rootCount,this.$store.state.tree.maxDepth,this.$store.state.tree.childCount));
        this.$router.push("/display-tree");
      }
    }
  }
};
</script>