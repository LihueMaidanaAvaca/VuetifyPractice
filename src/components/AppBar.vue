<template>
  <v-app-bar class="user-banner" color="primary">
    <v-app-bar-title class="user-name">{{ userName }}</v-app-bar-title>

    <toggle-theme/>
    <v-tabs
      v-model="tab"
      color="primary"
      align-tabs="end"
    >
      <v-tab link to="/history">Pagos</v-tab>
      <v-tab link to="/home">Home</v-tab>
      <v-tab @click="showLogoutConfirmationDialog" >Salir</v-tab>
      
    </v-tabs>

    <!-- Modal de confirmación para cerrar sesión -->
    <v-dialog v-model="logoutConfirmationDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">¿Quieres cerrar sesión?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="logout">Sí, Cerrar Sesión</v-btn>
          <v-btn color="error" @click="closeLogoutConfirmationDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import ToggleTheme from './ToggleTheme.vue'

export default {
  name: 'AppBar',

  components: {
    ToggleTheme
  },

  data() {
    return {
      userName: 'Telefonica Argentina S.A.',
      logoutConfirmationDialog: false,
    }
  },

  computed: {
    isDark () {
      return (this.$vuetify.theme.dark)
        ? 'dark'
        : 'light'
    }
  },

  methods: {
    showLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = true
    },
    closeLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = false
    },
    logout() {
      localStorage.removeItem('authToken')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.user-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4ad4f2;
}

.user-name {
  margin: 0;
  color: white;
}

.option {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.option-title {
  margin: 0;
}
</style>
