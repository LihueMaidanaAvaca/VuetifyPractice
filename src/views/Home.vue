<template>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
  <HelloWorld />
  <v-locale-provider locale="es">
    <v-date-picker show-adjacent-months></v-date-picker>
  </v-locale-provider>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
