<template>
  <v-btn @click="toggleTheme">
    <v-icon :color="iconColor">
      {{ iconName }}
    </v-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
let iconName = 'mdi-weather-sunny'
let iconColor = 'yellow'

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  iconName = theme.global.name.value === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'
  iconColor = theme.global.name.value === 'dark' ? 'white' : 'yellow' 
  localStorage.setItem('theme', theme.global.name.value);
}
</script>
