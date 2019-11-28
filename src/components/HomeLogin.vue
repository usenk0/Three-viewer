<template>
  <v-card class="mx-auto" max-width="500">
    <v-card ref="form">
      <v-card-text>
        <v-text-field
          ref="login"
          v-model="formData.login"
          :rules="[() => !!formData.login || 'This field is required']"
          :error-messages="errorMessages"
          label="Логин"
          placeholder="Логин"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          ref="password"
          v-model="formData.password"
          :rules="[() => !!formData.password || 'This field is required']"
          :error-messages="errorMessages"
          label="Пароль"
          placeholder="Пароль"
          required
        ></v-text-field>Пол
        <v-radio-group v-model="formData.gender">
          <v-radio label="М" value="man"></v-radio>
          <v-radio label="Ж" value="woman"></v-radio>
        </v-radio-group>
        <v-menu
          v-model="dateFlag"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="formData.birthday" label="Дата рождения" readonly v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="formData.birthday" @input="dateFlag = false"></v-date-picker>
        </v-menu>
        <v-text-field
          type="email"
          v-model="formData.email"
          :error-messages="errorMessages"
          label="Электронный адрес"
          placeholder="Электронный адрес"
          :rules="[validEmail]"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="submit">Login</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { login } from "../service/user_help";
export default {
  name: "HomeLogin",

  data: () => ({
    formData: {
      login: "",
      password: "",
      gender: "man",
      birthday: "",
      email: ""
    },
    dateFlag: "",
    errorMessages: "",
    formHasErrors: false,
    snackbar: false,
    snackbarText: "",
    validEmail: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "Invalid e-mail.";
    }
  }),
  watch: {
    name() {
      this.errorMessages = "";
    }
  },
  computed: {
    form() {
      return {
        login: this.formData.login,
        password: this.formData.password
      };
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
        let self = this;
        login(this.formData).then(result => {
          self.snackbarText = result.msg;
          self.snackbar = !self.snackbar;
          if (result.status == "success") {
            this.$router.push("/generate-tree");
          }
        });
      }
    }
  }
};
</script>
