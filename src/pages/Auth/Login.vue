<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form ref="loginLorm" v-model="valid" lazy-validation>
          <v-text-field
            v-model="userLogin.user_name"
            :counter="40"
            :rules="userNameRules"
            :label="$t('auth.user_name')"
            autocomplete="username"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="userLogin.user_password"
            :rules="passwordRules"
            :label="$t('auth.user_password')"
            autocomplete="current-password"
            required
          ></v-text-field>
          <v-dialog
            v-model="loginInProgress"
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Please stand by
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn
            :disabled="!valid"
            @click="login"
            color="info"
            primary
          >
            {{ $t('auth.login_button_text') }}
          </v-btn>
          <v-btn @click="clear">{{ $t('global.clear_title') }}</v-btn>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      loginInProgress: false,
      userLogin: {
        user_name: null,
        user_password: null
      },
      currentUser: this.$store.state.AppStore.currentUser,
      valid: false,
      passwordRules: [
        v => !!v || this.$t('auth.user_password_required')
      ],
      userNameRules: [
        v => !!v || this.$t('auth.user_name_required'),
        v => /.+@.+/.test(v) || this.$t('auth.user_name_must_be_valid')
      ]
    }
  },
  created () {
    // this.$refs.loginLorm.validate()
  },
  methods: {
    login () {
      if (this.$refs.loginLorm.validate()) {
        this.loginInProgress = true
        this.$store.dispatch('AppStore/login', {userLogin: this.userLogin}).then(() => {
          this.loginInProgress = false
          if (this.$store.state.AppStore.currentUser) {
            this.$router.replace('/')
          } else {
            this.clear()
            this.$refs.loginLorm.validate()
          }
        })
      }
    },
    clear () {
      this.userLogin.user_name = null
      this.userLogin.user_password = null
    }
  }
}
</script>
